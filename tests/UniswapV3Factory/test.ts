import { assert } from "https://deno.land/std@0.224.0/assert/assert.ts";
import { UniswapV3Factory } from "../../UniswapV3Factory.ts";

Deno.test('UniswapV3Factory object and properties test', () => {
    assert(
        UniswapV3Factory
        && UniswapV3Factory.bytecode
        && UniswapV3Factory.poolInitCodeHash
    )
    console.log(UniswapV3Factory)
})