# run-by

[![Build Status](https://travis-ci.org/doshisid/run-by.svg?branch=master)](https://travis-ci.org/doshisid/run-by) [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/doshisid/run-by/issues) [![HitCount](http://hits.dwyl.io/doshisid/run-by.svg)](http://hits.dwyl.io/doshisid/run-by) [![npm](https://img.shields.io/npm/v/run-by.svg)](https://www.npmjs.com/package/run-by) [![npm](https://img.shields.io/npm/l/run-by.svg)](https://www.npmjs.com/package/run-by)

> Figure out script is run by npm or yarn

## Install

```bash
npm install --save run-by
```

## Usage

```js
import runBy from 'run-by'
```

## API

### isYarn: boolean

True if the script is started with `yarn`

### isNpm: boolean

True if script is started with `npm`

### runner: ?string

It's value will be one of `npm`, `yarn` or null depending on how the
script has started. If the script is started with `node`, `runner` will be
`null`.

### runBy(execPath: string): RunBy

It takes the exec_path env, by default is `process.env.npm_execpath`.
Returns `isYarn`, `isNpm` and `runner` depending on the `execpath`.

## License

MIT © [Siddharth Doshi](https://sid.sh)
