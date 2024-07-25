import { assert } from "https://deno.land/std@0.224.0/assert/assert.ts";
import { UniswapV2Factory } from "../../UniswapV2Factory.ts";

Deno.test('WETH9 object and properties test', () => {
    assert(
        UniswapV2Factory
        && UniswapV2Factory.bytecode
        && UniswapV2Factory.pairInitCodeHash
    )
    console.log(UniswapV2Factory)
})