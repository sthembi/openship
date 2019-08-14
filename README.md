<h1 align="center">
  <a href="https://openship.org">
    <img width="200px" style="margin-right: 20px" src="https://user-images.githubusercontent.com/34615258/62741139-89ba5580-b9ff-11e9-950f-afb005771866.png">
  </a>
</h1>

<div align="center">

Operations dashboard for Shopify stores

</div>


Openship is an operations management tool for e-commerce shops. It allows you to tap into Shopify's APIs and determine how orders are routed and fulfilled.
# Getting Started

To get started, please make sure you have created a free account at https://dashboard.openship.org. Once you have an account, you can go to the settings tab and enter a whitelisted URL where your dashboard will be hosted or a tunnel URL when developing locally (e.g. ngrok).

### Clone the repo

```
git clone https://github.com/openshiporg/openship
```

### Expose your localhost to the Internet

1. [Download ngrok](https://ngrok.com)
2. Open terminal and navigate to where ngrok was downloaded.
3. If you’re working on OSX or Linux, start ngrok with ./ngrok http 3000. If you’re on Windows, start ngrok with ngrok http 3000.
4. A url ending in ngrok.io will be shown in your terminal.
5. Go to https://dashboard.openship.org/settings and enter this URL in the text box and click save.

### Start the application

Run the following commands to run it in your local machine:

```js
$ cd openship
$ yarn install
$ yarn dev
```

Go to the ngrok.io URL from before and log into Openship using your ceredentials. Now you can customize the application and the results will be hotloaded on the ngrok.io URL. Check out the Micro Apps tutorial to build your first customization.

### Deployment

Since Openship is a Next.js application, deployment is very easy with [now.sh](https://now.sh). Make sure you have an account and have either the desktop application or CLI installed. Then run:

```bash
$ now
```

Once complete, you will have a URL ending with now.sh. Enter this URL in your settings page and replace the prodFront variable in the config.js file.

### Adding Shops

Adding shops to your own instance can be done in two ways.

1. Add it directly on https://dashboard.openship.org and then you can access it on your instance
2. Make a Shopify Partner account and create an app. Add a .env file to the root folder like so:

```env
SHOPIFY_API_KEY=00000000000000000000000000000000
SHOPIFY_SECRET=AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
```

Now when you add a shop from your URL, the app you created will be installed in the shop instead of Openship.

---

# Use Cases

### Dropshipping

Source inventory from our marketplace, AliExpress, or Amazon. Go one step further and hold bulk inventory in ShipBob or ShipMonk warehouses and allow order fulfillment from multiple channels. Want to push orders directly to your supplier's shop to circumvent marketplace fees? Let's build it. We have the technology.

### Customer Service

Build micro applications to streamline and automate your customer service. Navigate to https://dashboard.openship.org/order?store={storeName}&name={orderName} to see your order page with order information. You can use this page to show relevant order information like metafields and 3rd party app information. You can build actions that will allow customer service agents to start processes like returns or inquiries.

### Developmental Environment

Since Openship gives you direct access to your shops's GraphQL API and a Playground, you can build any customization you'd like. You can also build UI using React.js to better interact with the API. Furthermore, you can use this to build prototype Shopify apps that can be split and turned into their own application. Once you have built the UI and functionality, you can move the file created to this Next.js Shopify App Boilerplate: https://github.com/Shopify/shopify-demo-app-node-react.

### Personal Dashboard

Customize the dashboard to your liking and pull in pertaining info from Shopify's API. Connect with third party APIs you already use like Mailchimp, Zendesk, Zero, etc or roll your own custom implementation.

### Customized Checkouts

Shopify can be used to sell more than just physical products. Users can use the platform to handle rentals, appointments, digital products, or even recurring payments. Instead of using apps that offer these functionalities, you can roll your own.

---

# Documentation

https://docs.openship.org

> Work in progress
