import fetch from 'isomorphic-unfetch';

export default (req, res) => {
  try {
    fetch(
      `https://api.zinc.io/v1/search?query=${
        req.query.query
      }&page=1&retailer=amazon`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(`${req.query.token}:`).toString(
            'base64'
          )}`,
        },
      }
    )
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
        if (response.status === 403) {
          throw Error('403 Forbidden - Check client token');
        }
        if (response.status === 503) {
          throw Error('503 Service Unavailable - Rate Limit Exceeded');
        }
      })
      .then(response => {
        res.status(200).json(response.results);
      })
      .catch(error => {
        res.status(200).json(error);
      });
  } catch (e) {
    console.error(`Error getResults:${e}`);
  }
};
