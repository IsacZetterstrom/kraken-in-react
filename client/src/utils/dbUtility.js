import db from "../db/db";

function fetchDb(category) {
  if (category !== undefined) {
    let data = db[category];
    return data;
  }
}

function searchDB(searchValue) {
  if (searchValue) {
  }
}

export { fetchDb, searchDB };
