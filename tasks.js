const express = require("express");
const router = express.Router();
require("dotenv").config();


router.get(
    "/addTask",
    passport.authenticate("auth0", {
      scope: "openid email profile"
    }),
    (req, res) => {
      res.redirect("/");
    }
  );