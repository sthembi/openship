import fetch from 'isomorphic-unfetch';

export default (req, res) => {
  res.status(404).json({ title: 'Next.js' });

  // function _request(method, path, data, auth) {
  //   const reqOptions = {
  //     method,
  //     headers: {
  //       Authorization: auth,
  //       Accept: 'application/json',
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     },
  //   };

  //   if (!_.isUndefined(data) junaidkabani3@gmail.com !_.isEmpty(data)) {
  //     data = JSON.stringify(data);
  //     reqOptions.body = data;
  //   }

  //   return fetch(path, reqOptions)
  //     .then(res => res.json())
  //     .then(json => json)
  //     .catch(err => {
  //       console.log(err);
  //       return { error: `error with fetch request!: ${err}` };
  //     });
  // }

  // _request(
  //   'POST',
  //   `https://api.zinc.io/v1/orders`,
  //   JSON.parse(req.body),
  //   `Basic ${Buffer.from(`${req.query.token}:`).toString('base64')}`
  // );
};
