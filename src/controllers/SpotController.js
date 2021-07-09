const User = require("../models/Spot");
const Spot = require("../models/Spot");
module.exports = {
  async store(req, res) {
    const { filename } = req.file;
    const { company, techs, price } = req.body;
    const user_id = JSON.stringify(req.headers).user_id;
    const user = await User.findById(user_id);
    console.log(req.headers);
    console.log(user);
    if (!user) {
      return res.status(400).json({ error: "Usuário não existe" });
    }
    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      company,
      techs: techs.split(",").map((tech) => tech.trim()),
      price,
    });
    return res.json(spot);
  },
};
