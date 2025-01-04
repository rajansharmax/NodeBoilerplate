var express = require("express");
var router = express.Router();

var PageData = [{ name: "current", breadcrumbData: { name: "Ui Kits", subName: "accordion" } }];

/* GET home page. */
router.get(`/`, function (req, res) {
  res.render(`login`, { layout: false });
});

for (let i = 0; i < PageData.length; i++) {
  const { name, subName } = PageData[i].breadcrumbData;
  router.get(`/${PageData[i].name}`, function (req, res) {
    res.render(`${PageData[i].name}`, { breadcrumbName: name, breadcrumbPath: subName });
  });
}

module.exports = router;
