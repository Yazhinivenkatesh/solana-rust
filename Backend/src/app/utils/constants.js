const { frontend, contractAddress, privateKey } = require( "../../config/vars")
const { Connection, PublicKey, Keypair, clusterApiUrl } = require('@solana/web3.js');


module.exports = {
    corsOptions: {
        origin: [frontend],
        credentials: true,
      },
      web3Connection: new Connection(clusterApiUrl("devnet"), 'confirmed'),
      contractAddress: new PublicKey(contractAddress),
      // programId: new PublicKey(programId),
      // wallet: Keypair.fromSecretKey(privateKey),
      // programInterface: new PublicKey(program)
}