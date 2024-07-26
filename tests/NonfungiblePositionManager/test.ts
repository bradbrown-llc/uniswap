import { assert } from "https://deno.land/std@0.224.0/assert/assert.ts";
import { NonfungiblePositionManager } from "../../NonfungiblePositionManager.ts";

Deno.test('NonfungiblePositionManager object and properties test', () => {
    assert(NonfungiblePositionManager && NonfungiblePositionManager.bytecode)
    console.log(NonfungiblePositionManager)
})