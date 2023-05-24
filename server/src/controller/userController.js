import User from "../database/models/user.js";
import stringFormatter from "../formatter/stringFormatter.js";
async function addCredit(req, res) {
  const credits = 10;

  if (credits) {
    const user = await User.findOne({
      username: stringFormatter.capitalize(req.user),
    });
    if (user) {
      let oldCredits = user.credits;
      let newCredits = oldCredits + credits;
      user.credits = newCredits;
      await user.save();
    }
    res.status(200).send("Credits added");
  }
}

export default addCredit;
