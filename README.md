# Rust-TypeScript Bindings Example

A minimal example showing how to call Rust functions from TypeScript using FFI.

## What it does

- **Rust side**: Exports simple functions via C ABI (`add`, `multiply`, `greet`)
- **TypeScript side**: Uses `ffi-napi` to call the Rust functions

## How to run

```bash
# Install dependencies
npm install

# Build and run
npm start
```

## How it works

1. Rust code in `src/lib.rs` exports functions with `#[no_mangle]` and `extern "C"`
2. `Cargo.toml` configures the crate as a dynamic library (`cdylib`)
3. TypeScript bindings in `src/bindings.ts` use `ffi-napi` to load the compiled library
4. The example in `src/index.ts` demonstrates calling the Rust functions

## Files

- `src/lib.rs` - Rust library with exported functions
- `src/bindings.ts` - TypeScript FFI bindings
- `src/index.ts` - Example usage
- `Cargo.toml` - Rust package configuration
- `package.json` - Node.js package configuration
