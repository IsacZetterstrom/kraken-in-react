async function fetchJson(adress, method, data) {
  const option = {
    method: method,
    headers: {
      authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  return await fetch(adress, option);
}

function fetchFormData(form) {
  const formData = new formData(form);

  return Object.fromEntries(formData);
}
export default { fetchJson, fetchFormData };
