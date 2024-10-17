const express = require("express");
const morgan = require("morgan");

const app = express();

app.get("/api/v1/healthcheck", (req, res) => {
  try {
    res.status(200).json({
      status: "Success",
      message: "Application Passed HealthCheck",
      isSuccess: true,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      message: "Application Fail Pass HealthCheck",
      isSuccess: false,
      error: error.message,
    });
  }
});

module.exports = app;
