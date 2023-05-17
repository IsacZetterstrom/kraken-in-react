import { verifyToken } from "../utility/jwtUtility.js";

function checkToken(req, res, next) {
  const token = req.headers.authorization?.replace("Bearer ", "");

  if (!token) return res.status(400).send("JWT token not provided!");

  const payload = verifyToken(token);

  if (payload.username) {
    next();
  }
}

export default { checkToken };
