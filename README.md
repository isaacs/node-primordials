# node-primordials

A userland port of `node:lib/internal/per_context/primordials.js`

Specifically, this is an implementation of the type definitions
for the `primordials` namespace. It does provide some hardening,
which can be beneficial in some cases, but since it is possible
that this module will be loaded after other modules that modify
JavaScript built-ins, it should not be relied upon for serious
security guarantees.

Some primordials in Node.js have not been ported, especially
related to hardening of iterators, because they incur a much more
significant performance impact.

The various `XPrototypeConstructor` properties are not included,
because they're useless.  (Can't be called with `new` because
they're bound functions, but _must_ be called with `new` because
they're constructors.)
