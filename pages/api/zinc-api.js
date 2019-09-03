import fetch from 'isomorphic-unfetch';

export default (req, res) => {
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())
  //     .then(json => res.status(200).json(json));
  try {
    fetch(
      `https://api.zinc.io/v1/search?query=${
        req.query.search
      }&page=1&retailer=amazon`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(process.env.ZINC).toString(
            'base64'
          )}Og==`,
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
        // const {results} = this.state;
        // results[0] = this._processItems(res.results);
        // this.timeOne = performance.now();
        // this.setState({
        //   results,
        //   nextPageUrl: res.nextPage,
        //   ready: [true],
        //   timeElapsed: this.timeOne - this.timeZero,
        //   clientToken: token,
        // });
        // console.log(
        //   `Received first page of results. Query took: ${this.timeOne -
        //     this.timeZero}ms.`
        // );
      })
      .catch(error => {
        res.status(200).json(error);

        // console.error('Error:', error);
        // this.setState({
        //   lastPageReceived: 0,
        //   results: [],
        //   ready: [false],
        //   nextPageUrl: null,
        //   error,
        //   clientToken: null,
        // });
      });
  } catch (e) {
    console.error(`Error getResults:${e}`);
  }
};
