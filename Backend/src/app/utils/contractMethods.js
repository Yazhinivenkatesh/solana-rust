const {
  Connection,
  PublicKey,
  Wallet,
  Transaction,
  sendAndConfirmTransaction,
} = require("@solana/web3.js");
const { wallet, connection } = require("./constants");

const contractMethod = {
  fetchVote: ,
  fetchVoteTopics,
  fetchAllVotesAndTopics,
  fetchVotesForSingleTopic,
  addVoteTopic,
  addVoteTopic,
};

// Construct a transaction to call the methods of the smart contract
const createTransaction = (method) =>
  new Transaction().add(
    contractMethod[method]
  );

exports.signAndConfirmTransaction = async (method) => {
  try {
    const transaction = createTransaction(method);
    // Sign and send the transaction
    const signature = await sendAndConfirmTransaction(connection, transaction, [
      wallet,
    ]);
    
    return signature;
  } catch (error) {}

  console.log("Transaction Signature:", signature);
};
