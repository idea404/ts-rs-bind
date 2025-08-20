import * as koffi from 'koffi';
import * as path from 'path';

// Determine the library path based on the platform
const libPath = process.platform === 'darwin' 
  ? path.join(__dirname, '../target/release/libts_rs_bind.dylib')
  : process.platform === 'win32'
  ? path.join(__dirname, '../target/release/ts_rs_bind.dll')
  : path.join(__dirname, '../target/release/libts_rs_bind.so');

// Load the dynamic library
const lib = koffi.load(libPath);

// Define the function prototypes
const add = lib.func('add', 'int', ['int', 'int']);
const multiply = lib.func('multiply', 'int', ['int', 'int']);
const greet = lib.func('greet', 'str', ['str']);

export class RustBindings {
  /**
   * Add two numbers
   */
  static add(a: number, b: number): number {
    return add(a, b);
  }

  /**
   * Multiply two numbers
   */
  static multiply(a: number, b: number): number {
    return multiply(a, b);
  }

  /**
   * Greet someone by name
   */
  static greet(name: string): string {
    return greet(name);
  }
}
