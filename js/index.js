"use strict";

/* --------------------------------- Config --------------------------------- */

const langName = "Brainfuck";

const langRight  = ">";
const langLeft   = "<";
const langIncmnt = "+";
const langDecmnt = "-";
const langOutput = ".";
const langInput  = ",";
const langOpen   = "[";
const langClose  = "]";

const langDescription = [
  [langRight, langLeft, langIncmnt, langDecmnt, langOutput, langInput, langOpen, langClose].join(" "),
  "<a href='https://esolangs.org/wiki/Brainfuck'>" + langName + "</a><br> by <a href='https://esolangs.org/wiki/Urban_M%C3%BCller'>Urban Müller</a>",
  "Brainfuck is an esoteric programming language created in 1993 notable for its extreme minimalism, the language consists of only eight simple commands, a data pointer and an instruction pointer. While it is fully Turing complete, it is not intended for practical use, but to challenge and amuse programmers. Brainfuck simply requires one to break commands into microscopic steps.",
  "This programing language interpreter was created using <a href='https://github.com/NNBnh/brainfucker'>Brainfucker</a> by <a href='https://github.com/NNBnh'>NNB</a>.",
  "Which is a fork of <a href='https://github.com/skilldrick/brainfuck-js'>brainfuck-js</a> by <a href='https://github.com/skilldrick'>Nick Morgan</a>."
].join("<br><br>");

/* -------------------------------------------------------------------------- */

$(document).ready(function () {
  $("title").text(langName);

  function makeUrl() {
    let code = $("#code").val() || "";
    let input = $("#input").val() || "";
    let url = window.location.href.split("?")[0];
    url += "?code=" + encodeURIComponent(code);
    url += "&input=" + encodeURIComponent(input);
    $("#url").attr("href", url);
  }

  const queryString = window.location.search.substring(1);
  const paramsArray = queryString.split("&");
  let params = {};
  for (let i = 0; i < paramsArray.length; i++) {
    let param = paramsArray[i].split("=");
    params[param[0]] = decodeURIComponent(param[1]);
  }

  $("#code").val(params.code);
  $("#input").val(params.input);
  makeUrl();

  $("#code, #input").change(function () {
    makeUrl();
  });

  $("form").submit(function (e) {
    e.preventDefault();
    let code = $("#code").val();
    let input = $("#input").val();
    try {
      $("#output").text(run(code, input));
    } catch (e) {
      // $("#output").replaceWith("<div id='output'><spam class='error'>" + e + "</spam></div>");
      $("#output").html("<spam class='error'>" + e + "</spam>");
    }
  });

  $("#about").click(function () {
    $("#output").html(langDescription);
  });
});
