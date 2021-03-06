const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");

const User = mongoose.model("users");

module.exports = app => {
  app.get("/admin/api/clients", requireLogin, async (req, res) => {
    const users = await User.find({ role: "client" }); //change to client

    res.send(users);
  });

  app.put("/admin/api/clients/:id", requireLogin, async (req, res) => {
    const { address, contactPhone, company } = req.body;
    try {
      const user = await User.update(
        { _id: req.params.id },
        { address: address, contactPhone: contactPhone, company: company }
      );
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
