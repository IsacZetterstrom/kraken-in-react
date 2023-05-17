import React, { useEffect, useState } from "react";
import { fetchDb } from "../utils/dbUtility";

function Foods(props) {
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
    console.log(props.note);
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
