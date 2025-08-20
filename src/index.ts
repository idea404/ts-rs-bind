import { RustBindings } from './bindings';

console.log('🦀 Rust-TypeScript Bindings Demo 🦀\n');

// Test basic math functions
console.log('Testing basic math functions:');
console.log(`add(5, 3) = ${RustBindings.add(5, 3)}`);
console.log(`multiply(4, 7) = ${RustBindings.multiply(4, 7)}`);

// Test string function
console.log('\nTesting string function:');
console.log(`greet("TypeScript") = "${RustBindings.greet("TypeScript")}"`);
console.log(`greet("World") = "${RustBindings.greet("World")}"`);

console.log('\n✅ All tests completed successfully!');
