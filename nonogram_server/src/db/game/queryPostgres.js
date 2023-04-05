const { APP_ERROR_CODE, AppErrorBuilder } = require('../../libs/error');

async function insertGame(
  client,
  gameTitle,
  xCount,
  yCount,
  answers
) {
  await client.query(`
    INSERT INTO t_game (
      title, x_count, y_count, answers, create_time
    )
    VALUES (
      $1, $2, $3, $4, current_timestamp
    )
  `, [
      gameTitle, xCount, yCount, answers
    ]
  );
}

async function getGameList(client) {
  const result = await client.query(`
    SELECT
      id,
      title,
      x_count AS "xCount",
      y_count AS "yCount",
      answers
    FROM t_game
  `);

  return result.rows;
}

async function getGameDetail(client, gameId) {
  const result = await client.query(`
    SELECT
      id,
      title,
      x_count AS "xCount",
      y_count AS "yCount",
      answers
    FROM t_game
    WHERE id = $1
  `, [ gameId ]);

  if (result.rows.length === 0) {
    throw new AppErrorBuilder( APP_ERROR_CODE.APP_DATA_NOT_FOUND, 'game detail not found' );
  }

  return result.rows[0];
}

module.exports = {
  insertGame,
  getGameList,
  getGameDetail
}
