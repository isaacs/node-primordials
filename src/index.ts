export {
  applyBind,
  hardenRegExp,
  staticApply,
  uncurryThis,
  uncurryGetter,
  uncurryMethod,
  staticCall,
  maybeStaticCall,

  // globals
  GLOBALTHIS as globalThis,
  setImmediate,
  setTimeout,
  setInterval,
  clearTimeout,
  clearInterval,
  decodeURI,
  decodeURIComponent,
  encodeURI,
  encodeURIComponent,
  escape,
  unescape,
  AggregateError,
  AggregateErrorLength,
  AggregateErrorName,
  AggregateErrorPrototype,
  Array,
  ArrayFrom,
  ArrayIsArray,
  ArrayLength,
  ArrayName,
  ArrayOf,
  ArrayPrototype,
  ArrayPrototypeConcat,
  ArrayPrototypeCopyWithin,
  ArrayPrototypeEntries,
  ArrayPrototypeEvery,
  ArrayPrototypeFill,
  ArrayPrototypeFilter,
  ArrayPrototypeFind,
  ArrayPrototypeFindIndex,
  ArrayPrototypeFlat,
  ArrayPrototypeFlatMap,
  ArrayPrototypeForEach,
  ArrayPrototypeIncludes,
  ArrayPrototypeIndexOf,
  ArrayPrototypeJoin,
  ArrayPrototypeKeys,
  ArrayPrototypeLastIndexOf,
  ArrayPrototypeMap,
  ArrayPrototypePop,
  ArrayPrototypePush,
  ArrayPrototypePushApply,
  ArrayPrototypeReduce,
  ArrayPrototypeReduceRight,
  ArrayPrototypeReverse,
  ArrayPrototypeShift,
  ArrayPrototypeSlice,
  ArrayPrototypeSome,
  ArrayPrototypeSort,
  ArrayPrototypeSplice,
  ArrayPrototypeSymbolIterator,
  ArrayPrototypeToLocaleString,
  ArrayPrototypeToString,
  ArrayPrototypeUnshift,
  ArrayPrototypeUnshiftApply,
  ArrayPrototypeValues,
  BigInt,
  BigIntAsIntN,
  BigIntAsUintN,
  BigIntLength,
  BigIntName,
  BigIntPrototype,
  BigIntPrototypeToLocaleString,
  BigIntPrototypeToString,
  BigIntPrototypeValueOf,
  BigInt64Array,
  BigInt64ArrayBYTES_PER_ELEMENT,
  BigInt64ArrayLength,
  BigInt64ArrayName,
  BigInt64ArrayPrototype,
  BigUint64Array,
  BigUint64ArrayBYTES_PER_ELEMENT,
  BigUint64ArrayLength,
  BigUint64ArrayName,
  BigUint64ArrayPrototype,
  Boolean,
  BooleanLength,
  BooleanName,
  BooleanPrototype,
  BooleanPrototypeToString,
  BooleanPrototypeValueOf,
  DataView,
  DataViewLength,
  DataViewName,
  DataViewPrototype,
  DataViewPrototypeGetBigInt64,
  DataViewPrototypeGetBuffer,
  DataViewPrototypeGetByteLength,
  DataViewPrototypeGetByteOffset,
  DataViewPrototypeGetFloat32,
  DataViewPrototypeGetFloat64,
  DataViewPrototypeGetInt16,
  DataViewPrototypeGetInt32,
  DataViewPrototypeGetInt8,
  DataViewPrototypeGetUint16,
  DataViewPrototypeGetUint32,
  DataViewPrototypeGetUint8,
  DataViewPrototypeSetBigInt64,
  DataViewPrototypeSetBigUint64,
  DataViewPrototypeSetFloat32,
  DataViewPrototypeSetFloat64,
  DataViewPrototypeSetInt16,
  DataViewPrototypeSetInt32,
  DataViewPrototypeSetInt8,
  DataViewPrototypeSetUint16,
  DataViewPrototypeSetUint32,
  DataViewPrototypeSetUint8,
  DataViewPrototypeGetBigUint64,
  Error,
  ErrorCaptureStackTrace,
  ErrorLength,
  ErrorName,
  ErrorPrototype,
  ErrorPrototypeToString,
  EvalError,
  EvalErrorLength,
  EvalErrorName,
  EvalErrorPrototype,
  Float32Array,
  Float32ArrayBYTES_PER_ELEMENT,
  Float32ArrayLength,
  Float32ArrayName,
  Float32ArrayPrototype,
  Float64Array,
  Float64ArrayBYTES_PER_ELEMENT,
  Float64ArrayLength,
  Float64ArrayName,
  Float64ArrayPrototype,
  Function,
  FunctionLength,
  FunctionName,
  FunctionPrototype,
  FunctionPrototypeApply,
  FunctionPrototypeBind,
  FunctionPrototypeCall,
  FunctionPrototypeToString,
  Int16Array,
  Int16ArrayBYTES_PER_ELEMENT,
  Int16ArrayLength,
  Int16ArrayName,
  Int16ArrayPrototype,
  Int32Array,
  Int32ArrayBYTES_PER_ELEMENT,
  Int32ArrayLength,
  Int32ArrayName,
  Int32ArrayPrototype,
  Int8Array,
  Int8ArrayLength,
  Int8ArrayName,
  Int8ArrayPrototype,
  Int8ArrayBYTES_PER_ELEMENT,
  JSON,
  JSONParse,
  JSONStringify,
  Map,
  MapLength,
  MapName,
  MapPrototype,
  MapPrototypeGet,
  MapPrototypeSet,
  MapPrototypeHas,
  MapPrototypeDelete,
  MapPrototypeClear,
  MapPrototypeEntries,
  MapPrototypeForEach,
  MapPrototypeKeys,
  MapPrototypeValues,
  MapPrototypeGetSize,
  Math,
  MathAbs,
  MathAcos,
  MathAcosh,
  MathAsin,
  MathAsinh,
  MathAtan2,
  MathAtan,
  MathAtanh,
  MathCbrt,
  MathCeil,
  MathClz32,
  MathCos,
  MathCosh,
  MathE,
  MathExp,
  MathExpm1,
  MathFloor,
  MathFround,
  MathHypot,
  MathImul,
  MathLN10,
  MathLN2,
  MathLOG10E,
  MathLOG2E,
  MathLog10,
  MathLog1p,
  MathLog2,
  MathLog,
  MathMax,
  MathMaxApply,
  MathMin,
  MathPI,
  MathPow,
  MathRandom,
  MathRound,
  MathSQRT1_2,
  MathSQRT2,
  MathSign,
  MathSin,
  MathSinh,
  MathSqrt,
  MathTan,
  MathTanh,
  MathTrunc,
  Number,
  NumberEPSILON,
  NumberIsFinite,
  NumberIsInteger,
  NumberIsNaN,
  NumberIsSafeInteger,
  NumberLength,
  NumberMAX_SAFE_INTEGER,
  NumberMAX_VALUE,
  NumberMIN_SAFE_INTEGER,
  NumberMIN_VALUE,
  NumberNEGATIVE_INFINITY,
  NumberNaN,
  NumberName,
  NumberPOSITIVE_INFINITY,
  NumberParseFloat,
  NumberParseInt,
  NumberPrototype,
  NumberPrototypeToExponential,
  NumberPrototypeToFixed,
  NumberPrototypeToLocaleString,
  NumberPrototypeToPrecision,
  NumberPrototypeToString,
  NumberPrototypeValueOf,
  OBJECT as Object,
  ObjectLength,
  ObjectName,
  ObjectPrototype,
  ObjectAssign,
  ObjectGetOwnPropertyDescriptor,
  ObjectGetOwnPropertyDescriptors,
  ObjectGetOwnPropertyNames,
  ObjectGetOwnPropertySymbols,
  ObjectIs,
  ObjectPreventExtensions,
  ObjectSeal,
  ObjectCreate,
  ObjectDefineProperties,
  ObjectDefineProperty,
  ObjectFreeze,
  ObjectGetPrototypeOf,
  ObjectSetPrototypeOf,
  ObjectIsExtensible,
  ObjectIsFrozen,
  ObjectIsSealed,
  ObjectKeys,
  ObjectEntries,
  ObjectFromEntries,
  ObjectValues,
  ObjectPrototype__defineGetter__,
  ObjectPrototype__defineSetter__,
  ObjectPrototypeHasOwnProperty,
  ObjectPrototype__lookupGetter__,
  ObjectPrototype__lookupSetter__,
  ObjectPrototypeIsPrototypeOf,
  ObjectPrototypePropertyIsEnumerable,
  ObjectPrototypeToString,
  ObjectPrototypeValueOf,
  ObjectPrototypeToLocaleString,
  Promise,
  PromiseAll,
  PromiseAllSettled,
  PromiseAny,
  PromiseLength,
  PromiseName,
  PromisePrototype,
  PromisePrototypeCatch,
  PromisePrototypeFinally,
  PromisePrototypeThen,
  PromiseRace,
  PromiseReject,
  PromiseResolve,
  Proxy,
  RangeError,
  RangeErrorLength,
  RangeErrorName,
  RangeErrorPrototype,
  ReferenceError,
  ReferenceErrorLength,
  ReferenceErrorName,
  ReferenceErrorPrototype,
  Reflect,
  ReflectApply,
  ReflectConstruct,
  ReflectDefineProperty,
  ReflectDeleteProperty,
  ReflectGet,
  ReflectGetOwnPropertyDescriptor,
  ReflectGetPrototypeOf,
  ReflectHas,
  ReflectIsExtensible,
  ReflectOwnKeys,
  ReflectPreventExtensions,
  ReflectSet,
  ReflectSetPrototypeOf,
  RegExp,
  RegExpLength,
  RegExpName,
  RegExpPrototype,
  RegExpPrototypeExec,
  RegExpPrototypeCompile,
  RegExpPrototypeToString,
  RegExpPrototypeTest,
  RegExpPrototypeGetDotAll,
  RegExpPrototypeGetFlags,
  RegExpPrototypeGetGlobal,
  RegExpPrototypeGetIgnoreCase,
  RegExpPrototypeGetMultiline,
  RegExpPrototypeGetSource,
  RegExpPrototypeGetSticky,
  RegExpPrototypeGetUnicode,
  Set,
  SetLength,
  SetName,
  SetPrototype,
  SetPrototypeHas,
  SetPrototypeAdd,
  SetPrototypeDelete,
  SetPrototypeClear,
  SetPrototypeEntries,
  SetPrototypeForEach,
  SetPrototypeValues,
  SetPrototypeKeys,
  SetPrototypeGetSize,
  String,
  StringLength,
  StringName,
  StringPrototype,
  StringFromCharCode,
  StringFromCharCodeApply,
  StringFromCodePoint,
  StringFromCodePointApply,
  StringRaw,
  StringPrototypeAnchor,
  StringPrototypeBig,
  StringPrototypeBlink,
  StringPrototypeBold,
  StringPrototypeCharAt,
  StringPrototypeCharCodeAt,
  StringPrototypeCodePointAt,
  StringPrototypeConcat,
  StringPrototypeEndsWith,
  StringPrototypeFontcolor,
  StringPrototypeFontsize,
  StringPrototypeFixed,
  StringPrototypeIncludes,
  StringPrototypeIndexOf,
  StringPrototypeItalics,
  StringPrototypeLastIndexOf,
  StringPrototypeLink,
  StringPrototypeLocaleCompare,
  StringPrototypeMatch,
  StringPrototypeMatchAll,
  StringPrototypeNormalize,
  StringPrototypePadEnd,
  StringPrototypePadStart,
  StringPrototypeRepeat,
  StringPrototypeReplace,
  StringPrototypeSearch,
  StringPrototypeSlice,
  StringPrototypeSmall,
  StringPrototypeSplit,
  StringPrototypeStrike,
  StringPrototypeSub,
  StringPrototypeSubstr,
  StringPrototypeSubstring,
  StringPrototypeSup,
  StringPrototypeStartsWith,
  StringPrototypeToString,
  StringPrototypeTrim,
  StringPrototypeTrimStart,
  StringPrototypeTrimLeft,
  StringPrototypeTrimEnd,
  StringPrototypeTrimRight,
  StringPrototypeToLocaleLowerCase,
  StringPrototypeToLocaleUpperCase,
  StringPrototypeToLowerCase,
  StringPrototypeToUpperCase,
  StringPrototypeValueOf,
  StringPrototypeReplaceAll,
  Symbol,
  SymbolLength,
  SymbolName,
  SymbolPrototype,
  SymbolFor,
  SymbolKeyFor,
  SymbolAsyncIterator,
  SymbolHasInstance,
  SymbolIsConcatSpreadable,
  SymbolIterator,
  SymbolMatch,
  SymbolMatchAll,
  SymbolReplace,
  SymbolSearch,
  SymbolSpecies,
  SymbolSplit,
  SymbolToPrimitive,
  SymbolToStringTag,
  SymbolUnscopables,
  SymbolPrototypeToString,
  SymbolPrototypeValueOf,
  SymbolPrototypeSymbolToPrimitive,
  SymbolPrototypeGetDescription,
  SyntaxError,
  SyntaxErrorLength,
  SyntaxErrorName,
  SyntaxErrorPrototype,
  TypedArrayPrototypeGetBuffer,
  TypedArrayPrototypeGetByteLength,
  TypedArrayPrototypeGetByteOffset,
  TypedArrayPrototypeGetLength,
  TypeError,
  TypeErrorLength,
  TypeErrorName,
  TypeErrorPrototype,
  URIError,
  URIErrorLength,
  URIErrorName,
  URIErrorPrototype,
  URL,
  URLCreateObjectURL,
  URLRevokeObjectURL,
  Uint16Array,
  Uint16ArrayLength,
  Uint16ArrayName,
  Uint16ArrayPrototype,
  Uint16ArrayBYTES_PER_ELEMENT,
  Uint32Array,
  Uint32ArrayLength,
  Uint32ArrayName,
  Uint32ArrayPrototype,
  Uint32ArrayBYTES_PER_ELEMENT,
  Uint8Array,
  Uint8ArrayLength,
  Uint8ArrayName,
  Uint8ArrayPrototype,
  Uint8ArrayBYTES_PER_ELEMENT,
  Uint8ClampedArray,
  Uint8ClampedArrayLength,
  Uint8ClampedArrayName,
  Uint8ClampedArrayPrototype,
  Uint8ClampedArrayBYTES_PER_ELEMENT,
  WeakMap,
  WeakMapLength,
  WeakMapName,
  WeakMapPrototype,
  WeakMapPrototypeDelete,
  WeakMapPrototypeGet,
  WeakMapPrototypeSet,
  WeakMapPrototypeHas,
  WeakSet,
  WeakSetLength,
  WeakSetName,
  WeakSetPrototype,
  WeakSetPrototypeDelete,
  WeakSetPrototypeHas,
  WeakSetPrototypeAdd,

  //////
  // bonus: node core doesn't need to harden these, since it has internal
  // references to them, but it's very handy when dealing with scenarios
  // where process might get clobbered, as in tests and such.
  PROCESS as process,
  processCwd,
  processArgv,
  processExecArgv,
  processExecPath,
  processEnv,
  processArgv0,
  processPid,
  processPpid,
  processTitle,
  processVersion,
  processVersions,
  processArch,
  processPlatform,
  processRelease,
  processModuleLoadList,
  processFeatures,
  processNextTick,
  processAbort,
  processUmask,
  processsInitgroups,
  processSetgroups,
  processSetuid,
  processSetgid,
  processSeteuid,
  processSetegid,
  processSetSourceMapsEnabled,
  processSetUncaughtExceptionCaptureCallback,
  processHasUncaughtExceptionCaptureCallback,
  processEmitWarning,
  processDebugPort,
}

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

// ensure that we have the really truly true and real globalThis
const GLOBALTHIS = (0, eval)('this') as typeof globalThis

// unused?
//
// export type UncurryMethodApply<
//   O,
//   K extends keyof O,
//   T = O
// > = O[K] extends (this: infer U, ...args: infer A) => infer R
//   ? (self: unknown extends U ? T : U, args: A) => R
//   : never

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
  JSON: JSON_,
  Map,
  Math: Math_,
  Number,
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
  URL,
  WeakMap,
  WeakSet,

  setImmediate: setImmediate_,
  setTimeout: setTimeout_,
  setInterval: setInterval_,
  clearTimeout,
  clearInterval,

  decodeURI,
  decodeURIComponent,
  encodeURI,
  encodeURIComponent,
  escape,
  unescape,
} = GLOBALTHIS

const OBJECT: typeof Object = GLOBALTHIS.Object

type TypedArray =
  | Uint8Array
  | Int8Array
  | Uint16Array
  | Int16Array
  | Uint32Array
  | Int32Array
  | Uint8ClampedArray
  | Float32Array
  | Float64Array

type TypedArrayOf = <T extends TypedArray>(
  ctor: TypedArrayConstructor<T>,
  ...args: Parameters<TypedArrayConstructor<T>['of']>
) => T

type TypedArrayOfApply = <T extends TypedArray>(
  ctor: TypedArrayConstructor<T>,
  args: Parameters<TypedArrayConstructor<T>['of']>
) => T

type TypedArrayFrom = <T extends TypedArray>(
  ctor: TypedArrayConstructor<T>,
  ...args: Parameters<TypedArrayConstructor<T>['from']>
) => T

type TypedArrayConstructor<T extends TypedArray> = T extends Uint8Array
  ? typeof Uint8Array
  : T extends Int8Array
  ? typeof Int8Array
  : T extends Uint16Array
  ? typeof Uint16Array
  : T extends Int16Array
  ? typeof Int16Array
  : T extends Uint32Array
  ? typeof Uint32Array
  : T extends Int32Array
  ? typeof Int32Array
  : T extends Uint8ClampedArray
  ? typeof Uint8ClampedArray
  : T extends Float32Array
  ? typeof Float32Array
  : T extends Float64Array
  ? typeof Float64Array
  : never

const Uint8ArrayOf = Uint8Array.of
const Int8ArrayOf = Int8Array.of
const Uint16ArrayOf = Uint16Array.of
const Int16ArrayOf = Int16Array.of
const Uint32ArrayOf = Uint32Array.of
const Int32ArrayOf = Int32Array.of
const Uint8ClampedArrayOf = Uint8ClampedArray.of
const Float32ArrayOf = Float32Array.of
const Float64ArrayOf = Float64Array.of
const Uint8ArrayFrom = Uint8Array.from
const Int8ArrayFrom = Int8Array.from
const Uint16ArrayFrom = Uint16Array.from
const Int16ArrayFrom = Int16Array.from
const Uint32ArrayFrom = Uint32Array.from
const Int32ArrayFrom = Int32Array.from
const Uint8ClampedArrayFrom = Uint8ClampedArray.from
const Float32ArrayFrom = Float32Array.from
const Float64ArrayFrom = Float64Array.from

const TypedArrayOf = <T extends TypedArray>(
  ctor: TypedArrayConstructor<T>,
  ...args: Parameters<TypedArrayConstructor<T>['of']>
): T => {
  const fn =
    ctor === Uint8Array
      ? Uint8ArrayOf
      : ctor === Int8Array
      ? Int8ArrayOf
      : ctor === Uint16Array
      ? Uint16ArrayOf
      : ctor === Int16Array
      ? Int16ArrayOf
      : ctor === Uint32Array
      ? Uint32ArrayOf
      : ctor === Int32Array
      ? Int32ArrayOf
      : ctor === Uint8ClampedArray
      ? Uint8ClampedArrayOf
      : ctor === Float32Array
      ? Float32ArrayOf
      : ctor === Float64Array
      ? Float64ArrayOf
      : undefined
  if (!fn) {
    throw new TypeError('invalid TypedArray constructor: ' + ctor)
  }
  return uncurryThis(fn)(ctor, ...args) as T
}

const TypedArrayOfApply: TypedArrayOfApply = <T extends TypedArray>(
  ctor: TypedArrayConstructor<T>,
  args: Parameters<TypedArrayConstructor<T>['of']>
): T => {
  const fn =
    ctor === Uint8Array
      ? Uint8ArrayOf
      : ctor === Int8Array
      ? Int8ArrayOf
      : ctor === Uint16Array
      ? Uint16ArrayOf
      : ctor === Int16Array
      ? Int16ArrayOf
      : ctor === Uint32Array
      ? Uint32ArrayOf
      : ctor === Int32Array
      ? Int32ArrayOf
      : ctor === Uint8ClampedArray
      ? Uint8ClampedArrayOf
      : ctor === Float32Array
      ? Float32ArrayOf
      : ctor === Float64Array
      ? Float64ArrayOf
      : undefined
  if (!fn) {
    throw new TypeError('invalid TypedArray constructor: ' + ctor)
  }
  return applyBind(fn)(ctor, args) as T
}

const TypedArrayPrototype = Reflect.getPrototypeOf(
  Uint8Array.prototype
) as TypedArray

const TypedArrayPrototypeGetSymbolToStringTag = (
  self: TypedArray
) =>
  self instanceof Uint8Array
    ? 'Uint8Array'
    : self instanceof Int8Array
    ? 'Int8Array'
    : self instanceof Uint16Array
    ? 'Uint16Array'
    : self instanceof Int16Array
    ? 'Int16Array'
    : self instanceof Uint32Array
    ? 'Uint32Array'
    : self instanceof Int32Array
    ? 'Int32Array'
    : self instanceof Uint8ClampedArray
    ? 'Uint8ClampedArray'
    : self instanceof Float32Array
    ? 'Float32Array'
    : self instanceof Float64Array
    ? 'Float64Array'
    : undefined

const TypedArrayFrom: TypedArrayFrom = <T extends TypedArray>(
  ctor: TypedArrayConstructor<T>,
  ...args: Parameters<TypedArrayConstructor<T>['from']>
): T => {
  const fn =
    ctor === Uint8Array
      ? Uint8ArrayFrom
      : ctor === Int8Array
      ? Int8ArrayFrom
      : ctor === Uint16Array
      ? Uint16ArrayFrom
      : ctor === Int16Array
      ? Int16ArrayFrom
      : ctor === Uint32Array
      ? Uint32ArrayFrom
      : ctor === Int32Array
      ? Int32ArrayFrom
      : ctor === Uint8ClampedArray
      ? Uint8ClampedArrayFrom
      : ctor === Float32Array
      ? Float32ArrayFrom
      : ctor === Float64Array
      ? Float64ArrayFrom
      : undefined
  if (!fn) {
    throw new TypeError('invalid TypedArray constructor: ' + ctor)
  }
  return uncurryThis(fn)(ctor, ...args) as T
}

const SafeObject = OBJECT.defineProperties(
  OBJECT.create(null),
  OBJECT.getOwnPropertyDescriptors(OBJECT) as PropertyDescriptorMap
)
OBJECT.freeze(SafeObject)
// fast version:
// const SafeObject = Object

const cloneSafe = <T extends {}>(obj: T): T => {
  const safe = SafeObject.defineProperties(
    SafeObject.create(null),
    SafeObject.getOwnPropertyDescriptors(obj) as PropertyDescriptorMap
  )
  SafeObject.freeze(safe)
  return safe
}
// fast version:
// cloneSafe = (o: T) => o

const FunctionPrototype = cloneSafe(Function.prototype)
const { apply, bind, call } = Function.prototype

const uncurryThis: <T extends (...args: any[]) => any>(
  fn: T
) => UncurryThis<T> = bind.bind(call)
// fast version:
// const uncurryThis = (fn: T) =>
//   (thisp: ThisParameterType, ...args: Parameters<T>) =>
//     fn.call(thisp, ...args)

const applyBind: <T extends (...args: any[]) => any>(
  fn: T
) => UncurryThisStaticApply<T> = bind.bind(apply)
// fast version:
// const applyBind = (fn: T) =>
//   (thisp: ThisParameterType, args: Parameters<T>) =>
//     fn.apply(thisp, args)

const staticApply: <T extends (...args: any[]) => any>(
  fn: T
) => StaticApply<T> = <T extends (...args: any[]) => any>(fn: T) => {
  return bind.bind(apply)(fn, null)
}
// fast version:
// const staticApply = (fn: T) =>
//   (args: Parameters<T>) =>
//     fn.apply(null, args)

const staticCall: <T extends (...args: any[]) => any>(
  fn: T
) => StaticCall<T> =
  <T extends (...args: any[]) => any>(fn: T) =>
  (...args: Parameters<T>) =>
    fn(...args)

const maybeStaticCall: <T extends ((...args: any[]) => any) | undefined>(
  fn?: T | undefined
) => undefined | StaticCall<Exclude<T, undefined>> = <
  T extends ((...args: any[]) => any) | undefined
>(
  fn?: T
) => (!fn ? fn : staticCall(fn))

const uncurryMethod: <O extends any, K extends keyof O, T = O>(
  obj: O,
  k: K
) => UncurryMethod<O, K, T> = <O extends any, K extends keyof O>(
  obj: O,
  k: K
) => bind.bind(call)(obj[k], null)
// fast version:
// const uncurryMethod = (obj: O, k: K) =>
//   (thisp: ThisParameterType, ...args: Parameters<O[K]>) =>
//     obj[k].call(thisp, ...args)

const uncurryGetter = <O extends object, K extends keyof O>(
  obj: O,
  k: K
): UncurryGetter<O, K> => {
  const desc = SafeReflect.getOwnPropertyDescriptor(obj, k)
  if (desc?.get) {
    return uncurryThis(desc.get)
  }
  throw new Error('invalid uncurryGetter call: ' + String(k))
}

// unused?
//
// const uncurrySetter = <O extends object, K extends keyof O>(
//   obj: O,
//   k: K
// ): UncurrySetter<O, K> => {
//   const desc = SafeReflect.getOwnPropertyDescriptor(obj, k)
//   if (desc?.set) {
//     return uncurryThis(desc.set)
//   }
//   throw new Error('invalid uncurrySetter call: ' + String(k))
// }

const FunctionPrototypeCall = uncurryThis(call)

// local shorthand
const fpc = FunctionPrototypeCall

const ArrayPrototype = cloneSafe(Array.prototype)

/* c8 ignore start */
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
// this isn't actually all that hardened, users can still modify
// the getter for 'source' and 'flags'
const hardenRegExp = (re: RegExp) =>
  new RegExp(getValue(re, 'source'), getValue(re, 'flags'))
/* c8 ignore stop */

const SafeReflect = cloneSafe(Reflect)

// TODO: test when process is clobbered, that this all still works kinda
/* c8 ignore start */
const ogProcess = (
  typeof GLOBALTHIS.process === 'object' && !!GLOBALTHIS.process
    ? GLOBALTHIS.process
    : {}
) as NodeJS.Process & {
  moduleLoadList: string[]
  initgroups?: (user: string | number, extraGroup: string | number) => void
  setgroups?: (groups: number[]) => void
  setgid?: (gid: number) => void
  setuid?: (uid: number) => void
  seteuid?: (euid: number) => void
  setSourceMapsEnabled?: (v: boolean) => void
  nodeEnvironmentFlags?: Set<string>
}
/* c8 ignore stop */
const PROCESS = cloneSafe(ogProcess)

const setImmediate = Object.freeze(
  Object.assign(
    (
      ...args: Parameters<typeof setImmediate_>
    ): ReturnType<typeof setImmediate_> => setImmediate_(...args),
    { ...setImmediate_ }
  )
)

const setTimeout = Object.freeze(
  Object.assign(
    (
      ...args: Parameters<typeof setTimeout_>
    ): ReturnType<typeof setTimeout_> => setTimeout_(...args),
    { ...setTimeout_ }
  )
)

const setInterval = Object.freeze(
  Object.assign(
    (
      ...args: Parameters<typeof setInterval_>
    ): ReturnType<typeof setInterval_> => setInterval_(...args)
  )
)
const AggregateError = GLOBALTHIS.AggregateError
const AggregateErrorLength = GLOBALTHIS.AggregateError.length
const AggregateErrorName = GLOBALTHIS.AggregateError.name
const AggregateErrorPrototype = cloneSafe(AggregateError.prototype)

const ArrayFrom = staticCall(Array.from)
const ArrayIsArray = staticCall(Array.isArray)
const ArrayLength = Array.length
const ArrayName = Array.name
const ArrayOf = staticCall(Array.of)
const ArrayPrototypeConcat = uncurryThis(ArrayPrototype.concat)
const ArrayPrototypeCopyWithin = uncurryThis(ArrayPrototype.copyWithin)
const ArrayPrototypeEntries = uncurryThis(ArrayPrototype.entries)
const ArrayPrototypeEvery = uncurryThis(ArrayPrototype.every)
const ArrayPrototypeFill = uncurryThis(ArrayPrototype.fill)
const ArrayPrototypeFilter = uncurryThis(ArrayPrototype.filter)
const ArrayPrototypeFind = uncurryThis(ArrayPrototype.find)
const ArrayPrototypeFindIndex = uncurryThis(ArrayPrototype.findIndex)
const ArrayPrototypeFlat = uncurryThis(ArrayPrototype.flat)
const ArrayPrototypeFlatMap = uncurryThis(ArrayPrototype.flatMap)
const ArrayPrototypeForEach = uncurryThis(ArrayPrototype.forEach)
const ArrayPrototypeIncludes = uncurryThis(ArrayPrototype.includes)
const ArrayPrototypeIndexOf = uncurryThis(ArrayPrototype.indexOf)
const ArrayPrototypeJoin = uncurryThis(ArrayPrototype.join)
const ArrayPrototypeKeys = uncurryThis(ArrayPrototype.keys)
const ArrayPrototypeLastIndexOf = uncurryThis(ArrayPrototype.lastIndexOf)
const ArrayPrototypeMap = uncurryThis(ArrayPrototype.map)
const ArrayPrototypePop = uncurryThis(ArrayPrototype.pop)
const ArrayPrototypePush = uncurryThis(ArrayPrototype.push)
const ArrayPrototypePushApply = applyBind(ArrayPrototype.push)
const ArrayPrototypeReduce = uncurryThis(ArrayPrototype.reduce)
const ArrayPrototypeReduceRight = uncurryThis(ArrayPrototype.reduceRight)
const ArrayPrototypeReverse = uncurryThis(ArrayPrototype.reverse)
const ArrayPrototypeShift = uncurryThis(ArrayPrototype.shift)
const ArrayPrototypeSlice = uncurryThis(ArrayPrototype.slice)
const ArrayPrototypeSome = uncurryThis(ArrayPrototype.some)
const ArrayPrototypeSort = uncurryThis(ArrayPrototype.sort)
const ArrayPrototypeSplice = uncurryThis(ArrayPrototype.splice)
const ArrayPrototypeSymbolIterator = uncurryMethod(
  Array.prototype,
  Symbol.iterator
)
const ArrayPrototypeToLocaleString = uncurryThis(
  ArrayPrototype.toLocaleString
)
const ArrayPrototypeToString = uncurryThis(ArrayPrototype.toString)
const ArrayPrototypeUnshift = uncurryThis(ArrayPrototype.unshift)
const ArrayPrototypeUnshiftApply = applyBind(ArrayPrototype.unshift)
const ArrayPrototypeValues = uncurryThis(ArrayPrototype.values)

const BigIntAsIntN = uncurryThis(BigInt.asIntN)
const BigIntAsUintN = uncurryThis(BigInt.asUintN)
const BigIntLength = BigInt.length
const BigIntName = BigInt.name
const BigIntPrototype = cloneSafe(BigInt.prototype)
const BigIntPrototypeToLocaleString = uncurryThis(
  BigInt.prototype.toLocaleString
)
const BigIntPrototypeToString = uncurryThis(BigInt.prototype.toString)
const BigIntPrototypeValueOf = uncurryThis(BigInt.prototype.valueOf)

const BigInt64ArrayBYTES_PER_ELEMENT = BigInt64Array.BYTES_PER_ELEMENT
const BigInt64ArrayLength = BigInt64Array.length
const BigInt64ArrayName = BigInt64Array.name
const BigInt64ArrayPrototype = BigInt64Array.prototype

const BigUint64ArrayBYTES_PER_ELEMENT = BigUint64Array.BYTES_PER_ELEMENT
const BigUint64ArrayLength = BigUint64Array.length
const BigUint64ArrayName = BigUint64Array.name
const BigUint64ArrayPrototype = cloneSafe(BigUint64Array.prototype)

const BooleanLength = Boolean.length
const BooleanName = Boolean.name
const BooleanPrototype = cloneSafe(Boolean.prototype)
const BooleanPrototypeToString = uncurryThis(Boolean.prototype.toString)
const BooleanPrototypeValueOf = uncurryThis(Boolean.prototype.valueOf)

const DataViewLength = DataView.length
const DataViewName = DataView.name
const DataViewPrototype = DataView.prototype
const DataViewPrototypeGetBigInt64 = uncurryThis(
  DataView.prototype.getBigInt64
)
const DataViewPrototypeGetBuffer = uncurryGetter(
  DataView.prototype,
  'buffer'
)
const DataViewPrototypeGetByteLength = uncurryGetter(
  DataView.prototype,
  'byteLength'
)
const DataViewPrototypeGetByteOffset = uncurryGetter(
  DataView.prototype,
  'byteOffset'
)
const DataViewPrototypeGetFloat32 = uncurryThis(
  DataView.prototype.getFloat32
)
const DataViewPrototypeGetFloat64 = uncurryThis(
  DataView.prototype.getFloat64
)
const DataViewPrototypeGetInt16 = uncurryThis(DataView.prototype.getInt16)
const DataViewPrototypeGetInt32 = uncurryThis(DataView.prototype.getInt32)
const DataViewPrototypeGetInt8 = uncurryThis(DataView.prototype.getInt8)
const DataViewPrototypeGetUint16 = uncurryThis(
  DataView.prototype.getUint16
)
const DataViewPrototypeGetUint32 = uncurryThis(
  DataView.prototype.getUint32
)
const DataViewPrototypeGetUint8 = uncurryThis(DataView.prototype.getUint8)
const DataViewPrototypeSetBigInt64 = uncurryThis(
  DataView.prototype.setBigInt64
)
const DataViewPrototypeSetBigUint64 = uncurryThis(
  DataView.prototype.setBigUint64
)
const DataViewPrototypeSetFloat32 = uncurryThis(
  DataView.prototype.setFloat32
)
const DataViewPrototypeSetFloat64 = uncurryThis(
  DataView.prototype.setFloat64
)
const DataViewPrototypeSetInt16 = uncurryThis(DataView.prototype.setInt16)
const DataViewPrototypeSetInt32 = uncurryThis(DataView.prototype.setInt32)
const DataViewPrototypeSetInt8 = uncurryThis(DataView.prototype.setInt8)
const DataViewPrototypeSetUint16 = uncurryThis(
  DataView.prototype.setUint16
)
const DataViewPrototypeSetUint32 = uncurryThis(
  DataView.prototype.setUint32
)
const DataViewPrototypeSetUint8 = uncurryThis(DataView.prototype.setUint8)
const DataViewPrototypeGetBigUint64 = uncurryThis(
  DataView.prototype.getBigUint64
)

const ErrorCaptureStackTrace = staticCall(Error.captureStackTrace)
const ErrorLength = Error.length
const ErrorName = Error.name
const ErrorPrototype = cloneSafe(Error.prototype)
const ErrorPrototypeToString = uncurryThis(Error.prototype.toString)

const EvalErrorLength = EvalError.length
const EvalErrorName = EvalError.name
const EvalErrorPrototype = cloneSafe(EvalError.prototype)

const Float32ArrayBYTES_PER_ELEMENT = Float32Array.BYTES_PER_ELEMENT
const Float32ArrayLength = Float32Array.length
const Float32ArrayName = Float32Array.name
const Float32ArrayPrototype = cloneSafe(Float32Array.prototype)

const Float64ArrayBYTES_PER_ELEMENT = Float64Array.BYTES_PER_ELEMENT
const Float64ArrayLength = Float64Array.length
const Float64ArrayName = Float64Array.name
const Float64ArrayPrototype = cloneSafe(Float64Array.prototype)

const FunctionLength = Function.length
const FunctionName = Function.name
const FunctionPrototypeApply = uncurryThis(apply)
const FunctionPrototypeBind = uncurryThis(bind)
const FunctionPrototypeToString = uncurryThis(Function.prototype.toString)

const Int16ArrayBYTES_PER_ELEMENT = Int16Array.BYTES_PER_ELEMENT
const Int16ArrayLength = Int16Array.length
const Int16ArrayName = Int16Array.name
const Int16ArrayPrototype = cloneSafe(Int16Array.prototype)

const Int32ArrayBYTES_PER_ELEMENT = Int32Array.BYTES_PER_ELEMENT
const Int32ArrayLength = Int32Array.length
const Int32ArrayName = Int32Array.name
const Int32ArrayPrototype = cloneSafe(Int32Array.prototype)

const Int8ArrayLength = Int8Array.length
const Int8ArrayName = Int8Array.name
const Int8ArrayPrototype = cloneSafe(Int8Array.prototype)
const Int8ArrayBYTES_PER_ELEMENT = Int8Array.BYTES_PER_ELEMENT

const JSON = cloneSafe(JSON_)
const JSONParse = staticCall(JSON.parse)
const JSONStringify = staticCall(JSON.stringify)

const MapLength = Map.length
const MapName = Map.name
const MapPrototype = cloneSafe(Map.prototype)
const MapPrototypeGet = uncurryThis(Map.prototype.get)
const MapPrototypeSet = uncurryThis(Map.prototype.set)
const MapPrototypeHas = uncurryThis(Map.prototype.has)
const MapPrototypeDelete = uncurryThis(Map.prototype.delete)
const MapPrototypeClear = uncurryThis(Map.prototype.clear)
const MapPrototypeEntries = uncurryThis(Map.prototype.entries)
const MapPrototypeForEach = uncurryThis(Map.prototype.forEach)
const MapPrototypeKeys = uncurryThis(Map.prototype.keys)
const MapPrototypeValues = uncurryThis(Map.prototype.values)
const MapPrototypeGetSize = uncurryGetter(Map.prototype, 'size')

const Math = cloneSafe(Math_)
const MathAbs = Math.abs
const MathAcos = Math.acos
const MathAcosh = Math.acosh
const MathAsin = Math.asin
const MathAsinh = Math.asinh
const MathAtan2 = Math.atan2
const MathAtan = Math.atan
const MathAtanh = Math.atanh
const MathCbrt = Math.cbrt
const MathCeil = Math.ceil
const MathClz32 = Math.clz32
const MathCos = Math.cos
const MathCosh = Math.cosh
const MathE = Math.E
const MathExp = Math.exp
const MathExpm1 = Math.expm1
const MathFloor = Math.floor
const MathFround = Math.fround
const MathHypot = Math.hypot
const MathImul = Math.imul
const MathLN10 = Math.LN10
const MathLN2 = Math.LN2
const MathLOG10E = Math.LOG10E
const MathLOG2E = Math.LOG2E
const MathLog10 = Math.log10
const MathLog1p = Math.log1p
const MathLog2 = Math.log2
const MathLog = Math.log
const MathMax = Math.max
const MathMaxApply = staticApply(Math.max)
const MathMin = Math.min
const MathPI = Math.PI
const MathPow = Math.pow
const MathRandom = Math.random
const MathRound = Math.round
const MathSQRT1_2 = Math.SQRT1_2
const MathSQRT2 = Math.SQRT2
const MathSign = Math.sign
const MathSin = Math.sin
const MathSinh = Math.sinh
const MathSqrt = Math.sqrt
const MathTan = Math.tan
const MathTanh = Math.tanh
const MathTrunc = Math.trunc

const NumberEPSILON = Number.EPSILON
const NumberIsFinite = staticCall(Number.isFinite)
const NumberIsInteger = staticCall(Number.isInteger)
const NumberIsNaN = staticCall(Number.isNaN)
const NumberIsSafeInteger = staticCall(Number.isSafeInteger)
const NumberLength = Number.length
const NumberMAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER
const NumberMAX_VALUE = Number.MAX_VALUE
const NumberMIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER
const NumberMIN_VALUE = Number.MIN_VALUE
const NumberNEGATIVE_INFINITY = Number.NEGATIVE_INFINITY
const NumberNaN = Number.NaN
const NumberName = Number.name
const NumberPOSITIVE_INFINITY = Number.POSITIVE_INFINITY
const NumberParseFloat = staticCall(Number.parseFloat)
const NumberParseInt = staticCall(Number.parseInt)
const NumberPrototype = cloneSafe(Number.prototype)
const NumberPrototypeToExponential = uncurryThis(
  Number.prototype.toExponential
)
const NumberPrototypeToFixed = uncurryThis(Number.prototype.toFixed)
const NumberPrototypeToLocaleString = uncurryThis(
  Number.prototype.toLocaleString
)
const NumberPrototypeToPrecision = uncurryThis(
  Number.prototype.toPrecision
)
const NumberPrototypeToString = uncurryThis(Number.prototype.toString)
const NumberPrototypeValueOf = uncurryThis(Number.prototype.valueOf)

const ObjectLength = OBJECT.length
const ObjectName = OBJECT.name
const ObjectPrototype = cloneSafe(OBJECT.prototype)
const ObjectAssign = staticCall(OBJECT.assign)
const ObjectGetOwnPropertyDescriptor = staticCall(
  OBJECT.getOwnPropertyDescriptor
)
const ObjectGetOwnPropertyDescriptors = staticCall(
  OBJECT.getOwnPropertyDescriptors
)
const ObjectGetOwnPropertyNames = staticCall(OBJECT.getOwnPropertyNames)
const ObjectGetOwnPropertySymbols = staticCall(
  OBJECT.getOwnPropertySymbols
)
const ObjectIs = staticCall(OBJECT.is)
const ObjectPreventExtensions = staticCall(OBJECT.preventExtensions)
const ObjectSeal = staticCall(OBJECT.seal)
const ObjectCreate = staticCall(OBJECT.create)
const ObjectDefineProperties = staticCall(OBJECT.defineProperties)
const ObjectDefineProperty = staticCall(OBJECT.defineProperty)
const ObjectFreeze = staticCall(OBJECT.freeze)
const ObjectGetPrototypeOf = staticCall(OBJECT.getPrototypeOf)
const ObjectSetPrototypeOf = staticCall(OBJECT.setPrototypeOf)
const ObjectIsExtensible = staticCall(OBJECT.isExtensible)
const ObjectIsFrozen = staticCall(OBJECT.isFrozen)
const ObjectIsSealed = staticCall(OBJECT.isSealed)
const ObjectKeys = staticCall(OBJECT.keys)
const ObjectEntries = staticCall(OBJECT.entries)
const ObjectFromEntries = staticCall(OBJECT.fromEntries)
const ObjectValues = staticCall(OBJECT.values)
const ObjectPrototype__defineGetter__ = uncurryThis(
  //@ts-ignore
  OBJECT.prototype.__defineGetter__
)
const ObjectPrototype__defineSetter__ = uncurryThis(
  //@ts-ignore
  OBJECT.prototype.__defineSetter__
)
const ObjectPrototypeHasOwnProperty = uncurryThis(
  OBJECT.prototype.hasOwnProperty
)
const ObjectPrototype__lookupGetter__ = uncurryThis(
  //@ts-ignore
  OBJECT.prototype.__lookupGetter__
)
const ObjectPrototype__lookupSetter__ = uncurryThis(
  //@ts-ignore
  OBJECT.prototype.__lookupSetter__
)
const ObjectPrototypeIsPrototypeOf = uncurryThis(
  OBJECT.prototype.isPrototypeOf
)
const ObjectPrototypePropertyIsEnumerable = uncurryThis(
  OBJECT.prototype.propertyIsEnumerable
)
const ObjectPrototypeToString = uncurryThis(OBJECT.prototype.toString)
const ObjectPrototypeValueOf = uncurryThis(OBJECT.prototype.valueOf)
const ObjectPrototypeToLocaleString = uncurryThis(
  OBJECT.prototype.toLocaleString
)

const PromiseAll = Promise.all
const PromiseAllSettled = Promise.allSettled
const PromiseAny = Promise.any
const PromiseLength = Promise.length
const PromiseName = Promise.name
const PromisePrototype = Promise.prototype
const PromisePrototypeCatch = uncurryThis(Promise.prototype.catch)
const PromisePrototypeFinally = uncurryThis(Promise.prototype.finally)
const PromisePrototypeThen = uncurryThis(Promise.prototype.then)
const PromiseRace = Promise.race
const PromiseReject = Promise.reject
const PromiseResolve = Promise.resolve

const RangeErrorLength = RangeError.length
const RangeErrorName = RangeError.name
const RangeErrorPrototype = cloneSafe(RangeError.prototype)

const ReferenceErrorLength = ReferenceError.length
const ReferenceErrorName = ReferenceError.name
const ReferenceErrorPrototype = cloneSafe(ReferenceError.prototype)

const ReflectApply = SafeReflect.apply
const ReflectConstruct = SafeReflect.construct
const ReflectDefineProperty = SafeReflect.defineProperty
const ReflectDeleteProperty = SafeReflect.deleteProperty
const ReflectGet = SafeReflect.get
const ReflectGetOwnPropertyDescriptor =
  SafeReflect.getOwnPropertyDescriptor
const ReflectGetPrototypeOf = SafeReflect.getPrototypeOf
const ReflectHas = SafeReflect.has
const ReflectIsExtensible = SafeReflect.isExtensible
const ReflectOwnKeys = SafeReflect.ownKeys
const ReflectPreventExtensions = SafeReflect.preventExtensions
const ReflectSet = SafeReflect.set
const ReflectSetPrototypeOf = SafeReflect.setPrototypeOf

const RegExpLength = RegExp.length
const RegExpName = RegExp.name
const RegExpPrototype = cloneSafe(RegExp.prototype)
const RegExpPrototypeExec = uncurryThis(RegExp.prototype.exec)
const RegExpPrototypeCompile = uncurryThis(RegExp.prototype.compile)
const RegExpPrototypeToString = uncurryThis(RegExp.prototype.toString)
const RegExpPrototypeTest = uncurryThis(RegExp.prototype.test)
const RegExpPrototypeGetDotAll = uncurryGetter(RegExp.prototype, 'dotAll')
const RegExpPrototypeGetFlags = uncurryGetter(RegExp.prototype, 'flags')
const RegExpPrototypeGetGlobal = uncurryGetter(RegExp.prototype, 'global')
const RegExpPrototypeGetIgnoreCase = uncurryGetter(
  RegExp.prototype,
  'ignoreCase'
)
const RegExpPrototypeGetMultiline = uncurryGetter(
  RegExp.prototype,
  'multiline'
)
const RegExpPrototypeGetSource = uncurryGetter(RegExp.prototype, 'source')
const RegExpPrototypeGetSticky = uncurryGetter(RegExp.prototype, 'sticky')
const RegExpPrototypeGetUnicode = uncurryGetter(
  RegExp.prototype,
  'unicode'
)

const SetLength = Set.length
const SetName = Set.name
const SetPrototype = cloneSafe(Set.prototype)
const SetPrototypeHas = uncurryThis(Set.prototype.has)
const SetPrototypeAdd = uncurryThis(Set.prototype.add)
const SetPrototypeDelete = uncurryThis(Set.prototype.delete)
const SetPrototypeClear = uncurryThis(Set.prototype.clear)
const SetPrototypeEntries = uncurryThis(Set.prototype.entries)
const SetPrototypeForEach = uncurryThis(Set.prototype.forEach)
const SetPrototypeValues = uncurryThis(Set.prototype.values)
const SetPrototypeKeys = uncurryThis(Set.prototype.keys)
const SetPrototypeGetSize = uncurryGetter(Set.prototype, 'size')

const StringLength = String.length
const StringName = String.name
const StringPrototype = cloneSafe(String.prototype)
const StringFromCharCode = String.fromCharCode
const StringFromCharCodeApply = staticApply(String.fromCharCode)
const StringFromCodePoint = String.fromCodePoint
const StringFromCodePointApply = staticApply(String.fromCodePoint)
const StringRaw = String.raw
const StringPrototypeAnchor = uncurryThis(String.prototype.anchor)
const StringPrototypeBig = uncurryThis(String.prototype.big)
const StringPrototypeBlink = uncurryThis(String.prototype.blink)
const StringPrototypeBold = uncurryThis(String.prototype.bold)
const StringPrototypeCharAt = uncurryThis(String.prototype.charAt)
const StringPrototypeCharCodeAt = uncurryThis(String.prototype.charCodeAt)
const StringPrototypeCodePointAt = uncurryThis(
  String.prototype.codePointAt
)
const StringPrototypeConcat = uncurryThis(String.prototype.concat)
const StringPrototypeEndsWith = uncurryThis(String.prototype.endsWith)
const StringPrototypeFontcolor = uncurryThis(String.prototype.fontcolor)
const StringPrototypeFontsize = uncurryThis(String.prototype.fontsize)
const StringPrototypeFixed = uncurryThis(String.prototype.fixed)
const StringPrototypeIncludes = uncurryThis(String.prototype.includes)
const StringPrototypeIndexOf = uncurryThis(String.prototype.indexOf)
const StringPrototypeItalics = uncurryThis(String.prototype.italics)
const StringPrototypeLastIndexOf = uncurryThis(
  String.prototype.lastIndexOf
)
const StringPrototypeLink = uncurryThis(String.prototype.link)
const StringPrototypeLocaleCompare = uncurryThis(
  String.prototype.localeCompare
)
const StringPrototypeMatch = uncurryThis(String.prototype.match)
const StringPrototypeMatchAll = uncurryThis(String.prototype.matchAll)
const StringPrototypeNormalize = uncurryThis(String.prototype.normalize)
const StringPrototypePadEnd = uncurryThis(String.prototype.padEnd)
const StringPrototypePadStart = uncurryThis(String.prototype.padStart)
const StringPrototypeRepeat = uncurryThis(String.prototype.repeat)
const StringPrototypeReplace = uncurryThis(String.prototype.replace)
const StringPrototypeSearch = uncurryThis(String.prototype.search)
const StringPrototypeSlice = uncurryThis(String.prototype.slice)
const StringPrototypeSmall = uncurryThis(String.prototype.small)
const StringPrototypeSplit = uncurryThis(String.prototype.split)
const StringPrototypeStrike = uncurryThis(String.prototype.strike)
const StringPrototypeSub = uncurryThis(String.prototype.sub)
const StringPrototypeSubstr = uncurryThis(String.prototype.substr)
const StringPrototypeSubstring = uncurryThis(String.prototype.substring)
const StringPrototypeSup = uncurryThis(String.prototype.sup)
const StringPrototypeStartsWith = uncurryThis(String.prototype.startsWith)
const StringPrototypeToString = uncurryThis(String.prototype.toString)
const StringPrototypeTrim = uncurryThis(String.prototype.trim)
const StringPrototypeTrimStart = uncurryThis(String.prototype.trimStart)
const StringPrototypeTrimLeft = uncurryThis(String.prototype.trimLeft)
const StringPrototypeTrimEnd = uncurryThis(String.prototype.trimEnd)
const StringPrototypeTrimRight = uncurryThis(String.prototype.trimRight)
const StringPrototypeToLocaleLowerCase = uncurryThis(
  String.prototype.toLocaleLowerCase
)
const StringPrototypeToLocaleUpperCase = uncurryThis(
  String.prototype.toLocaleUpperCase
)
const StringPrototypeToLowerCase = uncurryThis(
  String.prototype.toLowerCase
)
const StringPrototypeToUpperCase = uncurryThis(
  String.prototype.toUpperCase
)
const StringPrototypeValueOf = uncurryThis(String.prototype.valueOf)
const StringPrototypeReplaceAll = uncurryThis(String.prototype.replaceAll)

const SymbolLength = Symbol.length
const SymbolName = Symbol.name
const SymbolPrototype = cloneSafe(Symbol.prototype)
const SymbolFor = Symbol.for
const SymbolKeyFor = Symbol.keyFor
const SymbolAsyncIterator = Symbol.asyncIterator
const SymbolHasInstance = Symbol.hasInstance
const SymbolIsConcatSpreadable = Symbol.isConcatSpreadable
const SymbolIterator = Symbol.iterator
const SymbolMatch = Symbol.match
const SymbolMatchAll = Symbol.matchAll
const SymbolReplace = Symbol.replace
const SymbolSearch = Symbol.search
const SymbolSpecies = Symbol.species
const SymbolSplit = Symbol.split
const SymbolToPrimitive = Symbol.toPrimitive
const SymbolToStringTag = Symbol.toStringTag
const SymbolUnscopables = Symbol.unscopables
const SymbolPrototypeToString = uncurryThis(Symbol.prototype.toString)
const SymbolPrototypeValueOf = uncurryThis(Symbol.prototype.valueOf)
const SymbolPrototypeSymbolToPrimitive = uncurryMethod(
  Symbol.prototype,
  Symbol.toPrimitive
)
const SymbolPrototypeGetDescription = uncurryGetter(
  Symbol.prototype,
  'description'
)

const SyntaxErrorLength = SyntaxError.length
const SyntaxErrorName = SyntaxError.name
const SyntaxErrorPrototype = cloneSafe(SyntaxError.prototype)

const TypedArrayPrototypeGetBuffer = uncurryGetter(
  TypedArrayPrototype,
  'buffer'
)
const TypedArrayPrototypeGetByteLength = uncurryGetter(
  TypedArrayPrototype,
  'byteLength'
)
const TypedArrayPrototypeGetByteOffset = uncurryGetter(
  TypedArrayPrototype,
  'byteOffset'
)
const TypedArrayPrototypeGetLength = uncurryGetter(
  TypedArrayPrototype,
  'length'
)

const TypeErrorLength = TypeError.length
const TypeErrorName = TypeError.name
const TypeErrorPrototype = cloneSafe(TypeError.prototype)

const URIErrorLength = URIError.length
const URIErrorName = URIError.name
const URIErrorPrototype = cloneSafe(URIError.prototype)

const URLCreateObjectURL = staticCall(URL.createObjectURL)
const URLRevokeObjectURL = staticCall(URL.revokeObjectURL)

const Uint16ArrayLength = Uint16Array.length
const Uint16ArrayName = Uint16Array.name
const Uint16ArrayPrototype = cloneSafe(Uint16Array.prototype)
const Uint16ArrayBYTES_PER_ELEMENT = Uint16Array.BYTES_PER_ELEMENT

const Uint32ArrayLength = Uint32Array.length
const Uint32ArrayName = Uint32Array.name
const Uint32ArrayPrototype = cloneSafe(Uint32Array.prototype)
const Uint32ArrayBYTES_PER_ELEMENT = Uint32Array.BYTES_PER_ELEMENT

const Uint8ArrayLength = Uint8Array.length
const Uint8ArrayName = Uint8Array.name
const Uint8ArrayPrototype = cloneSafe(Uint8Array.prototype)
const Uint8ArrayBYTES_PER_ELEMENT = Uint8Array.BYTES_PER_ELEMENT

const Uint8ClampedArrayLength = Uint8ClampedArray.length
const Uint8ClampedArrayName = Uint8ClampedArray.name
const Uint8ClampedArrayPrototype = cloneSafe(Uint8ClampedArray.prototype)
const Uint8ClampedArrayBYTES_PER_ELEMENT =
  Uint8ClampedArray.BYTES_PER_ELEMENT

const WeakMapLength = WeakMap.length
const WeakMapName = WeakMap.name
const WeakMapPrototype = cloneSafe(WeakMap.prototype)
const WeakMapPrototypeDelete = uncurryThis(WeakMap.prototype.delete)
const WeakMapPrototypeGet = uncurryThis(WeakMap.prototype.get)
const WeakMapPrototypeSet = uncurryThis(WeakMap.prototype.set)
const WeakMapPrototypeHas = uncurryThis(WeakMap.prototype.has)

const WeakSetLength = WeakSet.length
const WeakSetName = WeakSet.name
const WeakSetPrototype = cloneSafe(WeakSet.prototype)
const WeakSetPrototypeDelete = uncurryThis(WeakSet.prototype.delete)
const WeakSetPrototypeHas = uncurryThis(WeakSet.prototype.has)
const WeakSetPrototypeAdd = uncurryThis(WeakSet.prototype.add)

const processCwd = staticCall(PROCESS.cwd)
const processArgv = [...PROCESS.argv]
const processExecArgv = [...PROCESS.execArgv]
const processExecPath = String(PROCESS.execPath)
const processEnv = new Proxy(ogProcess.env, {
  get: (_: any, k: string) => ogProcess.env[k],
  set: (_: any, k: string, v: any) => {
    ogProcess.env[k] = v
    return true
  },
  deleteProperty: (_: any, k: string) => {
    delete ogProcess.env[k]
    return true
  },
})
const processArgv0 = String(PROCESS.argv0)
const processPid = Number(PROCESS.pid)
const processPpid = Number(PROCESS.ppid)
const processTitle = String(PROCESS.title)
const processVersion = String(PROCESS.version)
// TODO: test when process is clobbered, that this all still works kinda
/* c8 ignore start */
const processVersions = Object.freeze(cloneSafe(PROCESS.versions || {}))
const processArch = String(PROCESS.arch)
const processPlatform = String(PROCESS.platform)
const processRelease = Object.freeze(cloneSafe(PROCESS.release || {}))
const processModuleLoadList = Object.freeze([
  ...(PROCESS.moduleLoadList || []).map(s => String(s)),
])
/* c8 ignore stop */
const processFeatures = Object.freeze(cloneSafe(PROCESS.features))
const processNextTick = staticCall(PROCESS.nextTick)
const processAbort = staticCall(PROCESS.abort)
const processUmask = staticCall(PROCESS.umask)
const processsInitgroups = maybeStaticCall(PROCESS.initgroups)
const processSetgroups = maybeStaticCall(PROCESS.setgroups)
const processSetuid = maybeStaticCall(PROCESS.setuid)
const processSetgid = maybeStaticCall(PROCESS.setgid)
const processSeteuid = maybeStaticCall(PROCESS.seteuid)
const processSetegid = maybeStaticCall(PROCESS.setegid)
const processSetSourceMapsEnabled = maybeStaticCall(
  PROCESS.setSourceMapsEnabled
)
const processSetUncaughtExceptionCaptureCallback = staticCall(
  PROCESS.setUncaughtExceptionCaptureCallback
)
const processHasUncaughtExceptionCaptureCallback = staticCall(
  PROCESS.hasUncaughtExceptionCaptureCallback
)
const processEmitWarning = bind.bind(PROCESS.emitWarning, PROCESS)
const processDebugPort = Number(PROCESS.debugPort)

const PRIMORDIALS = OBJECT.defineProperties(
  OBJECT.assign(OBJECT.create(null) as {}, {
    // utilities
    applyBind,
    hardenRegExp,
    staticApply,
    uncurryThis,
    uncurryGetter,
    uncurryMethod,
    staticCall,
    maybeStaticCall,

    // globals
    globalThis: GLOBALTHIS,
    setImmediate,
    setTimeout,
    setInterval,
    clearTimeout,
    clearInterval,
    decodeURI,
    decodeURIComponent,
    encodeURI,
    encodeURIComponent,
    escape,
    unescape,

    AggregateError,
    AggregateErrorLength,
    AggregateErrorName,
    AggregateErrorPrototype,

    Array,
    ArrayFrom,
    ArrayIsArray,
    ArrayLength,
    ArrayName,
    ArrayOf,
    ArrayPrototype,
    ArrayPrototypeConcat,
    ArrayPrototypeCopyWithin,
    ArrayPrototypeEntries,
    ArrayPrototypeEvery,
    ArrayPrototypeFill,
    ArrayPrototypeFilter,
    ArrayPrototypeFind,
    ArrayPrototypeFindIndex,
    ArrayPrototypeFlat,
    ArrayPrototypeFlatMap,
    ArrayPrototypeForEach,
    ArrayPrototypeIncludes,
    ArrayPrototypeIndexOf,
    ArrayPrototypeJoin,
    ArrayPrototypeKeys,
    ArrayPrototypeLastIndexOf,
    ArrayPrototypeMap,
    ArrayPrototypePop,
    ArrayPrototypePush,
    ArrayPrototypePushApply,
    ArrayPrototypeReduce,
    ArrayPrototypeReduceRight,
    ArrayPrototypeReverse,
    ArrayPrototypeShift,
    ArrayPrototypeSlice,
    ArrayPrototypeSome,
    ArrayPrototypeSort,
    ArrayPrototypeSplice,
    ArrayPrototypeSymbolIterator,
    ArrayPrototypeToLocaleString,
    ArrayPrototypeToString,
    ArrayPrototypeUnshift,
    ArrayPrototypeUnshiftApply,
    ArrayPrototypeValues,

    BigInt,
    BigIntAsIntN,
    BigIntAsUintN,
    BigIntLength,
    BigIntName,
    BigIntPrototype,
    BigIntPrototypeToLocaleString,
    BigIntPrototypeToString,
    BigIntPrototypeValueOf,

    BigInt64Array,
    BigInt64ArrayBYTES_PER_ELEMENT,
    BigInt64ArrayLength,
    BigInt64ArrayName,
    BigInt64ArrayPrototype,

    BigUint64Array,
    BigUint64ArrayBYTES_PER_ELEMENT,
    BigUint64ArrayLength,
    BigUint64ArrayName,
    BigUint64ArrayPrototype,

    Boolean,
    BooleanLength,
    BooleanName,
    BooleanPrototype,
    BooleanPrototypeToString,
    BooleanPrototypeValueOf,

    DataView,
    DataViewLength,
    DataViewName,
    DataViewPrototype,
    DataViewPrototypeGetBigInt64,
    DataViewPrototypeGetBuffer,
    DataViewPrototypeGetByteLength,
    DataViewPrototypeGetByteOffset,
    DataViewPrototypeGetFloat32,
    DataViewPrototypeGetFloat64,
    DataViewPrototypeGetInt16,
    DataViewPrototypeGetInt32,
    DataViewPrototypeGetInt8,
    DataViewPrototypeGetUint16,
    DataViewPrototypeGetUint32,
    DataViewPrototypeGetUint8,
    DataViewPrototypeSetBigInt64,
    DataViewPrototypeSetBigUint64,
    DataViewPrototypeSetFloat32,
    DataViewPrototypeSetFloat64,
    DataViewPrototypeSetInt16,
    DataViewPrototypeSetInt32,
    DataViewPrototypeSetInt8,
    DataViewPrototypeSetUint16,
    DataViewPrototypeSetUint32,
    DataViewPrototypeSetUint8,
    DataViewPrototypeGetBigUint64,

    Error,
    ErrorCaptureStackTrace,
    ErrorLength,
    ErrorName,
    ErrorPrototype,
    ErrorPrototypeToString,

    EvalError,
    EvalErrorLength,
    EvalErrorName,
    EvalErrorPrototype,

    Float32Array,
    Float32ArrayBYTES_PER_ELEMENT,
    Float32ArrayLength,
    Float32ArrayName,
    Float32ArrayPrototype,

    Float64Array,
    Float64ArrayBYTES_PER_ELEMENT,
    Float64ArrayLength,
    Float64ArrayName,
    Float64ArrayPrototype,

    Function,
    FunctionLength,
    FunctionName,
    FunctionPrototype,
    FunctionPrototypeApply,
    FunctionPrototypeBind,
    FunctionPrototypeCall,
    FunctionPrototypeToString,

    Int16Array,
    Int16ArrayBYTES_PER_ELEMENT,
    Int16ArrayLength,
    Int16ArrayName,
    Int16ArrayPrototype,

    Int32Array,
    Int32ArrayBYTES_PER_ELEMENT,
    Int32ArrayLength,
    Int32ArrayName,
    Int32ArrayPrototype,

    Int8Array,
    Int8ArrayLength,
    Int8ArrayName,
    Int8ArrayPrototype,
    Int8ArrayBYTES_PER_ELEMENT,

    JSON,
    JSONParse,
    JSONStringify,

    Map,
    MapLength,
    MapName,
    MapPrototype,
    MapPrototypeGet,
    MapPrototypeSet,
    MapPrototypeHas,
    MapPrototypeDelete,
    MapPrototypeClear,
    MapPrototypeEntries,
    MapPrototypeForEach,
    MapPrototypeKeys,
    MapPrototypeValues,
    MapPrototypeGetSize,

    Math,
    MathAbs,
    MathAcos,
    MathAcosh,
    MathAsin,
    MathAsinh,
    MathAtan2,
    MathAtan,
    MathAtanh,
    MathCbrt,
    MathCeil,
    MathClz32,
    MathCos,
    MathCosh,
    MathE,
    MathExp,
    MathExpm1,
    MathFloor,
    MathFround,
    MathHypot,
    MathImul,
    MathLN10,
    MathLN2,
    MathLOG10E,
    MathLOG2E,
    MathLog10,
    MathLog1p,
    MathLog2,
    MathLog,
    MathMax,
    MathMaxApply,
    MathMin,
    MathPI,
    MathPow,
    MathRandom,
    MathRound,
    MathSQRT1_2,
    MathSQRT2,
    MathSign,
    MathSin,
    MathSinh,
    MathSqrt,
    MathTan,
    MathTanh,
    MathTrunc,

    Number,
    NumberEPSILON,
    NumberIsFinite,
    NumberIsInteger,
    NumberIsNaN,
    NumberIsSafeInteger,
    NumberLength,
    NumberMAX_SAFE_INTEGER,
    NumberMAX_VALUE,
    NumberMIN_SAFE_INTEGER,
    NumberMIN_VALUE,
    NumberNEGATIVE_INFINITY,
    NumberNaN,
    NumberName,
    NumberPOSITIVE_INFINITY,
    NumberParseFloat,
    NumberParseInt,
    NumberPrototype,
    NumberPrototypeToExponential,
    NumberPrototypeToFixed,
    NumberPrototypeToLocaleString,
    NumberPrototypeToPrecision,
    NumberPrototypeToString,
    NumberPrototypeValueOf,

    Object,
    ObjectLength,
    ObjectName,
    ObjectPrototype,
    ObjectAssign,
    ObjectGetOwnPropertyDescriptor,
    ObjectGetOwnPropertyDescriptors,
    ObjectGetOwnPropertyNames,
    ObjectGetOwnPropertySymbols,
    ObjectIs,
    ObjectPreventExtensions,
    ObjectSeal,
    ObjectCreate,
    ObjectDefineProperties,
    ObjectDefineProperty,
    ObjectFreeze,
    ObjectGetPrototypeOf,
    ObjectSetPrototypeOf,
    ObjectIsExtensible,
    ObjectIsFrozen,
    ObjectIsSealed,
    ObjectKeys,
    ObjectEntries,
    ObjectFromEntries,
    ObjectValues,
    ObjectPrototype__defineGetter__,
    ObjectPrototype__defineSetter__,
    ObjectPrototypeHasOwnProperty,
    ObjectPrototype__lookupGetter__,
    ObjectPrototype__lookupSetter__,
    ObjectPrototypeIsPrototypeOf,
    ObjectPrototypePropertyIsEnumerable,
    ObjectPrototypeToString,
    ObjectPrototypeValueOf,
    ObjectPrototypeToLocaleString,

    Promise,
    PromiseAll,
    PromiseAllSettled,
    PromiseAny,
    PromiseLength,
    PromiseName,
    PromisePrototype,
    PromisePrototypeCatch,
    PromisePrototypeFinally,
    PromisePrototypeThen,
    PromiseRace,
    PromiseReject,
    PromiseResolve,

    Proxy,

    RangeError,
    RangeErrorLength,
    RangeErrorName,
    RangeErrorPrototype,

    ReferenceError,
    ReferenceErrorLength,
    ReferenceErrorName,
    ReferenceErrorPrototype,

    Reflect,
    ReflectApply,
    ReflectConstruct,
    ReflectDefineProperty,
    ReflectDeleteProperty,
    ReflectGet,
    ReflectGetOwnPropertyDescriptor,
    ReflectGetPrototypeOf,
    ReflectHas,
    ReflectIsExtensible,
    ReflectOwnKeys,
    ReflectPreventExtensions,
    ReflectSet,
    ReflectSetPrototypeOf,

    RegExp,
    RegExpLength,
    RegExpName,
    RegExpPrototype,
    RegExpPrototypeExec,
    RegExpPrototypeCompile,
    RegExpPrototypeToString,
    RegExpPrototypeTest,
    RegExpPrototypeGetDotAll,
    RegExpPrototypeGetFlags,
    RegExpPrototypeGetGlobal,
    RegExpPrototypeGetIgnoreCase,
    RegExpPrototypeGetMultiline,
    RegExpPrototypeGetSource,
    RegExpPrototypeGetSticky,
    RegExpPrototypeGetUnicode,

    Set,
    SetLength,
    SetName,
    SetPrototype,
    SetPrototypeHas,
    SetPrototypeAdd,
    SetPrototypeDelete,
    SetPrototypeClear,
    SetPrototypeEntries,
    SetPrototypeForEach,
    SetPrototypeValues,
    SetPrototypeKeys,
    SetPrototypeGetSize,

    String,
    StringLength,
    StringName,
    StringPrototype,
    StringFromCharCode,
    StringFromCharCodeApply,
    StringFromCodePoint,
    StringFromCodePointApply,
    StringRaw,
    StringPrototypeAnchor,
    StringPrototypeBig,
    StringPrototypeBlink,
    StringPrototypeBold,
    StringPrototypeCharAt,
    StringPrototypeCharCodeAt,
    StringPrototypeCodePointAt,
    StringPrototypeConcat,
    StringPrototypeEndsWith,
    StringPrototypeFontcolor,
    StringPrototypeFontsize,
    StringPrototypeFixed,
    StringPrototypeIncludes,
    StringPrototypeIndexOf,
    StringPrototypeItalics,
    StringPrototypeLastIndexOf,
    StringPrototypeLink,
    StringPrototypeLocaleCompare,
    StringPrototypeMatch,
    StringPrototypeMatchAll,
    StringPrototypeNormalize,
    StringPrototypePadEnd,
    StringPrototypePadStart,
    StringPrototypeRepeat,
    StringPrototypeReplace,
    StringPrototypeSearch,
    StringPrototypeSlice,
    StringPrototypeSmall,
    StringPrototypeSplit,
    StringPrototypeStrike,
    StringPrototypeSub,
    StringPrototypeSubstr,
    StringPrototypeSubstring,
    StringPrototypeSup,
    StringPrototypeStartsWith,
    StringPrototypeToString,
    StringPrototypeTrim,
    StringPrototypeTrimStart,
    StringPrototypeTrimLeft,
    StringPrototypeTrimEnd,
    StringPrototypeTrimRight,
    StringPrototypeToLocaleLowerCase,
    StringPrototypeToLocaleUpperCase,
    StringPrototypeToLowerCase,
    StringPrototypeToUpperCase,
    StringPrototypeValueOf,
    StringPrototypeReplaceAll,

    Symbol,
    SymbolLength,
    SymbolName,
    SymbolPrototype,
    SymbolFor,
    SymbolKeyFor,
    SymbolAsyncIterator,
    SymbolHasInstance,
    SymbolIsConcatSpreadable,
    SymbolIterator,
    SymbolMatch,
    SymbolMatchAll,
    SymbolReplace,
    SymbolSearch,
    SymbolSpecies,
    SymbolSplit,
    SymbolToPrimitive,
    SymbolToStringTag,
    SymbolUnscopables,
    SymbolPrototypeToString,
    SymbolPrototypeValueOf,
    SymbolPrototypeSymbolToPrimitive,
    SymbolPrototypeGetDescription,

    SyntaxError,
    SyntaxErrorLength,
    SyntaxErrorName,
    SyntaxErrorPrototype,

    TypedArrayOf,
    TypedArrayOfApply,
    TypedArrayFrom,
    TypedArrayPrototype,
    TypedArrayPrototypeGetSymbolToStringTag,
    TypedArrayPrototypeGetBuffer,
    TypedArrayPrototypeGetByteLength,
    TypedArrayPrototypeGetByteOffset,
    TypedArrayPrototypeGetLength,

    TypeError,
    TypeErrorLength,
    TypeErrorName,
    TypeErrorPrototype,

    URIError,
    URIErrorLength,
    URIErrorName,
    URIErrorPrototype,

    URL,
    URLCreateObjectURL,
    URLRevokeObjectURL,

    Uint16Array,
    Uint16ArrayLength,
    Uint16ArrayName,
    Uint16ArrayPrototype,
    Uint16ArrayBYTES_PER_ELEMENT,

    Uint32Array,
    Uint32ArrayLength,
    Uint32ArrayName,
    Uint32ArrayPrototype,
    Uint32ArrayBYTES_PER_ELEMENT,

    Uint8Array,
    Uint8ArrayLength,
    Uint8ArrayName,
    Uint8ArrayPrototype,
    Uint8ArrayBYTES_PER_ELEMENT,

    Uint8ClampedArray,
    Uint8ClampedArrayLength,
    Uint8ClampedArrayName,
    Uint8ClampedArrayPrototype,
    Uint8ClampedArrayBYTES_PER_ELEMENT,

    WeakMap,
    WeakMapLength,
    WeakMapName,
    WeakMapPrototype,
    WeakMapPrototypeDelete,
    WeakMapPrototypeGet,
    WeakMapPrototypeSet,
    WeakMapPrototypeHas,

    WeakSet,
    WeakSetLength,
    WeakSetName,
    WeakSetPrototype,
    WeakSetPrototypeDelete,
    WeakSetPrototypeHas,
    WeakSetPrototypeAdd,

    //////
    // bonus: node core doesn't need to harden these, since it has internal
    // references to them, but it's very handy when dealing with scenarios
    // where process might get clobbered, as in tests and such.
    process: PROCESS,
    processCwd,
    processArgv,
    processExecArgv,
    processExecPath,
    processEnv,
    processArgv0,
    processPid,
    processPpid,
    processTitle,
    processVersion,
    processVersions,
    processArch,
    processPlatform,
    processRelease,
    processModuleLoadList,
    processFeatures,
    processNextTick,
    processAbort,
    processUmask,
    processsInitgroups,
    processSetgroups,
    processSetuid,
    processSetgid,
    processSeteuid,
    processSetegid,
    processSetSourceMapsEnabled,
    processSetUncaughtExceptionCaptureCallback,
    processHasUncaughtExceptionCaptureCallback,
    processEmitWarning,
    processDebugPort,
  }),
  {
    // This is implemented as a setter/getter so that setting it will
    // actually take effect on the Error object, even if someone clobbered
    // Error.stackTraceLimit with a sneaky getter/setter. Of course, if
    // they've made it configurable:false, we're still hosed.
    ErrorStackTraceLimit: {
      enumerable: true,
      get: () =>
        SafeReflect.getOwnPropertyDescriptor(Error, 'stackTraceLimit')
          ?.value,
      set: (value: number) => {
        SafeReflect.defineProperty(Error, 'stackTraceLimit', {
          value,
          enumerable: true,
          writable: true,
          configurable: true,
        })
      },
    },

    processReport: {
      enumerable: true,
      get: () => uncurryGetter(PROCESS, 'report')(PROCESS),
    },

    processExitCode: {
      enumerable: true,
      get: () =>
        SafeReflect.getOwnPropertyDescriptor(ogProcess, 'exitCode')?.value,
      set: (value: number | undefined) => {
        SafeReflect.defineProperty(ogProcess, 'exitCode', {
          value,
          enumerable: true,
          writable: true,
          configurable: true,
        })
      },
    },

    processStdin: {
      enumerable: true,
      get: () => uncurryGetter(ogProcess, 'stdin')(ogProcess),
    },

    processStdout: {
      enumerable: true,
      get: () => uncurryGetter(PROCESS, 'stdout')(PROCESS),
    },

    processStderr: {
      enumerable: true,
      get: () => uncurryGetter(PROCESS, 'stderr')(PROCESS),
    },

    processAllowedNodeEnvironmentFlags: {
      enumerable: true,
      get: () =>
        uncurryGetter(PROCESS, 'allowedNodeEnvironmentFlags')(PROCESS),
    },
  }
)

SafeObject.freeze(PRIMORDIALS)
export const primordials = PRIMORDIALS as typeof PRIMORDIALS & {
  ErrorStackTraceLimit: number
  processReport: NodeJS.Process['report']
  processExitCode: NodeJS.Process['exitCode']
  processStdin: NodeJS.Process['stdin']
  processStdout: NodeJS.Process['stdout']
  processStderr: NodeJS.Process['stderr']
  processAllowedNodeEnvironmentFlags: NodeJS.Process['allowedNodeEnvironmentFlags']
}
