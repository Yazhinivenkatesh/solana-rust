const {
  fetchVote,
  fetchVoteTopics,
  fetchAllVotesAndTopics,
  fetchVotesForSingleTopic,
  addVoteTopic,
  castVote,
} = require("../services/vote.service");

exports.fetchVotes = (req, res) => {
  try {
    return res.success(res, fetchVote());
  } catch (err) {
    return res.sendError(res, err);
  }
};

exports.fetchVoteTopics = (req, res) => {
  try {
    return res.success(res, fetchVoteTopics());
  } catch (err) {
    return res.sendError(res, err);
  }
};

exports.fetchAllVotesAndTopics = (req, res) => {
  try {
    return res.success(res, fetchAllVotesAndTopics());
  } catch (err) {
    return res.sendError(res, err);
  }
};

exports.fetchVotesForSingleTopic = (req, res) => {
  try {
    return res.success(res, fetchVotesForSingleTopic(req.query.topic));
  } catch (err) {
    return res.sendError(res, err);
  }
};

exports.addVoteTopic = (req, res) => {
  try {
	console.log("add")
	const {title, description, options} = req.body
	const updatedOptions = options.map((option) => ({name: option, noOfVotes: 0}))
    return res.success(res, addVoteTopic({title, description, options: updatedOptions}));
  } catch (err) {
    return res.sendError(res, err);
  }
};

exports.castVote = (req, res) => {
  try {
	const {title, id, option} = req.body
	console.log(req.body)
    return res.success(res, castVote({title, id, vote:  option}));
  } catch (err) {
    return res.sendError(res, err);
  }
};
