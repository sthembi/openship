import fetch from 'isomorphic-unfetch';

export default async (req, res) => {
  console.log('hello');
  //   res.status(200).json([
  //     {
  //       id: '1',
  //       name: 'hello',
  //       height: '172',
  //       mass: '77',
  //       hair_color: 'blond',
  //       skin_color: 'fair',
  //       eye_color: 'blue',
  //       gender: 'male',
  //     },
  //   ]);

  async function _request(method, path, auth) {
    const reqOptions = {
      method,
      headers: {
        Authorization: auth,
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    // if (!_.isUndefined(data) && !_.isEmpty(data)) {
    //   data = JSON.stringify(data);
    //   reqOptions.body = data;
    // }

    const response = await fetch(path, reqOptions);
    const people = await response.json();
    console.log('second', people);
    res.status(200).send(people);
    // return fetch(path, reqOptions)
    //   .then(res => res.json())
    //   .then(json => json)
    //   .catch(err => {
    //     console.log(err);
    //     return { error: `error with fetch request!: ${err}` };
    //   });
  }

  //   await _request(
  //     'POST',
  //     `https://api.zinc.io/v1/orders`,
  //     JSON.parse(req.body),
  //     `Basic ${Buffer.from(`${req.query.token}:`).toString('base64')}`
  //   );

  try {
    await _request(
      'POST',
      `https://api.zinc.io/v1/orders`,
      //   JSON.parse(req.body),
      `Basic ${Buffer.from(`${req.query.token}:`).toString('base64')}`
    );
  } catch (e) {
    console.error(`Error getResults:${e}`);
  }
};
