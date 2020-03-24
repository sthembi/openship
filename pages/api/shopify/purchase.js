import fetch from 'isomorphic-unfetch';

export default async (req, res) => {
  if (req.body) {
    const checkoutObj = req.body;
    // const { url, admin } = checkoutObj;
    const shippingInfo = checkoutObj.shippingAddress;
    const checkoutEmail = checkoutObj.email;
    const allShopItems = [];
    if (checkoutObj.lineItems.edges.length > 0) {
      for (let k = 0; k < checkoutObj.lineItems.edges.length; k++) {
        const shpVId = checkoutObj.lineItems.edges[k].node.variant.id;
        const shpVQty = checkoutObj.lineItems.edges[k].node.quantity;

        // Preparing order items array to place shopify order
        allShopItems.push({
          variantId: shpVId,
          quantity: shpVQty,
        });
      }
      const resp = await doShopifyOrder(
        allShopItems,
        shippingInfo,
        checkoutEmail
      );
      console.log(resp);
      res.status(200).send(resp);
    }
  }
  async function doShopifyOrder(shopItems, shippingInfo, email) {
    // const sp = 'osmarketplace.myshopify.com';
    const sp = `${req.query.url}.myshopify.com`;
    // const accessTk = 'ae5584ba3aa15573e072e228414a5d65';
    const accessTk = req.query.admin;

    const query = `
    mutation draftOrderCreate($input: DraftOrderInput!) {
        draftOrderCreate(input: $input) {
        draftOrder {
            id
        }
        userErrors {
            field
            message
        }
        }
    }
    `;
    const response = await fetch(`https://${sp}/admin/api/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': accessTk,
      },
      body: JSON.stringify({
        query,
        variables: {
          input: {
            email,
            note: 'Openship order placed',
            shippingAddress: {
              address1: shippingInfo.address1,
              address2: shippingInfo.address2,
              city: shippingInfo.city,
              countryCode: 'US',
              firstName: shippingInfo.firstName,
              lastName: shippingInfo.lastName,
              provinceCode: shippingInfo.provinceCode,
              zip: shippingInfo.zip,
              phone: shippingInfo.phone,
            },
            lineItems: shopItems,
            customAttributes: [{ key: 'prisma_order_id', value: req.body.pId }],
          },
        },
      }),
    })
      .then(response => response.json())
      .then(function(data) {
        const jsonData = JSON.stringify(data);
        const obj = JSON.parse(jsonData);
        if (typeof obj.errors !== 'undefined' && obj.errors.length > 0) {
          return obj.errors[0].message;
        }
        const markPaid = `mutation draftComplete($id: ID!,$paymentPending: Boolean){
            draftOrderComplete(id: $id, paymentPending: $paymentPending) {
                draftOrder { order { id } }
                userErrors { field message }
            }
            }`;
        return fetch(`https://${sp}/admin/api/graphql.json`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': accessTk,
          },
          body: JSON.stringify({
            query: markPaid,
            variables: {
              id: obj.data.draftOrderCreate.draftOrder.id,
              paymentPending: false,
            },
          }),
        })
          .then(response => response.json())
          .then(function(data) {
            const jsonData = JSON.stringify(data);
            const obj = JSON.parse(jsonData);
            return obj.data.draftOrderComplete.draftOrder;
            // return data;
          });
      });
    return response;
  }
};
