import t from 'tap'
import * as primordialsNamed from '../'
import { primordials } from '../'

import { promisify } from 'util'
const utilPromisifyCustom = promisify.custom

const cleanObj = (o: any, seen: Set<any> = new Set()): any => {
  if (seen.has(o)) return '<<seen>>'
  if (!!o && typeof o === 'object') {
    seen.add(o)
    return Object.fromEntries(
      Object.entries(o).map(([k, v]) => {
        if (k === 'env' || k.startsWith('process')) {
          return [k, typeof v]
        } else if (v === globalThis) {
          return [k, '<<globalThis>>']
        } else if (k.startsWith('AggregateError') || k === 'PromiseAny') {
          return [k, '<<undefined in node 14>>']
        } else if (/Sete?[ug]id|(Set|Init)groups/.test(k)) {
          return [k, '<<undefined on windows>>']
        } else {
          return [k, cleanObj(v, seen)]
        }
      })
    )
  } else {
    return o
  }
}
t.formatSnapshot = (obj: any) => cleanObj(obj)

t.matchSnapshot(primordials, 'primordials object')
for (const [k, v] of Object.entries(primordialsNamed)) {
  if (k === 'primordials') continue
  const p = primordials[k as keyof typeof primordials]
  if (v !== v) {
    t.not(p, p, 'NaN reference : ' + k)
  } else {
    t.equal(v, p, 'mapped on primordials object: ' + k)
  }
}

t.test('TypedArrayPrototypeGetSymbolToStringTag', t => {
  t.equal(
    primordials.TypedArrayPrototypeGetSymbolToStringTag(Uint8Array.of(1)),
    'Uint8Array'
  )
  t.equal(
    primordials.TypedArrayPrototypeGetSymbolToStringTag(Int8Array.of(1)),
    'Int8Array'
  )
  t.equal(
    primordials.TypedArrayPrototypeGetSymbolToStringTag(Uint16Array.of(1)),
    'Uint16Array'
  )
  t.equal(
    primordials.TypedArrayPrototypeGetSymbolToStringTag(Int16Array.of(1)),
    'Int16Array'
  )
  t.equal(
    primordials.TypedArrayPrototypeGetSymbolToStringTag(Uint32Array.of(1)),
    'Uint32Array'
  )
  t.equal(
    primordials.TypedArrayPrototypeGetSymbolToStringTag(Int32Array.of(1)),
    'Int32Array'
  )
  t.equal(
    primordials.TypedArrayPrototypeGetSymbolToStringTag(
      Uint8ClampedArray.of(1)
    ),
    'Uint8ClampedArray'
  )
  t.equal(
    primordials.TypedArrayPrototypeGetSymbolToStringTag(
      Float32Array.of(1)
    ),
    'Float32Array'
  )
  t.equal(
    primordials.TypedArrayPrototypeGetSymbolToStringTag(
      Float64Array.of(1)
    ),
    'Float64Array'
  )
  t.equal(
    //@ts-expect-error
    primordials.TypedArrayPrototypeGetSymbolToStringTag([1]),
    undefined
  )

  t.end()
})

t.test('uncurryGetter throws if not a getter', t => {
  t.throws(() => primordials.uncurryGetter({ nope: () => {} }, 'nope'))
  t.end()
})

t.test('TypedArrayOf', t => {
  const uint8array = primordials.TypedArrayOf(
    primordials.Uint8Array,
    1,
    2,
    3
  )
  t.type(uint8array, Uint8Array)
  t.strictSame(uint8array, Uint8Array.of(1, 2, 3))
  const int8array = primordials.TypedArrayOf(
    primordials.Int8Array,
    1,
    2,
    3
  )
  t.type(int8array, Int8Array)
  t.strictSame(int8array, Int8Array.of(1, 2, 3))
  const uint16array = primordials.TypedArrayOf(
    primordials.Uint16Array,
    1,
    2,
    3
  )
  t.type(uint16array, Uint16Array)
  t.strictSame(uint16array, Uint16Array.of(1, 2, 3))
  const int16array = primordials.TypedArrayOf(
    primordials.Int16Array,
    1,
    2,
    3
  )
  t.type(int16array, Int16Array)
  t.strictSame(int16array, Int16Array.of(1, 2, 3))
  const uint32array = primordials.TypedArrayOf(
    primordials.Uint32Array,
    1,
    2,
    3
  )
  t.type(uint32array, Uint32Array)
  t.strictSame(uint32array, Uint32Array.of(1, 2, 3))
  const int32array = primordials.TypedArrayOf(
    primordials.Int32Array,
    1,
    2,
    3
  )
  t.type(int32array, Int32Array)
  t.strictSame(int32array, Int32Array.of(1, 2, 3))
  const uint8clampedarray = primordials.TypedArrayOf(
    primordials.Uint8ClampedArray,
    1,
    2,
    3
  )
  t.type(uint8clampedarray, Uint8ClampedArray)
  t.strictSame(uint8clampedarray, Uint8ClampedArray.of(1, 2, 3))
  const float32array = primordials.TypedArrayOf(
    primordials.Float32Array,
    1,
    2,
    3
  )
  t.type(float32array, Float32Array)
  t.strictSame(float32array, Float32Array.of(1, 2, 3))
  const float64array = primordials.TypedArrayOf(
    primordials.Float64Array,
    1,
    2,
    3
  )
  t.type(float64array, Float64Array)
  t.strictSame(float64array, Float64Array.of(1, 2, 3))

  //@ts-expect-error
  t.throws(() => primordials.TypedArrayOf(Array, 1, 2, 3))

  t.end()
})

t.test('TypedArrayOfApply', t => {
  const uint8array = primordials.TypedArrayOfApply(
    primordials.Uint8Array,
    [1, 2, 3]
  )
  t.type(uint8array, Uint8Array)
  t.strictSame(uint8array, Uint8Array.of(1, 2, 3))
  const int8array = primordials.TypedArrayOfApply(
    primordials.Int8Array,
    [1, 2, 3]
  )
  t.type(int8array, Int8Array)
  t.strictSame(int8array, Int8Array.of(1, 2, 3))
  const uint16array = primordials.TypedArrayOfApply(
    primordials.Uint16Array,
    [1, 2, 3]
  )
  t.type(uint16array, Uint16Array)
  t.strictSame(uint16array, Uint16Array.of(1, 2, 3))
  const int16array = primordials.TypedArrayOfApply(
    primordials.Int16Array,
    [1, 2, 3]
  )
  t.type(int16array, Int16Array)
  t.strictSame(int16array, Int16Array.of(1, 2, 3))
  const uint32array = primordials.TypedArrayOfApply(
    primordials.Uint32Array,
    [1, 2, 3]
  )
  t.type(uint32array, Uint32Array)
  t.strictSame(uint32array, Uint32Array.of(1, 2, 3))
  const int32array = primordials.TypedArrayOfApply(
    primordials.Int32Array,
    [1, 2, 3]
  )
  t.type(int32array, Int32Array)
  t.strictSame(int32array, Int32Array.of(1, 2, 3))
  const uint8clampedarray = primordials.TypedArrayOfApply(
    primordials.Uint8ClampedArray,
    [1, 2, 3]
  )
  t.type(uint8clampedarray, Uint8ClampedArray)
  t.strictSame(uint8clampedarray, Uint8ClampedArray.of(1, 2, 3))
  const float32array = primordials.TypedArrayOfApply(
    primordials.Float32Array,
    [1, 2, 3]
  )
  t.type(float32array, Float32Array)
  t.strictSame(float32array, Float32Array.of(1, 2, 3))
  const float64array = primordials.TypedArrayOfApply(
    primordials.Float64Array,
    [1, 2, 3]
  )
  t.type(float64array, Float64Array)
  t.strictSame(float64array, Float64Array.of(1, 2, 3))

  //@ts-expect-error
  t.throws(() => primordials.TypedArrayOfApply(Array, [1, 2, 3]))

  t.end()
})

t.test('TypedArrayFrom', t => {
  const uint8array = primordials.TypedArrayFrom(
    primordials.Uint8Array,
    [1, 2, 3]
  )
  t.type(uint8array, Uint8Array)
  t.strictSame(uint8array, Uint8Array.from([1, 2, 3]))
  const int8array = primordials.TypedArrayFrom(
    primordials.Int8Array,
    [1, 2, 3]
  )
  t.type(int8array, Int8Array)
  t.strictSame(int8array, Int8Array.from([1, 2, 3]))
  const uint16array = primordials.TypedArrayFrom(
    primordials.Uint16Array,
    [1, 2, 3]
  )
  t.type(uint16array, Uint16Array)
  t.strictSame(uint16array, Uint16Array.from([1, 2, 3]))
  const int16array = primordials.TypedArrayFrom(
    primordials.Int16Array,
    [1, 2, 3]
  )
  t.type(int16array, Int16Array)
  t.strictSame(int16array, Int16Array.from([1, 2, 3]))
  const uint32array = primordials.TypedArrayFrom(
    primordials.Uint32Array,
    [1, 2, 3]
  )
  t.type(uint32array, Uint32Array)
  t.strictSame(uint32array, Uint32Array.from([1, 2, 3]))
  const int32array = primordials.TypedArrayFrom(
    primordials.Int32Array,
    [1, 2, 3]
  )
  t.type(int32array, Int32Array)
  t.strictSame(int32array, Int32Array.from([1, 2, 3]))
  const uint8clampedarray = primordials.TypedArrayFrom(
    primordials.Uint8ClampedArray,
    [1, 2, 3]
  )
  t.type(uint8clampedarray, Uint8ClampedArray)
  t.strictSame(uint8clampedarray, Uint8ClampedArray.from([1, 2, 3]))
  const float32array = primordials.TypedArrayFrom(
    primordials.Float32Array,
    [1, 2, 3]
  )
  t.type(float32array, Float32Array)
  t.strictSame(float32array, Float32Array.from([1, 2, 3]))
  const float64array = primordials.TypedArrayFrom(
    primordials.Float64Array,
    [1, 2, 3]
  )
  t.type(float64array, Float64Array)
  t.strictSame(float64array, Float64Array.from([1, 2, 3]))

  //@ts-expect-error
  t.throws(() => primordials.TypedArrayFrom(Array, [1, 2, 3]))
  t.end()
})

t.test('setImmediate', async t => {
  t.not(primordials.setImmediate, setImmediate)
  //@ts-ignore
  t.throws(() => (primordials.setImmediate[utilPromisifyCustom] = 'arf'))
  //@ts-ignore
  t.not(primordials.setImmediate[utilPromisifyCustom], 'arf')
  const psi = promisify(primordials.setImmediate)
  t.type(psi, 'function')
  const p = psi()
  t.type(p, Promise)
  await p
  await new Promise<void>(r => primordials.setImmediate(r))
})

t.test('setTimeout', async t => {
  t.not(primordials.setTimeout, setTimeout)
  //@ts-ignore
  t.throws(() => (primordials.setTimeout[utilPromisifyCustom] = 'arf'))
  //@ts-ignore
  t.not(primordials.setTimeout[utilPromisifyCustom], 'arf')
  const psi = promisify(primordials.setTimeout)
  t.type(psi, 'function')
  const p = psi()
  t.type(p, Promise)
  await p
  await new Promise<void>(r => primordials.setTimeout(r, 1))
})

t.test('setInterval', async t => {
  t.not(primordials.setInterval, setInterval)
  t.throws(() => (primordials.setInterval.bark = 'arf'))
  t.equal(primordials.setInterval.bark, undefined)
  await new Promise<void>(res => {
    const interval = primordials.setInterval(() => {
      primordials.clearInterval(interval)
      res()
    })
  })
  t.end()
})

t.test('process.env updates actual process.env', t => {
  process.env.foo = 'arf'
  t.equal(primordials.processEnv.foo, 'arf')
  delete primordials.processEnv.foo
  t.equal(primordials.processEnv.foo, undefined)
  t.equal(process.env.foo, undefined)
  primordials.processEnv.foo = 'bar'
  t.equal(process.env.foo, 'bar')
  t.equal(primordials.processEnv.foo, 'bar')
  t.end()
})

t.test('update actual Error.stackTraceLimit', t => {
  t.equal(primordials.ErrorStackTraceLimit, Error.stackTraceLimit)
  Error.stackTraceLimit = 5
  t.equal(primordials.ErrorStackTraceLimit, 5)
  t.equal(Error.stackTraceLimit, 5)
  primordials.ErrorStackTraceLimit = 10
  t.equal(primordials.ErrorStackTraceLimit, 10)
  t.equal(Error.stackTraceLimit, 10)
  t.end()
})

t.test('update actual process.exitCode', t => {
  const { exitCode } = process
  t.teardown(() => {
    process.exitCode = exitCode
  })
  t.equal(primordials.processExitCode, process.exitCode)
  process.exitCode = 99
  t.equal(primordials.processExitCode, process.exitCode)
  t.equal(primordials.processExitCode, 99)
  primordials.processExitCode = 12
  t.equal(primordials.processExitCode, process.exitCode)
  t.equal(primordials.processExitCode, 12)
  t.end()
})

t.test('make sure one of the staticCall methods works', t => {
  const af = primordials.ArrayOf(1, 2, 3)
  t.strictSame(af, [1, 2, 3])
  t.end()
})

t.test('maybeStaticCall', t => {
  const o: { x?: () => ['x', any] } = {
    x() {
      return ['x', this]
    },
  }
  const fn1 = primordials.maybeStaticCall(o.x)
  t.strictSame(fn1?.(), ['x', undefined])
  delete o.x
  const fn = primordials.maybeStaticCall(o.x)
  t.equal(fn, undefined)
  t.end()
})
