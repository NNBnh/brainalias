"use strict";

const langCharRight  = typeof(langRight)  === "string" ? langRight  : ">";
const langCharLeft   = typeof(langLeft)   === "string" ? langLeft   : "<";
const langCharIncmnt = typeof(langIncmnt) === "string" ? langIncmnt : "+";
const langCharDecmnt = typeof(langDecmnt) === "string" ? langDecmnt : "-";
const langCharOutput = typeof(langOutput) === "string" ? langOutput : ".";
const langCharInput  = typeof(langInput)  === "string" ? langInput  : ",";
const langCharOpen   = typeof(langOpen)   === "string" ? langOpen   : "[";
const langCharClose  = typeof(langClose)  === "string" ? langClose  : "]";

const parse = (function () {
  let input;
  let output;
  let data;
  let ptr;

  const ops = {
    [langCharIncmnt]: function () {
      data[ptr] = data[ptr] || 0;
      data[ptr]++;
      console.log(langCharIncmnt, data[ptr], ptr);
    },

    [langCharDecmnt]: function () {
      data[ptr] = data[ptr] || 0;
      data[ptr]--;
      console.log(langCharDecmnt, data[ptr], ptr);
    },

    [langCharLeft]: function () {
      ptr--;
      if (ptr < 0) {
        ptr = 0; // Don't allow pointer to leave data array
      }
      console.log(langCharLeft, ptr);
    },

    [langCharRight]: function () {
      ptr++;
      console.log(langCharRight, ptr);
    },

    [langCharOutput]: function () {
      let c = String.fromCharCode(data[ptr]);
      output.push(c);
      console.log(langCharOutput, c, data[ptr]);
    },

    [langCharInput]: function () {
      let c = input.shift();
      if (typeof c == "string") {
        data[ptr] = c.charCodeAt(0);
      }
      console.log(langCharInput, c, data[ptr]);
    },
  };

  function error_handler(str) {
    const errorString = "ERROR: " + str + "!";

    console.log(errorString);
    throw errorString;
  }

  function program(nodes) {
    return function (inputString) {
      output = [];
      data = [];
      ptr = 0;

      input = (inputString && inputString.split("")) || [];

      nodes.forEach(function (node) {
        node();
      });

      const outputString = output.join("");

      console.log("OUTPUT: " + outputString);
      return outputString;
    };
  }

  function loop(nodes) {
    return function () {
      let loopCounter = 0;

      while (data[ptr] > 0) {
        if (loopCounter++ > 10000) {
          error_handler("Infinite loop detected");
        }

        nodes.forEach(function (node) {
          node();
        });
      }
    };
  }

  let programChars;

  function parseProgram() {
    let nodes = [];
    let nextChar;

    while (programChars.length > 0) {
      nextChar = programChars.shift();
      if (ops[nextChar]) {
        nodes.push(ops[nextChar]);
      } else if (nextChar == langCharOpen) {
        nodes.push(parseLoop());
      } else if (nextChar == langCharClose) {
        error_handler("Missing loop opener");
      }
    }

    return program(nodes);
  }

  function parseLoop() {
    let nodes = [];
    let nextChar;

    while (programChars[0] != langCharClose) {
      nextChar = programChars.shift();
      if (nextChar == undefined) {
        error_handler("Missing loop closure");
      } else if (ops[nextChar]) {
        nodes.push(ops[nextChar]);
      } else if (nextChar == langCharOpen) {
        nodes.push(parseLoop());
      }
    }
    programChars.shift(); // Discard `]`

    return loop(nodes);
  }

  function parse(str) {
    programChars = str.split("");
    return parseProgram();
  }

  return parse;
})();

function run(code, input) {
  return parse(code)(input);
}
