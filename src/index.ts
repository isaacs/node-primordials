export type UncurryThis<
  T extends (this: unknown, ...args: unknown[]) => unknown
> = (self: ThisParameterType<T>, ...args: Parameters<T>) => ReturnType<T>
export type UncurryThisStaticApply<
  T extends (this: unknown, ...args: unknown[]) => unknown
> = (self: ThisParameterType<T>, args: Parameters<T>) => ReturnType<T>

export type StaticCall<
  T extends (this: unknown, ...args: unknown[]) => unknown
> = (...args: Parameters<T>) => ReturnType<T>
export type StaticApply<
  T extends (this: unknown, ...args: unknown[]) => unknown
> = (args: Parameters<T>) => ReturnType<T>

export type UncurryMethod<O, K extends keyof O, T = O> = O[K] extends (
  this: infer U,
  ...args: infer A
) => infer R
  ? (self: unknown extends U ? T : U, ...args: A) => R
  : never

export type UncurryMethodApply<
  O,
  K extends keyof O,
  T = O
> = O[K] extends (this: infer U, ...args: infer A) => infer R
  ? (self: unknown extends U ? T : U, args: A) => R
  : never

export type UncurryGetter<O, K extends keyof O, T = O> = (self: T) => O[K]
export type UncurrySetter<O, K extends keyof O, T = O> = (
  self: T,
  value: O[K]
) => void

const {
  Array,
  BigInt,
  BigInt64Array,
  BigUint64Array,
  Boolean,
  DataView,
  Error,
  EvalError,
  Float32Array,
  Float64Array,
  Function,
  Int16Array,
  Int32Array,
  Int8Array,
  JSON,
  Map,
  Math,
  Number,
  // uppercase so we don't collide with TS's cjs build boilerplate
  Object: OBJECT,
  Promise,
  Proxy,
  RangeError,
  ReferenceError,
  Reflect,
  RegExp,
  Set,
  String,
  Symbol,
  SyntaxError,
  TypeError,
  URIError,
  Uint16Array,
  Uint32Array,
  Uint8Array,
  Uint8ClampedArray,
  WeakMap,
  WeakSet,
} = globalThis

const SafeObject = OBJECT.defineProperties(
  OBJECT.create(null),
  OBJECT.getOwnPropertyDescriptors(OBJECT) as PropertyDescriptorMap
)
OBJECT.freeze(SafeObject)

const cloneSafe = <T extends {}>(obj: T): { [k in keyof T]: T[k] } => {
  const safe = SafeObject.defineProperties(
    SafeObject.create(null),
    SafeObject.getOwnPropertyDescriptors(obj) as PropertyDescriptorMap
  )
  SafeObject.freeze(safe)
  return safe
}

const FunctionPrototype = cloneSafe(Function.prototype)
const { apply, bind, call } = Function.prototype
const uncurryThis: <T extends (...args: any[]) => any>(
  fn: T
) => UncurryThis<T> = bind.bind(call)

const applyBind: <T extends (...args: any[]) => any>(
  fn: T
) => UncurryThisStaticApply<T> = bind.bind(apply)

const staticApply: <T extends (...args: any[]) => any>(
  fn: T
) => StaticApply<T> = bind.bind(apply, null)

const staticCall: <T extends (...args: any[]) => any>(
  fn: T
) => StaticCall<T> = bind.bind(call, null)

const uncurryMethod: <O extends any, K extends keyof O, T = O>(
  obj: O,
  k: K
) => UncurryMethod<O, K, T> = <O extends any, K extends keyof O>(
  obj: O,
  k: K
) => bind.bind(call)(obj[k], null)

const uncurryGetter = <O extends object, K extends keyof O>(
  obj: O,
  k: K
): UncurryGetter<O, K> => {
  const desc = SafeReflect.getOwnPropertyDescriptor(obj, k)
  if (desc?.get) {
    const g = bind.bind(call)(desc.get)
    return (obj: O) => g(obj)
  }
  throw new Error('invalid uncurryGetter call: ' + String(k))
}

// unused?
// const uncurrySetter = <O extends object, K extends keyof O>(
//   obj: O,
//   k: K
// ): UncurrySetter<O, K> => {
//   const desc = SafeReflect.getOwnPropertyDescriptor(obj, k)
//   if (desc?.set) {
//     const g = bind.bind(call)(desc.set)
//     return (obj: O, v: O[K]) => g(obj, v)
//   }
//   throw new Error('invalid uncurrySetter call: ' + String(k))
// }

const FunctionPrototypeCall = uncurryThis(call)

// local shorthand
const fpc = FunctionPrototypeCall

const ArrayPrototype = cloneSafe(Array.prototype)

const getValue = <T extends {}, K extends keyof T>(
  obj: T,
  prop: K
): T[K] => {
  const desc = SafeObject.getOwnPropertyDescriptor(obj, prop)
  if (!desc) {
    throw new Error('property not found: ' + String(prop))
  }
  if ('get' in desc) {
    return fpc(desc.get, obj)
  } else if ('value' in desc) {
    return desc.value
  } else {
    throw new Error('property not readable: ' + String(prop))
  }
}

// Get a copy of a regular expression using our local ctor
const hardenRegExp = (re: RegExp) =>
  new RegExp(getValue(re, 'source'), getValue(re, 'flags'))

const SafeReflect = cloneSafe(Reflect)

export const primordials = OBJECT.assign(OBJECT.create(null), {
  // utilities
  applyBind,
  hardenRegExp,
  staticApply,
  uncurryThis,

  decodeURI: globalThis.decodeURI,
  decodeURIComponent: globalThis.decodeURIComponent,
  encodeURI: globalThis.encodeURI,
  encodeURIComponent: globalThis.encodeURIComponent,
  escape: globalThis.escape,
  unescape: globalThis.unescape,

  AggregateError: globalThis.AggregateError,
  AggregateErrorLength: globalThis.AggregateError.length,
  AggregateErrorName: globalThis.AggregateError.name,
  AggregateErrorPrototype: cloneSafe(AggregateError.prototype),

  Array,
  ArrayFrom: staticCall(Array.from),
  ArrayIsArray: staticCall(Array.isArray),
  ArrayLength: Array.length,
  ArrayName: Array.name,
  ArrayOf: staticCall(Array.of),
  ArrayPrototype,
  ArrayPrototypeConcat: uncurryThis(ArrayPrototype.concat),
  ArrayPrototypeCopyWithin: uncurryThis(ArrayPrototype.copyWithin),
  ArrayPrototypeEntries: uncurryThis(ArrayPrototype.entries),
  ArrayPrototypeEvery: uncurryThis(ArrayPrototype.every),
  ArrayPrototypeFill: uncurryThis(ArrayPrototype.fill),
  ArrayPrototypeFilter: uncurryThis(ArrayPrototype.filter),
  ArrayPrototypeFind: uncurryThis(ArrayPrototype.find),
  ArrayPrototypeFindIndex: uncurryThis(ArrayPrototype.findIndex),
  ArrayPrototypeFlat: uncurryThis(ArrayPrototype.flat),
  ArrayPrototypeFlatMap: uncurryThis(ArrayPrototype.flatMap),
  ArrayPrototypeForEach: uncurryThis(ArrayPrototype.forEach),
  ArrayPrototypeIncludes: uncurryThis(ArrayPrototype.includes),
  ArrayPrototypeIndexOf: uncurryThis(ArrayPrototype.indexOf),
  ArrayPrototypeJoin: uncurryThis(ArrayPrototype.join),
  ArrayPrototypeKeys: uncurryThis(ArrayPrototype.keys),
  ArrayPrototypeLastIndexOf: uncurryThis(ArrayPrototype.lastIndexOf),
  ArrayPrototypeMap: uncurryThis(ArrayPrototype.map),
  ArrayPrototypePop: uncurryThis(ArrayPrototype.pop),
  ArrayPrototypePush: uncurryThis(ArrayPrototype.push),
  ArrayPrototypePushApply: applyBind(ArrayPrototype.push),
  ArrayPrototypeReduce: uncurryThis(ArrayPrototype.reduce),
  ArrayPrototypeReduceRight: uncurryThis(ArrayPrototype.reduceRight),
  ArrayPrototypeReverse: uncurryThis(ArrayPrototype.reverse),
  ArrayPrototypeShift: uncurryThis(ArrayPrototype.shift),
  ArrayPrototypeSlice: uncurryThis(ArrayPrototype.slice),
  ArrayPrototypeSome: uncurryThis(ArrayPrototype.some),
  ArrayPrototypeSort: uncurryThis(ArrayPrototype.sort),
  ArrayPrototypeSplice: uncurryThis(ArrayPrototype.splice),
  ArrayPrototypeSymbolIterator: uncurryMethod(
    Array.prototype,
    Symbol.iterator
  ),
  ArrayPrototypeToLocaleString: uncurryThis(ArrayPrototype.toLocaleString),
  ArrayPrototypeToString: uncurryThis(ArrayPrototype.toString),
  ArrayPrototypeUnshift: uncurryThis(ArrayPrototype.unshift),
  ArrayPrototypeUnshiftApply: applyBind(ArrayPrototype.unshift),
  ArrayPrototypeValues: uncurryThis(ArrayPrototype.values),

  BigInt,
  BigIntAsIntN: uncurryThis(BigInt.asIntN),
  BigIntAsUintN: uncurryThis(BigInt.asUintN),
  BigIntLength: BigInt.length,
  BigIntName: BigInt.name,
  BigIntPrototype: cloneSafe(BigInt.prototype),
  BigIntPrototypeToLocaleString: uncurryThis(
    BigInt.prototype.toLocaleString
  ),
  BigIntPrototypeToString: uncurryThis(BigInt.prototype.toString),
  BigIntPrototypeValueOf: uncurryThis(BigInt.prototype.valueOf),

  BigInt64Array,
  BigInt64ArrayBYTES_PER_ELEMENT: BigInt64Array.BYTES_PER_ELEMENT,
  BigInt64ArrayLength: BigInt64Array.length,
  BigInt64ArrayName: BigInt64Array.name,
  BigInt64ArrayPrototype: BigInt64Array.prototype,

  BigUint64Array,
  BigUint64ArrayBYTES_PER_ELEMENT: BigUint64Array.BYTES_PER_ELEMENT,
  BigUint64ArrayLength: BigUint64Array.length,
  BigUint64ArrayName: BigUint64Array.name,
  BigUint64ArrayPrototype: cloneSafe(BigUint64Array.prototype),

  Boolean,
  BooleanLength: Boolean.length,
  BooleanName: Boolean.name,
  BooleanPrototype: cloneSafe(Boolean.prototype),
  BooleanPrototypeToString: uncurryThis(Boolean.prototype.toString),
  BooleanPrototypeValueOf: uncurryThis(Boolean.prototype.valueOf),

  DataView,
  DataViewLength: DataView.length,
  DataViewName: DataView.name,
  DataViewPrototype: DataView.prototype,
  DataViewPrototypeGetBigInt64: uncurryThis(
    DataView.prototype.getBigInt64
  ),
  DataViewPrototypeGetBuffer: uncurryGetter(DataView.prototype, 'buffer'),
  DataViewPrototypeGetByteLength: uncurryGetter(
    DataView.prototype,
    'byteLength'
  ),
  DataViewPrototypeGetByteOffset: uncurryGetter(
    DataView.prototype,
    'byteOffset'
  ),
  DataViewPrototypeGetFloat32: uncurryThis(DataView.prototype.getFloat32),
  DataViewPrototypeGetFloat64: uncurryThis(DataView.prototype.getFloat64),
  DataViewPrototypeGetInt16: uncurryThis(DataView.prototype.getInt16),
  DataViewPrototypeGetInt32: uncurryThis(DataView.prototype.getInt32),
  DataViewPrototypeGetInt8: uncurryThis(DataView.prototype.getInt8),
  DataViewPrototypeGetUint16: uncurryThis(DataView.prototype.getUint16),
  DataViewPrototypeGetUint32: uncurryThis(DataView.prototype.getUint32),
  DataViewPrototypeGetUint8: uncurryThis(DataView.prototype.getUint8),
  DataViewPrototypeSetBigInt64: uncurryThis(
    DataView.prototype.setBigInt64
  ),
  DataViewPrototypeSetBigUint64: uncurryThis(
    DataView.prototype.setBigUint64
  ),
  DataViewPrototypeSetFloat32: uncurryThis(DataView.prototype.setFloat32),
  DataViewPrototypeSetFloat64: uncurryThis(DataView.prototype.setFloat64),
  DataViewPrototypeSetInt16: uncurryThis(DataView.prototype.setInt16),
  DataViewPrototypeSetInt32: uncurryThis(DataView.prototype.setInt32),
  DataViewPrototypeSetInt8: uncurryThis(DataView.prototype.setInt8),
  DataViewPrototypeSetUint16: uncurryThis(DataView.prototype.setUint16),
  DataViewPrototypeSetUint32: uncurryThis(DataView.prototype.setUint32),
  DataViewPrototypeSetUint8: uncurryThis(DataView.prototype.setUint8),
  DataViewPrototypeGetBigUint64: uncurryThis(
    DataView.prototype.getBigUint64
  ),

  Error,
  ErrorCaptureStackTrace: staticCall(Error.captureStackTrace),
  ErrorLength: Error.length,
  ErrorName: Error.name,
  ErrorPrototype: cloneSafe(Error.prototype),
  ErrorPrototypeToString: uncurryThis(Error.prototype.toString),
  ErrorStackTraceLimit: Error.stackTraceLimit,

  EvalError,
  EvalErrorLength: EvalError.length,
  EvalErrorName: EvalError.name,
  EvalErrorPrototype: cloneSafe(EvalError.prototype),

  Float32Array,
  Float32ArrayBYTES_PER_ELEMENT: Float32Array.BYTES_PER_ELEMENT,
  Float32ArrayLength: Float32Array.length,
  Float32ArrayName: Float32Array.name,
  Float32ArrayPrototype: cloneSafe(Float32Array.prototype),

  Float64Array,
  Float64ArrayBYTES_PER_ELEMENT: Float64Array.BYTES_PER_ELEMENT,
  Float64ArrayLength: Float64Array.length,
  Float64ArrayName: Float64Array.name,
  Float64ArrayPrototype: cloneSafe(Float64Array.prototype),

  Function,
  FunctionLength: Function.length,
  FunctionName: Function.name,
  FunctionPrototype,
  FunctionPrototypeApply: uncurryThis(apply),
  FunctionPrototypeBind: uncurryThis(bind),
  FunctionPrototypeCall,
  FunctionPrototypeToString: uncurryThis(Function.prototype.toString),

  Int16Array,
  Int16ArrayBYTES_PER_ELEMENT: Int16Array.BYTES_PER_ELEMENT,
  Int16ArrayLength: Int16Array.length,
  Int16ArrayName: Int16Array.name,
  Int16ArrayPrototype: cloneSafe(Int16Array.prototype),

  Int32Array,
  Int32ArrayBYTES_PER_ELEMENT: Int32Array.BYTES_PER_ELEMENT,
  Int32ArrayLength: Int32Array.length,
  Int32ArrayName: Int32Array.name,
  Int32ArrayPrototype: cloneSafe(Int32Array.prototype),

  Int8Array,
  Int8ArrayLength: Int8Array.length,
  Int8ArrayName: Int8Array.name,
  Int8ArrayPrototype: cloneSafe(Int8Array.prototype),
  Int8ArrayBYTES_PER_ELEMENT: Int8Array.BYTES_PER_ELEMENT,

  JSON: cloneSafe(JSON),
  JSONParse: staticCall(JSON.parse),
  JSONStringify: staticCall(JSON.stringify),

  Map,
  MapLength: Map.length,
  MapName: Map.name,
  MapPrototype: cloneSafe(Map.prototype),
  MapPrototypeGet: uncurryThis(Map.prototype.get),
  MapPrototypeSet: uncurryThis(Map.prototype.set),
  MapPrototypeHas: uncurryThis(Map.prototype.has),
  MapPrototypeDelete: uncurryThis(Map.prototype.delete),
  MapPrototypeClear: uncurryThis(Map.prototype.clear),
  MapPrototypeEntries: uncurryThis(Map.prototype.entries),
  MapPrototypeForEach: uncurryThis(Map.prototype.forEach),
  MapPrototypeKeys: uncurryThis(Map.prototype.keys),
  MapPrototypeValues: uncurryThis(Map.prototype.values),
  MapPrototypeGetSize: uncurryGetter(Map.prototype, 'size'),

  Math: cloneSafe(Math),
  MathAbs: Math.abs,
  MathAcos: Math.acos,
  MathAcosh: Math.acosh,
  MathAsin: Math.asin,
  MathAsinh: Math.asinh,
  MathAtan2: Math.atan2,
  MathAtan: Math.atan,
  MathAtanh: Math.atanh,
  MathCbrt: Math.cbrt,
  MathCeil: Math.ceil,
  MathClz32: Math.clz32,
  MathCos: Math.cos,
  MathCosh: Math.cosh,
  MathE: Math.E,
  MathExp: Math.exp,
  MathExpm1: Math.expm1,
  MathFloor: Math.floor,
  MathFround: Math.fround,
  MathHypot: Math.hypot,
  MathImul: Math.imul,
  MathLN10: Math.LN10,
  MathLN2: Math.LN2,
  MathLOG10E: Math.LOG10E,
  MathLOG2E: Math.LOG2E,
  MathLog10: Math.log10,
  MathLog1p: Math.log1p,
  MathLog2: Math.log2,
  MathLog: Math.log,
  MathMax: Math.max,
  MathMaxApply: staticApply(Math.max),
  MathMin: Math.min,
  MathPI: Math.PI,
  MathPow: Math.pow,
  MathRandom: Math.random,
  MathRound: Math.round,
  MathSQRT1_2: Math.SQRT1_2,
  MathSQRT2: Math.SQRT2,
  MathSign: Math.sign,
  MathSin: Math.sin,
  MathSinh: Math.sinh,
  MathSqrt: Math.sqrt,
  MathTan: Math.tan,
  MathTanh: Math.tanh,
  MathTrunc: Math.trunc,

  Number,
  NumberEPSILON: Number.EPSILON,
  NumberIsFinite: staticCall(Number.isFinite),
  NumberIsInteger: staticCall(Number.isInteger),
  NumberIsNaN: staticCall(Number.isNaN),
  NumberIsSafeInteger: staticCall(Number.isSafeInteger),
  NumberLength: Number.length,
  NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,
  NumberMAX_VALUE: Number.MAX_VALUE,
  NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER,
  NumberMIN_VALUE: Number.MIN_VALUE,
  NumberNEGATIVE_INFINITY: Number.NEGATIVE_INFINITY,
  NumberNaN: Number.NaN,
  NumberName: Number.name,
  NumberPOSITIVE_INFINITY: Number.POSITIVE_INFINITY,
  NumberParseFloat: staticCall(Number.parseFloat),
  NumberParseInt: staticCall(Number.parseInt),
  NumberPrototype: cloneSafe(Number.prototype),
  NumberPrototypeToExponential: uncurryThis(
    Number.prototype.toExponential
  ),
  NumberPrototypeToFixed: uncurryThis(Number.prototype.toFixed),
  NumberPrototypeToLocaleString: uncurryThis(
    Number.prototype.toLocaleString
  ),
  NumberPrototypeToPrecision: uncurryThis(Number.prototype.toPrecision),
  NumberPrototypeToString: uncurryThis(Number.prototype.toString),
  NumberPrototypeValueOf: uncurryThis(Number.prototype.valueOf),

  Object: OBJECT,
  ObjectLength: OBJECT.length,
  ObjectName: OBJECT.name,
  ObjectPrototype: cloneSafe(OBJECT.prototype),
  ObjectAssign: staticCall(OBJECT.assign),
  ObjectGetOwnPropertyDescriptor: staticCall(
    OBJECT.getOwnPropertyDescriptor
  ),
  ObjectGetOwnPropertyDescriptors: staticCall(
    OBJECT.getOwnPropertyDescriptors
  ),
  ObjectGetOwnPropertyNames: staticCall(OBJECT.getOwnPropertyNames),
  ObjectGetOwnPropertySymbols: staticCall(OBJECT.getOwnPropertySymbols),
  ObjectIs: staticCall(OBJECT.is),
  ObjectPreventExtensions: staticCall(OBJECT.preventExtensions),
  ObjectSeal: staticCall(OBJECT.seal),
  ObjectCreate: staticCall(OBJECT.create),
  ObjectDefineProperties: staticCall(OBJECT.defineProperties),
  ObjectDefineProperty: staticCall(OBJECT.defineProperty),
  ObjectFreeze: staticCall(OBJECT.freeze),
  ObjectGetPrototypeOf: staticCall(OBJECT.getPrototypeOf),
  ObjectSetPrototypeOf: staticCall(OBJECT.setPrototypeOf),
  ObjectIsExtensible: staticCall(OBJECT.isExtensible),
  ObjectIsFrozen: staticCall(OBJECT.isFrozen),
  ObjectIsSealed: staticCall(OBJECT.isSealed),
  ObjectKeys: staticCall(OBJECT.keys),
  ObjectEntries: staticCall(OBJECT.entries),
  ObjectFromEntries: staticCall(OBJECT.fromEntries),
  ObjectValues: staticCall(OBJECT.values),
  ObjectPrototype__defineGetter__: uncurryThis(
    //@ts-ignore
    OBJECT.prototype.__defineGetter__
  ),
  ObjectPrototype__defineSetter__: uncurryThis(
    //@ts-ignore
    OBJECT.prototype.__defineSetter__
  ),
  ObjectPrototypeHasOwnProperty: uncurryThis(
    OBJECT.prototype.hasOwnProperty
  ),
  ObjectPrototype__lookupGetter__: uncurryThis(
    //@ts-ignore
    OBJECT.prototype.__lookupGetter__
  ),
  ObjectPrototype__lookupSetter__: uncurryThis(
    //@ts-ignore
    OBJECT.prototype.__lookupSetter__
  ),
  ObjectPrototypeIsPrototypeOf: uncurryThis(
    OBJECT.prototype.isPrototypeOf
  ),
  ObjectPrototypePropertyIsEnumerable: uncurryThis(
    OBJECT.prototype.propertyIsEnumerable
  ),
  ObjectPrototypeToString: uncurryThis(OBJECT.prototype.toString),
  ObjectPrototypeValueOf: uncurryThis(OBJECT.prototype.valueOf),
  ObjectPrototypeToLocaleString: uncurryThis(
    OBJECT.prototype.toLocaleString
  ),

  Promise,
  PromiseAll: Promise.all,
  PromiseAllSettled: Promise.allSettled,
  PromiseAny: Promise.any,
  PromiseLength: Promise.length,
  PromiseName: Promise.name,
  PromisePrototype: Promise.prototype,
  PromisePrototypeCatch: uncurryThis(Promise.prototype.catch),
  PromisePrototypeFinally: uncurryThis(Promise.prototype.finally),
  PromisePrototypeThen: uncurryThis(Promise.prototype.then),
  PromiseRace: Promise.race,
  PromiseReject: Promise.reject,
  PromiseResolve: Promise.resolve,

  Proxy,

  RangeError,
  RangeErrorLength: RangeError.length,
  RangeErrorName: RangeError.name,
  RangeErrorPrototype: cloneSafe(RangeError.prototype),

  ReferenceError,
  ReferenceErrorLength: ReferenceError.length,
  ReferenceErrorName: ReferenceError.name,
  ReferenceErrorPrototype: cloneSafe(ReferenceError.prototype),

  Reflect: SafeReflect,
  ReflectApply: SafeReflect.apply,
  ReflectConstruct: SafeReflect.construct,
  ReflectDefineProperty: SafeReflect.defineProperty,
  ReflectDeleteProperty: SafeReflect.deleteProperty,
  ReflectGet: SafeReflect.get,
  ReflectGetOwnPropertyDescriptor: SafeReflect.getOwnPropertyDescriptor,
  ReflectGetPrototypeOf: SafeReflect.getPrototypeOf,
  ReflectHas: SafeReflect.has,
  ReflectIsExtensible: SafeReflect.isExtensible,
  ReflectOwnKeys: SafeReflect.ownKeys,
  ReflectPreventExtensions: SafeReflect.preventExtensions,
  ReflectSet: SafeReflect.set,
  ReflectSetPrototypeOf: SafeReflect.setPrototypeOf,

  RegExp,
  RegExpLength: RegExp.length,
  RegExpName: RegExp.name,
  RegExpPrototype: cloneSafe(RegExp.prototype),
  RegExpPrototypeExec: uncurryThis(RegExp.prototype.exec),
  RegExpPrototypeCompile: uncurryThis(RegExp.prototype.compile),
  RegExpPrototypeToString: uncurryThis(RegExp.prototype.toString),
  RegExpPrototypeTest: uncurryThis(RegExp.prototype.test),
  RegExpPrototypeGetDotAll: uncurryGetter(RegExp.prototype, 'dotAll'),
  RegExpPrototypeGetFlags: uncurryGetter(RegExp.prototype, 'flags'),
  RegExpPrototypeGetGlobal: uncurryGetter(RegExp.prototype, 'global'),
  RegExpPrototypeGetIgnoreCase: uncurryGetter(
    RegExp.prototype,
    'ignoreCase'
  ),
  RegExpPrototypeGetMultiline: uncurryGetter(
    RegExp.prototype,
    'multiline'
  ),
  RegExpPrototypeGetSource: uncurryGetter(RegExp.prototype, 'source'),
  RegExpPrototypeGetSticky: uncurryGetter(RegExp.prototype, 'sticky'),
  RegExpPrototypeGetUnicode: uncurryGetter(RegExp.prototype, 'unicode'),

  Set,
  SetLength: Set.length,
  SetName: Set.name,
  SetPrototype: cloneSafe(Set.prototype),
  SetPrototypeHas: uncurryThis(Set.prototype.has),
  SetPrototypeAdd: uncurryThis(Set.prototype.add),
  SetPrototypeDelete: uncurryThis(Set.prototype.delete),
  SetPrototypeClear: uncurryThis(Set.prototype.clear),
  SetPrototypeEntries: uncurryThis(Set.prototype.entries),
  SetPrototypeForEach: uncurryThis(Set.prototype.forEach),
  SetPrototypeValues: uncurryThis(Set.prototype.values),
  SetPrototypeKeys: uncurryThis(Set.prototype.keys),
  SetPrototypeGetSize: uncurryGetter(Set.prototype, 'size'),

  String,
  StringLength: String.length,
  StringName: String.name,
  StringPrototype: cloneSafe(String.prototype),
  StringFromCharCode: String.fromCharCode,
  StringFromCharCodeApply: staticApply(String.fromCharCode),
  StringFromCodePoint: String.fromCodePoint,
  StringFromCodePointApply: staticApply(String.fromCodePoint),
  StringRaw: String.raw,
  StringPrototypeAnchor: uncurryThis(String.prototype.anchor),
  StringPrototypeBig: uncurryThis(String.prototype.big),
  StringPrototypeBlink: uncurryThis(String.prototype.blink),
  StringPrototypeBold: uncurryThis(String.prototype.bold),
  StringPrototypeCharAt: uncurryThis(String.prototype.charAt),
  StringPrototypeCharCodeAt: uncurryThis(String.prototype.charCodeAt),
  StringPrototypeCodePointAt: uncurryThis(String.prototype.codePointAt),
  StringPrototypeConcat: uncurryThis(String.prototype.concat),
  StringPrototypeEndsWith: uncurryThis(String.prototype.endsWith),
  StringPrototypeFontcolor: uncurryThis(String.prototype.fontcolor),
  StringPrototypeFontsize: uncurryThis(String.prototype.fontsize),
  StringPrototypeFixed: uncurryThis(String.prototype.fixed),
  StringPrototypeIncludes: uncurryThis(String.prototype.includes),
  StringPrototypeIndexOf: uncurryThis(String.prototype.indexOf),
  StringPrototypeItalics: uncurryThis(String.prototype.italics),
  StringPrototypeLastIndexOf: uncurryThis(String.prototype.lastIndexOf),
  StringPrototypeLink: uncurryThis(String.prototype.link),
  StringPrototypeLocaleCompare: uncurryThis(
    String.prototype.localeCompare
  ),
  StringPrototypeMatch: uncurryThis(String.prototype.match),
  StringPrototypeMatchAll: uncurryThis(String.prototype.matchAll),
  StringPrototypeNormalize: uncurryThis(String.prototype.normalize),
  StringPrototypePadEnd: uncurryThis(String.prototype.padEnd),
  StringPrototypePadStart: uncurryThis(String.prototype.padStart),
  StringPrototypeRepeat: uncurryThis(String.prototype.repeat),
  StringPrototypeReplace: uncurryThis(String.prototype.replace),
  StringPrototypeSearch: uncurryThis(String.prototype.search),
  StringPrototypeSlice: uncurryThis(String.prototype.slice),
  StringPrototypeSmall: uncurryThis(String.prototype.small),
  StringPrototypeSplit: uncurryThis(String.prototype.split),
  StringPrototypeStrike: uncurryThis(String.prototype.strike),
  StringPrototypeSub: uncurryThis(String.prototype.sub),
  StringPrototypeSubstr: uncurryThis(String.prototype.substr),
  StringPrototypeSubstring: uncurryThis(String.prototype.substring),
  StringPrototypeSup: uncurryThis(String.prototype.sup),
  StringPrototypeStartsWith: uncurryThis(String.prototype.startsWith),
  StringPrototypeToString: uncurryThis(String.prototype.toString),
  StringPrototypeTrim: uncurryThis(String.prototype.trim),
  StringPrototypeTrimStart: uncurryThis(String.prototype.trimStart),
  StringPrototypeTrimLeft: uncurryThis(String.prototype.trimLeft),
  StringPrototypeTrimEnd: uncurryThis(String.prototype.trimEnd),
  StringPrototypeTrimRight: uncurryThis(String.prototype.trimRight),
  StringPrototypeToLocaleLowerCase: uncurryThis(
    String.prototype.toLocaleLowerCase
  ),
  StringPrototypeToLocaleUpperCase: uncurryThis(
    String.prototype.toLocaleUpperCase
  ),
  StringPrototypeToLowerCase: uncurryThis(String.prototype.toLowerCase),
  StringPrototypeToUpperCase: uncurryThis(String.prototype.toUpperCase),
  StringPrototypeValueOf: uncurryThis(String.prototype.valueOf),
  StringPrototypeReplaceAll: uncurryThis(String.prototype.replaceAll),

  Symbol,
  SymbolLength: Symbol.length,
  SymbolName: Symbol.name,
  SymbolPrototype: cloneSafe(Symbol.prototype),
  SymbolFor: Symbol.for,
  SymbolKeyFor: Symbol.keyFor,
  SymbolAsyncIterator: Symbol.asyncIterator,
  SymbolHasInstance: Symbol.hasInstance,
  SymbolIsConcatSpreadable: Symbol.isConcatSpreadable,
  SymbolIterator: Symbol.iterator,
  SymbolMatch: Symbol.match,
  SymbolMatchAll: Symbol.matchAll,
  SymbolReplace: Symbol.replace,
  SymbolSearch: Symbol.search,
  SymbolSpecies: Symbol.species,
  SymbolSplit: Symbol.split,
  SymbolToPrimitive: Symbol.toPrimitive,
  SymbolToStringTag: Symbol.toStringTag,
  SymbolUnscopables: Symbol.unscopables,
  SymbolPrototypeToString: uncurryThis(Symbol.prototype.toString),
  SymbolPrototypeValueOf: uncurryThis(Symbol.prototype.valueOf),
  SymbolPrototypeSymbolToPrimitive: uncurryMethod(
    Symbol.prototype,
    Symbol.toPrimitive
  ),
  SymbolPrototypeGetDescription: uncurryGetter(
    Symbol.prototype,
    'description'
  ),

  SyntaxError,
  SyntaxErrorLength: SyntaxError.length,
  SyntaxErrorName: SyntaxError.name,
  SyntaxErrorPrototype: cloneSafe(SyntaxError.prototype),

  TypeError,
  TypeErrorLength: TypeError.length,
  TypeErrorName: TypeError.name,
  TypeErrorPrototype: cloneSafe(TypeError.prototype),

  // TODO: TypedArray stuff

  URIError,
  URIErrorLength: URIError.length,
  URIErrorName: URIError.name,
  URIErrorPrototype: cloneSafe(URIError.prototype),

  Uint16Array,
  Uint16ArrayLength: Uint16Array.length,
  Uint16ArrayName: Uint16Array.name,
  Uint16ArrayPrototype: cloneSafe(Uint16Array.prototype),
  Uint16ArrayBYTES_PER_ELEMENT: Uint16Array.BYTES_PER_ELEMENT,

  Uint32Array,
  Uint32ArrayLength: Uint32Array.length,
  Uint32ArrayName: Uint32Array.name,
  Uint32ArrayPrototype: cloneSafe(Uint32Array.prototype),
  Uint32ArrayBYTES_PER_ELEMENT: Uint32Array.BYTES_PER_ELEMENT,

  Uint8Array,
  Uint8ArrayLength: Uint8Array.length,
  Uint8ArrayName: Uint8Array.name,
  Uint8ArrayPrototype: cloneSafe(Uint8Array.prototype),
  Uint8ArrayBYTES_PER_ELEMENT: Uint8Array.BYTES_PER_ELEMENT,

  Uint8ClampedArray,
  Uint8ClampedArrayLength: Uint8ClampedArray.length,
  Uint8ClampedArrayName: Uint8ClampedArray.name,
  Uint8ClampedArrayPrototype: cloneSafe(Uint8ClampedArray.prototype),
  Uint8ClampedArrayBYTES_PER_ELEMENT: Uint8ClampedArray.BYTES_PER_ELEMENT,

  WeakMap,
  WeakMapLength: WeakMap.length,
  WeakMapName: WeakMap.name,
  WeakMapPrototype: cloneSafe(WeakMap.prototype),
  WeakMapPrototypeDelete: uncurryThis(WeakMap.prototype.delete),
  WeakMapPrototypeGet: uncurryThis(WeakMap.prototype.get),
  WeakMapPrototypeSet: uncurryThis(WeakMap.prototype.set),
  WeakMapPrototypeHas: uncurryThis(WeakMap.prototype.has),

  WeakSet,
  WeakSetLength: WeakSet.length,
  WeakSetName: WeakSet.name,
  WeakSetPrototype: cloneSafe(WeakSet.prototype),
  WeakSetPrototypeDelete: uncurryThis(WeakSet.prototype.delete),
  WeakSetPrototypeHas: uncurryThis(WeakSet.prototype.has),
  WeakSetPrototypeAdd: uncurryThis(WeakSet.prototype.add),

  //////

  // bonus: node core doesn't need to harden these, since it has internal
  // references to them, but it's very handy when dealing with scenarios where
  // process might get clobbered, as in tests and such.
  process: cloneSafe(
    typeof globalThis.process === 'object' && !!globalThis.process
      ? globalThis.process
      : {}
  ),
})

SafeObject.freeze(primordials)
