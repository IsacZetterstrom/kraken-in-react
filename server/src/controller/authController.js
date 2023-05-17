import bcrypt from "bcrypt";
import User from "../database/models/user.js";
import stringFormatter from "../formatter/stringFormatter.js";
import createToken from "../utility/jwtUtility.js";

async function registerUser(req, res) {
  const { username, password } = req.body;

  if ((username, password)) {
    const user = await User.findOne({
      username: stringFormatter.capitalize(username),
    });

    if (user != null) {
      res.status(409).send("Username is already taken");
      return;
    } else {
      const hashedPass = await bcrypt.hash(password, 10);

      await User.create({
        username: stringFormatter.capitalize(username),
        password: hashedPass,
      });
      res.status(200).send("Account created!");
    }
  } else {
    res.status(400).send("All fields require a value");
  }
}

async function loginUser(req, res) {
  const { username, password } = req.body;

  const user = await User.findOne({
    username: stringFormatter.capitalize(username),
  });

  if (user) {
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken({ username });
      return res
        .status(200)
        .send({ token, message: "You've sucessfully logged in!" });
    }
  }

  return res.status(400).send("Incorrect username or password");
}

export default { registerUser, loginUser };
