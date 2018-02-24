const path = require('path')

export type Runner = 'npm' | 'yarn'

export type RunBy = {|
  runner: ?Runner,
  isYarn: boolean,
  isNpm: boolean,
|}

const runBy = (exec: string): RunBy => {
  const runnerName = path.parse(exec).name.replace('-cli', '')
  const runner =
    runnerName === 'npm' || runnerName === 'yarn' ? runnerName : null
  const isYarn = runner === 'yarn'
  const isNpm = runner === 'npm'

  return {
    isYarn,
    isNpm,
    runner,
  }
}

const { isYarn, isNpm, runner } = runBy(process.env.npm_execpath || '')

export { isYarn, isNpm, runner, runBy }
