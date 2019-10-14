import fetch from 'isomorphic-unfetch';

export default async (req, res) => {
  console.log('committed');

  async function _request(method, path, data, auth) {
    console.log(data);
    const reqOptions = {
      method,
      body: JSON.stringify(data),
      headers: {
        Authorization: auth,
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    };

    const response = await fetch(path, reqOptions);
    const people = await response.json();
    console.log('second', people);
    res.status(200).send(people);
  }

  try {
    await _request(
      'POST',
      `https://api.zinc.io/v1/orders`,
      req.body.data,
      `Basic ${Buffer.from(`${req.query.token}:`).toString('base64')}`
    );
  } catch (e) {
    console.error(`Error getResults:${e}`);
  }
};
