function saveLocalValue(ref, value) {
  value = JSON.stringify(value);

  sessionStorage.setItem(ref, value);
}

function getLocalValue(ref) {
  let value = sessionStorage.getItem(ref);

  return value;
}

const memoryService = { saveLocalValue, getLocalValue };

export default memoryService;
