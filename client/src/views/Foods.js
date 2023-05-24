import React, { useEffect, useState } from "react";
import userService from "../service/userService.js";
import { fetchDb } from "../utils/dbUtility";

function Foods(props) {
  const [validUsername, setValidUsername] = useState(false);
  const [data, setData] = useState([]);
  let dbData = fetchDb(props.data);
  useEffect(() => {
    setData(dbData);
  }, [dbData]);

  useEffect(() => {
    submitArticle();
  }, [props.note]);

  function submitArticle(item) {
    if (item === undefined) {
      return;
    }
    const newArray = props.note;
    newArray.push(item);
    props.setNote(newArray);
  }

  return (
    <div data-testid="foods-container">
      {props.data && <h1>{props.data.toUpperCase()}</h1>}

      {data &&
        data.map((foodItem) => {
          return (
            <article key={foodItem.id}>
              <h2>{foodItem.name}</h2>
              <p>{foodItem.dsc}</p>

              <div className="food-container">
                <img
                  className="food-img"
                  src={foodItem.img}
                  alt="Bild saknas, köp ändå"
                />
              </div>
              <p>{foodItem.price} sek</p>
              <button
                data-testid="order-btn"
                onClick={() => {
                  submitArticle(foodItem);
                }}>
                Order
              </button>
            </article>
          );
        })}
    </div>
  );
}

export default Foods;
