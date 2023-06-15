import t from 'tap'
const PROC = process

//@ts-ignore
globalThis.process = null
import { primordials as p} from '../dist/cjs/index.js'
globalThis.process = PROC

t.equal(p.processCwd(), '.')
t.strictSame(p.processEnv, {})
