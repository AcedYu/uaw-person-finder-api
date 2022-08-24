const router = require("express").Router();
const { Employee } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const employeeData = await Employee.findAll({});
    res.status(200).json(employeeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:lastname", async (req, res) => {
  try {
    const userData = await Employee.findAll({
      where: {
        last_name: req.params.lastname,
      },
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;