import { Docker } from 'https://cdn.jsdelivr.net/gh/bradbrown-llc/Docker@0.0.2/mod.ts'
import * as Solc from 'https://cdn.jsdelivr.net/gh/bradbrown-llc/Solc@0.0.7/mod.ts'

const rawCompilationResults = await Docker.exec('bradthomasbrown/nonfungiblepositionmanager:1.0')
const compilationResults = Solc.schemas.solcCompilationOutput.parse(JSON.parse(rawCompilationResults))
const bytecode = compilationResults.contracts!['NonfungiblePositionManager.sol']!['NonfungiblePositionManager']!.evm!.bytecode!.object!
export const NonfungiblePositionManager = { bytecode }