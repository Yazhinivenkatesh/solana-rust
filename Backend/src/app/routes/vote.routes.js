const authController = require('../controllers/vote.controller');

init = router => {

    router.get('/fetch-votes', authController.fetchVotes);
    router.post('/add-topic', authController.addVoteTopic);
    router.post('/cast-vote', authController.castVote);

}

module.exports.init = init;