# Configuring your editor or IDE

If you're new to React, most editors come with built in support for JavaScript
(and ES2015), but you might need to configure your editor in order to get better
JSX and Flowtype support. Here's a list of recommended packages:

## Atom

* [language-babel](https://atom.io/packages/language-babel): Language plugin for
ES201x, JSX, and Flowtype. This does not support reporting Flow errors; it simply
provides correct syntax highlighting.
* [linter-flow](https://atom.io/packages/linter-flow): Reports flow errors.
* [linter-eslint](https://atom.io/packages/linter-eslint): Reports linting errors.
* [editorconfig](https://atom.io/packages/editorconfig): Adds support for
  `.editorconfig` project files.

As an alternative, [Nuclide](http://nuclide.io) is an Atom package that comes
with built in support for Flow and JSX, but it can be used in conjunction with
the recommended packages above.

## Sublime Text 3

* [babel-sublime](https://packagecontrol.io/packages/Babel)
* [SublimeLinter-flow](https://packagecontrol.io/packages/SublimeLinter-flow)
* [SublimeLinter-contrib-eslint](https://packagecontrol.io/packages/SublimeLinter-contrib-eslint)
* [EditorConfig](https://packagecontrol.io/packages/EditorConfig)

## Vim
* [vim-flow](https://github.com/flowtype/vim-flow)
* [vim-jsx](https://github.com/mxw/vim-jsx)
* [syntastic](https://github.com/scrooloose/syntastic) will report linting errors.
* [editorconfig-vim](https://github.com/editorconfig/editorconfig-vim)


## WebStorm / IntelliJ

The minimum versions required are:

* WebStorm &ndash; version 11
* Intellij &ndash; version 15

Open the project's preferences:

* Languages & Frameworks
  * JavaScript
    * **JavaScript language version**: _Flow_
    * Libraries
      * tick _ECMAScript 6_
      * tick _HTML_
      * tick _HTML5 / ECMAScript 5_
    * Code Quality Tools
      * ESLint
        * tick the **Enable** checkbox
        * **Node interpreter** &ndash; default value should be correct
        * **ESLint package** &ndash; ditto
        * **Configuration file** &ndash; _Search for .eslintrc_
