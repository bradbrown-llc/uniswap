import { assert } from "https://deno.land/std@0.224.0/assert/assert.ts";
import { WETH9 } from "../../WETH9.ts";

Deno.test('WETH9 object and bytecode test', () => {
    assert(WETH9 && WETH9.bytecode)
    console.log(WETH9.bytecode)
})