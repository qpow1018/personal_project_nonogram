class APIService {
  async createGame(gameTitle, xCount, yCount, answers) {
    const url = 'http://localhost:30001/api/game';

    await axios({
      method: 'post',
      url: url,
      data: {
        gameTitle,
        xCount,
        yCount,
        answers: JSON.stringify(answers)
      }
    }).then((res) => {

    }).catch((error) => {
      throw new Error(error);
    });
  }

  async getGameList() {
    const url = 'http://localhost:30001/api/game';

    const data = await axios({
      method: 'get',
      url: url
    }).then((res) => {
      return res.data.items;

    }).catch((error) => {
      throw new Error(error);
    });

    return data;
  }

  async getGameDetail(gameId) {
    const url = `http://localhost:30001/api/game/${gameId}`;

    const data = await axios({
      method: 'get',
      url: url
    }).then((res) => {
      return res.data.item;

    }).catch((error) => {
      throw new Error(error);
    });

    return data;
  }
}