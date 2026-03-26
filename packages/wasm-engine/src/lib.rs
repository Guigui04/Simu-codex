use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn generate_world(seed: u32, width: u32, height: u32) -> Vec<u8> {
    let mut out = Vec::with_capacity((width * height) as usize);
    for y in 0..height {
        for x in 0..width {
            let value = ((x.wrapping_mul(31) ^ y.wrapping_mul(17) ^ seed) % 255) as u8;
            out.push(value);
        }
    }
    out
}
