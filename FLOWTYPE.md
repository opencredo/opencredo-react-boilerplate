Using flowtype
==============

This codebase has been set up to use [flowtype](http://flowtype.org/), a static typechecker for Javascript.

## Setup

To use it, first install `flow`:

``` sh
brew update
brew install flow
```

You can then run the flow checker:

``` sh
flow check
```

## Coding

In order to make use of `flow`'s typechecking, there are several things that need to be in place.

* put `/* @flow */` as the first line in each file you want flow to use
* check the contents of `.flowconfig`, and make sure you understand how it works:
    * the `[libs]` section specifies where custom types are defined
    * the `[options]` section specifies:
        * mappings for paths used in the code &ndash; this means that we can `import` from the project root, rather than defining a path relative to the module we are in
        * a mapping that allows us to get around `flow` issues with importing CSS/SCSS files (see [Flowtype and CSS modules](https://gist.github.com/lambdahands/d19e0da96285b749f0ef))
        * ES7 rules

## Windows

`flow` [hasn't provided an official binary](https://www.npmjs.com/package/gulp-flowtype#running-windows). You'll have to use OSX or *nix.

