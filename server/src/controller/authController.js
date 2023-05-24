import bcrypt from "bcrypt";
import User from "../database/models/user.js";
import stringFormatter from "../formatter/stringFormatter.js";
import createToken from "../utility/jwtUtility.js";
import capitalize from "../formatter/stringFormatter.js";

const getUser = async (prop) => {
  console.log(prop);
  const user = await User.findOne({ username: prop.username });
  console.log(user);
  return user;
};

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
        .send({ token, username, message: "You've sucessfully logged in!" });
    }
  }

  return res.status(400).send("Incorrect username or password");
}

async function fetchUser(req, res) {
  // console.log(req);
  const user = await getUser(req.user);
  return res.send({ user });
}

export default { registerUser, loginUser, fetchUser };
