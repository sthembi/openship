import { front, prodFront } from '../../config';

export async function placeZincOrder(data, token, updateOrderFunc) {
  try {
    const response = await fetch(
      `${
        process.env.NODE_ENV === 'development' ? front : prodFront
      }/api/zinc/purchase?token=${token}`,
      {
        credentials: 'same-origin',
        mode: 'cors',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
          'X-Requested-With': 'Fetch',
        },
        body: JSON.stringify({
          data,
        }),
      }
    );
    const res = await response.json();
    const update = await updateOrderFunc({
      variables: {
        id: data.client_notes.os_order_id,
        zincCheckout: res,
        processed: 'TRUE',
      },
    });
    console.log('first2', res);
  } catch (e) {
    console.log('error', e);
  }
}
