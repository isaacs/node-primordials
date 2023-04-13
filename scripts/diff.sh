#!/usr/bin/env bash

set -e

node -p 'Object.getOwnPropertyNames(require("./").primordials).join("\n")' | sort > mine.txt
node --expose-internals -r internal/test/binding -p 'Object.getOwnPropertyNames(primordials).join("\n")' | grep -v PrototypeConstructor | sort > builtin.txt

git diff --no-index --color builtin.txt mine.txt
