import { Solc } from 'https://cdn.jsdelivr.net/gh/bradbrown-llc/solc@0.0.6/mod.ts'

const results = await Solc.compile('/settings.json', '/')
Deno.writeTextFileSync('results', JSON.stringify(results, undefined, 4))