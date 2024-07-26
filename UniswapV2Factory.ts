import { hexToBytes } from 'npm:@noble/hashes@1.3.3/utils'
import jsSha3 from 'npm:js-sha3@0.9.2'
const { keccak256 } = jsSha3
import { Docker } from 'https://cdn.jsdelivr.net/gh/bradbrown-llc/Docker@0.0.2/mod.ts'
import * as Solc from 'https://cdn.jsdelivr.net/gh/bradbrown-llc/solc@0.0.8/mod.ts'

const rawCompilationResults = await Docker.exec('bradthomasbrown/uniswapv2factory:1.0')
const compilationResults = Solc.schemas.solcCompilationOutput.parse(JSON.parse(rawCompilationResults))
const bytecode = compilationResults.contracts!['UniswapV2Factory.sol']!['UniswapV2Factory']!.evm!.bytecode!.object!
const pairInitCode = compilationResults.contracts!['UniswapV2Factory.sol']!['UniswapV2Pair']!.evm!.bytecode!.object!
const pairInitCodeHash = keccak256(hexToBytes(pairInitCode))
export const UniswapV2Factory = { bytecode, pairInitCodeHash }