const {
  Transaction,
  TransactionInstruction,
  sendAndConfirmTransaction,
} = require("@solana/web3.js");

let topics = [
  {
    title: "Best Crypto Currency",
    description: "Use this poll to vote your favorite crypto currency in the market",
    id: 1,
    options: [
      {
        name: "BTC",
        noOfVotes: 5,
      },
      {
        name: "SOL",
        noOfVotes: 3,
      },
      {
        name: "ETH",
        noOfVotes: 5,
      },
      {
        name: "MATIC",
        noOfVotes: 4,
      },
    ],
  },
];

exports.fetchVote = () => topics;

exports.fetchVoteTopics = () => topics;

exports.fetchAllVotesAndTopics = () => [1, 2, 3, 4];

exports.fetchVotesForSingleTopic = () => [1, 2, 3, 4];

exports.addVoteTopic = (topic) => {
  topic.id = topics.length + 1;
  return topics.unshift(topic);
};

exports.castVote = ({id, vote}) => {
  const updatedTopics = topics.map((topic) => {
    if (id === topic.id) {
      const updatedTopic = topic.options.map((option) => {
        console.log(option.name, vote)
        if (option.name === vote) {
          return {
            name: option.name,
            noOfVotes: option.noOfVotes + 1,
          };
        } else {
          return option;
        }
      });
      console.log(updatedTopic)
      return {
        title: topic.title,
        id: topic.id,
        description: topic.description,
        options: updatedTopic,
      };
    } else {
      return topic;
    }
  });
  
  return topics;
};
