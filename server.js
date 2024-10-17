const express = require("express");
const morgan = require("morgan");
const { Students } = require("../models");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* app.post("/api/v1/healthcheck", (req, res) => {
    const newStudent = req.body
    try{
        const student
    }
    {
    res.status(500).json({
      status: "Fail",
      message: "Application Fail Pass HealthCheck",
      isSuccess: false,
      error: error.message,
    });
  }
}); */

app.get("/api/v1/students", async (req, res) => {
  try {
    const students = await Students.findAll();
    res.status(200).json({
      status: "Success",
      message: "Application passed healtcheck",
      isSuccess: true,
      data: {
        students,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      message: error.message,
      isSuccess: false,
    });
  }
});
module.exports = app;
