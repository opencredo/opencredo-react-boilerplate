#!/bin/bash -evx

node_modules/eslint/bin/eslint.js . ./
node_modules/flow-bin/cli.js check
