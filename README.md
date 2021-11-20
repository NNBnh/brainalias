<h1 align="center">BrainAlias</h1>
<p align="center">A interpreter generator for your brainfuck-aliases language</p>
<p align="center"><img src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2017/png/iconmonstr-idea-11.png&r=255&g=148&b=112"></p>
<p align="center"><a href="https://github.com/NNBnh/brainalias/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-unlicense-%23B3684F.svg?labelColor=585858&style=for-the-badge&logoColor=FFFFFF" alt="License: GPL-3.0"></a> <a href="https://gist.github.com/NNBnh/9ef453aba3efce26046e0d3119dab5a7#development-completed"><img src="https://img.shields.io/badge/development-completed-%23B3684F.svg?labelColor=585858&style=for-the-badge&logoColor=FFFFFF" alt="Development completed"></a></p>

## 💡 About
**BrainAlias** is an online [brainfuck](https://esolangs.org/wiki/Brainfuck) interpreter and also an online-interpreter-generator for your brainfuck-aliases language.

From [brainfuck's Wikipedia page](https://wikiless.org/wiki/Brainfuck):

> Brainfuck is an esoteric programming language created in 1993 notable for its extreme minimalism, the language consists of only eight simple commands, a data pointer and an instruction pointer.
> While it is fully Turing complete, it is not intended for practical use, but to challenge and amuse programmers. Brainfuck simply requires one to break commands into microscopic steps.

| Command | Description                                                            |
| :-----: | ---------------------------------------------------------------------- |
| `>`     | Move the pointer to the right                                          |
| `<`     | Move the pointer to the left                                           |
| `+`     | Increment the memory cell at the pointer                               |
| `-`     | Decrement the memory cell at the pointer                               |
| `.`     | Output the character signified by the cell at the pointer              |
| `,`     | Input a character and store it in the cell at the pointer              |
| `[`     | Jump past the matching closure if the cell at the pointer is 0         |
| `]`     | Jump back to the matching opener if the cell at the pointer is nonzero |

> *All other characters should be considered comments and ignored.*

- [Try it now](https://nnbnh.github.io/brainalias).
- Examples:
  - [`ReverseFuck`](https://nnbnh.github.io/brainalias/?commands=%3C%3E-+,.][&name=ReverseFuck&page=https://sourceforge.net/projects/reversef&author=Juraj%20Borza&apage=https://esolangs.org/wiki/Juraj_Borza&description=ReverseFuck%20is%20a%20Brainfuck%20modification%20created%20by%20Juraj%20Borza%20in%202006,%20which%20uses%20%22reversed%22%20brainfuck%20operators.%20This%20means%20that%20operator%20+%20acts%20as%20-,%20%3C%20acts%20as%20%3E%20and%20vice%20versa.%20The%20reason%20for%20this%20is%20that%20brainfuck%20may%20be%20too%20easy%20to%20understand%20for%20people,%20as%20+%20increments%20the%20current%20cell%20and%20%3E%20increments%20the%20pointer.%20But%20when%20this%20is%20reversed,%20it%20is%20harder%20to%20make%20sense%20of%20it.)
  - [`Khoai_[]lang`](https://nnbnh.github.io/brainalias/?commands=kha_oi[]&name=Khoai_[]lang&page=https://github.com/NNBnh/brainfucker&author=NNB&apage=https://github.com/NNBnh)
  - [And more...](https://github.com/NNBnh/brainalias/discussions/3)

### ✨ Features
- Shareable code and input through hyperlink `[&]`.
- Retro/terminal theme.
- Minimal design, maximum screen real estate.
- Featuring:
  - [Da one color scheme](https://github.com/NNBnh/da-one).
  - [Bmono font](https://github.com/NNBnh/bmono).

## 🚀 Generate

To generate a simple interpreter, just modify the following URL by replacing uppercase words with your desired configuration:

```
https://nnbnh.github.io/brainalias/
?commands=COMMANDS
&name=LANGUAGE_NAME
&page=LANGUAGE_URL
&author=AUTHOR_NAME
&apage=AUTHOR_URL
&description=DESCRIPTION
```

The `COMMANDS` options must contain exactly 8 characters for 8 commands in these order:

1. Move the pointer to the right.
2. Move the pointer to the left.
3. Increment the memory cell at the pointer.
4. Decrement the memory cell at the pointer.
5. Output the character signified by the cell at the pointer.
6. Input a character and store it in the cell at the pointer.
7. Jump past the matching closure if the cell at the pointer is 0.
8. Jump back to the matching opener if the cell at the pointer is nonzero.

> *Use a [URL encode](https://www.urlencoder.io) if your configuration contains rare characters like `&` or `%`...*

For comparison here is the defaults configuration:

```
https://nnbnh.github.io/brainalias/
?commands=><+-.,[]
&name=Brainfuck
&page=https://esolangs.org/wiki/Brainfuck
&author=Urban Müller
&apage=https://esolangs.org/wiki/Urban_M%C3%BCller
&description=Brainfuck is an esoteric programming language created in 1993 notable for its extreme minimalism, the language consists of only eight simple commands, a data pointer and an instruction pointer. While it is fully Turing complete, it is not intended for practical use, but to challenge and amuse programmers. Brainfuck simply requires one to break commands into microscopic steps.
```

If you want more freedom and control over the interpreter then [generate it from the template](https://github.com/NNBnh/brainalias/generate)
and take a look at [`js/index.js`](https://github.com/NNBnh/brainalias/blob/main/js/index.js#L3) for configuration.

## 💌 Credits
Special thanks to:
- [**Brainfuck**](https://esolangs.org/wiki/Brainfuck) by [Urban Müller](https://esolangs.org/wiki/Urban_M%C3%BCller)
- [**Brainfuck-js**](https://github.com/skilldrick/brainfuck-js) by [Nick Morgan](https://github.com/skilldrick)
- [**The brain icon**](https://iconmonstr.com/idea-11-svg) from [Iconmonstr](https://iconmonstr.com/)

<br><br><br><br>

---

> <h1 align="center">Fork with ❤️ by <a href="https://github.com/NNBnh"><i>NNB</i></a></h1>
>
> <p align="center"><a href="https://www.buymeacoffee.com/nnbnh"><img src="https://img.shields.io/badge/buy_me_a_coffee%20-%23FFC387.svg?logo=buy-me-a-coffee&logoColor=333333&style=for-the-badge" alt="Buy Me a Coffee"></a></p>
