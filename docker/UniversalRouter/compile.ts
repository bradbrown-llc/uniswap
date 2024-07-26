import { Solc } from 'https://cdn.jsdelivr.net/gh/bradbrown-llc/solc@0.0.8/mod.ts'

const results = await Solc.compile('/settings.json', '/')
Deno.writeTextFileSync('results', JSON.stringify(results, undefined, 4))