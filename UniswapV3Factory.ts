import { hexToBytes } from 'npm:@noble/hashes@1.3.3/utils'
import jsSha3 from 'npm:js-sha3@0.9.2'
const { keccak256 } = jsSha3
import { Docker } from 'https://cdn.jsdelivr.net/gh/bradbrown-llc/Docker@0.0.2/mod.ts'
import * as Solc from 'https://cdn.jsdelivr.net/gh/bradbrown-llc/Solc@0.0.7/mod.ts'

const rawCompilationResults = await Docker.exec('bradthomasbrown/uniswapv3factory:1.0')
const compilationResults = Solc.schemas.solcCompilationOutput.parse(JSON.parse(rawCompilationResults))
const bytecode = compilationResults.contracts!['UniswapV3Factory.sol']!['UniswapV3Factory']!.evm!.bytecode!.object!
const poolInitCode = compilationResults.contracts!['UniswapV3Pool.sol']!['UniswapV3Pool']!.evm!.bytecode!.object!
const poolInitCodeHash = keccak256(hexToBytes(poolInitCode))
export const UniswapV3Factory = { bytecode, poolInitCodeHash }