use std::ffi::{CStr, CString};
use std::os::raw::c_char;

/// Add two numbers
#[no_mangle]
pub extern "C" fn add(a: i32, b: i32) -> i32 {
    a + b
}

/// Multiply two numbers
#[no_mangle]
pub extern "C" fn multiply(a: i32, b: i32) -> i32 {
    a * b
}

/// Greet someone by name
#[no_mangle]
pub extern "C" fn greet(name: *const c_char) -> *mut c_char {
    let c_str = unsafe { CStr::from_ptr(name) };
    let name_str = c_str.to_str().unwrap_or("World");
    let greeting = format!("Hello, {}! Greetings from Rust!", name_str);
    CString::new(greeting).unwrap().into_raw()
}

/// Free string memory allocated by Rust
#[no_mangle]
pub extern "C" fn free_string(s: *mut c_char) {
    unsafe {
        if !s.is_null() {
            let _ = CString::from_raw(s);
        }
    }
}
