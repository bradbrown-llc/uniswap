import { assert } from "https://deno.land/std@0.224.0/assert/assert.ts";
import { NFTDescriptor } from "../../NFTDescriptor.ts";

Deno.test('NFTDescriptor object and properties test', () => {
    assert(NFTDescriptor && NFTDescriptor.bytecode)
    console.log(NFTDescriptor)
})