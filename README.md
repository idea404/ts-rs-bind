# Rust-TypeScript Bindings Example

A minimal example showing how to call Rust functions from TypeScript using FFI.

## What it does

- **Rust side**: Exports simple functions via C ABI (`add`, `multiply`, `greet`)
- **TypeScript side**: Uses `koffi` to call the Rust functions

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
3. TypeScript bindings in `src/bindings.ts` use `koffi` to load the compiled library
4. The example in `src/index.ts` demonstrates calling the Rust functions

## Technical Details

### Using `extern "C"`

`extern "C"` specifies the **C ABI (Application Binary Interface)**, the calling convention and symbol naming rules:

- **Stable**: C ABI doesn't change between Rust versions (unlike Rust's native ABI)
- **Universal**: Every major language has tools to call C functions
- **Predictable**: Function names aren't mangled, symbols are `add` not `_ZN9my_crate3add17h1234567890abcdefE`

Without `extern "C"`, other languages can't reliably call Rust functions.

### Memory Management & `free_string`

When Rust returns strings to other languages, **ownership boundaries** create memory management issues:

```rust
// Rust allocates memory for the string
CString::new(greeting).unwrap().into_raw()  // Transfers ownership to caller
```

**The problem**: TypeScript/Node.js can't properly free Rust-allocated memory (memory leaks).

**Traditional solution**: Provide a `free_string` function so the caller can return memory to Rust for proper cleanup.

**This solution**: `koffi`'s `'str'` type automatically handles memory management (it copies the string and frees the original, eliminating the need for manual `free_string` calls).

## Files

- `src/lib.rs` - Rust library with exported functions
- `src/bindings.ts` - TypeScript FFI bindings
- `src/index.ts` - Example usage
- `Cargo.toml` - Rust package configuration
- `package.json` - Node.js package configuration
