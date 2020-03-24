import { front, prodFront } from '../../config';

function extractURL(url) {
  const first = url.split('https://')[1];
  const second = first.split('.myshopify')[0];
  return second;
}

export async function placeCustomOrder(
  cart,
  id,
  updateOrderFunc,
  channelsData
) {
  const url = extractURL(JSON.parse(cart).webUrl);

  const { settings } = channelsData.channels.filter(
    channel =>
      channel.type === 'SHOPIFY' &&
      channel.settings &&
      channel.settings.shopURL === url
  )[0];

  //   if (settings.url && settings.secret) {
  try {
    const cartObj = JSON.parse(cart);
    cartObj.pId = id;
    const cartJson = JSON.stringify(cartObj);
    const response = await fetch(
      `${
        process.env.NODE_ENV === 'development' ? front : prodFront
      }/api/shopify/purchase?url=${settings.shopURL}&admin=${settings.secret}`,
      {
        credentials: 'same-origin',
        mode: 'cors',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
          'X-Requested-With': 'Fetch',
        },
        body: cartJson,
      }
    );
    const res = await response.json();
    console.log(res);
    // console.log("response received");
    const update = await updateOrderFunc({
      variables: {
        id,
        customCheckout: res,
        processed: 'TRUE',
      },
    }).then(function(data) {
      // console.log(data, "after update");
      // forceUpdate();
    });
    // console.log("first2", res);
  } catch (e) {
    console.log('error', e);
  }
  //   }
}
