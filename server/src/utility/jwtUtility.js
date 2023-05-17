import jwt from "jsonwebtoken";

function createToken(payload) {
  const token = jwt.sign(payload, process.env.SECRET_KEY);

  return token;
}

export function verifyToken(token) {
  return jwt.verify(token, process.env.SECRET_KEY);
}

export default createToken;
