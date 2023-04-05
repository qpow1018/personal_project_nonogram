const postgres = require('../../libs/db_postgres');
const query = require('./queryPostgres');

async function insertGame(
  gameTitle,
  xCount,
  yCount,
  answers
) {
  await postgres.defaultQuery(async function (client) {
    await query.insertGame(
      client,
      gameTitle,
      xCount,
      yCount,
      answers
    )
  });
}

async function getGameList() {
  return await postgres.defaultQuery(async function (client) {
    return await query.getGameList(client);
  });
}

async function getGameDetail(gameId) {
  return await postgres.defaultQuery(async function (client) {
    return await query.getGameDetail(client, gameId);
  });
}

module.exports = {
  insertGame,
  getGameList,
  getGameDetail
}