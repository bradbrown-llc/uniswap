import { assert } from "https://deno.land/std@0.224.0/assert/assert.ts";
import { UniversalRouter } from "../../UniversalRouter.ts";

Deno.test('UniversalRouter object and properties test', () => {
    assert(UniversalRouter && UniversalRouter.bytecode)
    console.log(UniversalRouter)
})