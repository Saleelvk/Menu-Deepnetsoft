    const express = require('express');
    const router = express.Router();

    const menuRoute = require("./MenuRoute");

    //middleware
    router.use("/menu", menuRoute);

    module.exports = router; 