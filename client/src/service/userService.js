import memoryService from "./memoryService";

function getLocalJWTData() {
  const localJWTToken = memoryService.getLocalValue("jwtToken");
  console.log(localJWTToken);
  const tokenParts = localJWTToken.split("."); // 0 - jwt header, 1 - payload, 2 - signatur
  const payload = tokenParts[1];

  let payloadData = window.atob(payload);
  return JSON.parse(payloadData);
}

function getUsername() {
  return getLocalJWTData().username;
}

const userService = { getUsername };

export default userService;
