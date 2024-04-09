const express = require("express");
const app = express();

const gunData = {
  name: "gun",
  imageUrl: "http://localhost:1984/WhtazgLjI-ICHHB0FndIJNRYN-WwY5L2fgQ_aYZ-OcI",
};

const skinData = {
  name: "skin",
  imageUrl: "http://localhost:1984/FNM8CpE169pw9lLV4ILH-yHwn1GduouaFSPX_DrqYJ0",
};
// respond with "hello world" when a GET request is made to the homepage
app.get(
  "/0000000000000000000000000000000000000000000000000000000000000002",
  (req, res) => {
    res.send(skinData);
  }
);

app.get(
  "/0000000000000000000000000000000000000000000000000000000000000001",
  (req, res) => {
    res.send(gunData);
  }
);

app.listen(8000);
