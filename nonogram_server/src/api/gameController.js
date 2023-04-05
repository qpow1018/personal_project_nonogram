const checker = require('../libs/checker');
const gameDAO = require('../db/game/gameDAO');

module.exports.route = function ({ app, api }) {
  api.post('/api/game', insertGame);
  api.get('/api/game', getGameList);
  api.get('/api/game/:gameid', getGameDetail);
}

async function insertGame({ body }) {
  checker.checkRequiredString(body.gameTitle, body.answers);
  checker.checkRequiredPositiveInteger(body.xCount, body.yCount);

  await gameDAO.insertGame(
    body.gameTitle,
    body.xCount,
    body.yCount,
    body.answers
  );
}

async function getGameList() {
  return await gameDAO.getGameList();
}

async function getGameDetail({ params }) {
  const gameId = Number(params.gameid);

  checker.checkRequiredPositiveInteger(gameId);

  return await gameDAO.getGameDetail(gameId);
}