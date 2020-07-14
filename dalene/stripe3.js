const serverless = require("serverless-http");
const express = require("express");
const app = express();
const stripe = require("stripe")("sk_test_07FWnx4pv35xyd2VqmPpR1p");
app.use(require("body-parser").text());

app.get("/", function (req, res) {
  res.send("Hello world");
});

app.post("/charge", async (req, res) => {
  try {
    let { status } = await stripe.charges.crate({
      amount: 2000,
      currency: "usd",
      description: "Test charge from mikhael",
      source: req.body,
    });
    res.json({ status });
  } catch (e) {
    res.status(500).end();
  }
});

module.exports.handler = serverless(app);
