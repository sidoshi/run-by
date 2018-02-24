import { runBy, isYarn, isNpm, runner } from './'

const npm =
  '/Users/sid/.nvm/versions/node/v9.3.0/lib/node_modules/npm/bin/npm-cli.js'

const yarn = '/usr/local/Cellar/yarn/1.3.2/libexec/bin/yarn.js'

test('exports work properly', () => {
  expect(['npm', 'yarn', null]).toContain(runner)
  expect(typeof isYarn).toBe('boolean')
  expect(typeof runBy).toBe('function')
  expect(typeof isNpm).toBe('boolean')
})

test('works properly with npm', () => {
  const { isYarn, isNpm, runner } = runBy(npm)
  expect(isYarn).toBe(false)
  expect(isNpm).toBe(true)
  expect(runner).toBe('npm')
})

test('works properly with yarn', () => {
  const { isYarn, isNpm, runner } = runBy(yarn)
  expect(isYarn).toBe(true)
  expect(isNpm).toBe(false)
  expect(runner).toBe('yarn')
})

test('works properly with unknown', () => {
  const { isYarn, isNpm, runner } = runBy('')
  expect(isYarn).toBe(false)
  expect(isNpm).toBe(false)
  expect(runner).toBe(null)
})
