var express = require("express");
var router = express.Router();

var withOutLayoutPageData = [
  { name: "basic-template" },
  { name: "comingsoon-bg-img" },
  { name: "error-400" },
  { name: "login_two" },
  { name: "login-sa-validation" },
  { name: "landing-page" },
  { name: "login_one" },
  { name: "maintenance" },
  { name: "email-header" },
  { name: "email-order-success" },
  { name: "ecommerce-templates" },
  { name: "comingsoon-bg-video" },
  { name: "comingsoon" },
  { name: "sign-up-two" },
  { name: "template-email-2" },
  { name: "forget-password" },
  { name: "reset-password" },
  { name: "error-401" },
  { name: "template-email" },
  { name: "error-403" },
  { name: "login-bs-tt-validation" },
  { name: "login-bs-validation" },
  { name: "unlock" },
  { name: "error-404" },
  { name: "sign-up-wizard" },
  { name: "sign-up" },
  { name: "error-500" },
  { name: "sign-up-one" },
  { name: "error-503" },
  { name: "error" },
  { name: "login" },
];

for (let i = 0; i < withOutLayoutPageData.length; i++) {
  router.get(`/${withOutLayoutPageData[i].name}`, function (req, res) {
    res.render(`${withOutLayoutPageData[i].name}`, { layout: false });
  });
}

module.exports = router;
