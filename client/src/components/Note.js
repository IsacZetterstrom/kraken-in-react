import React, { useEffect, useState } from "react";
// import User from "../../../server/src/database/models/user";

function Note(props) {
  const [totalSum, setTotalSum] = useState();
  // const [validUsername, setValidUsername] = useState(false);

  const sumOfNote = () => {
    let tempPrice = 0;
    props.note.forEach((item) => {
      tempPrice += item.price;
    });

    setTotalSum(tempPrice);
  };

  useEffect(() => {
    sumOfNote();
  }, [props.note]);

  const removeItem = (item) => {
    console.log(props.note);
    let foundItem = false;
    const result = props.note.filter(function (list) {
      if (foundItem) {
        return true;
      } else {
        if (list === item) {
          foundItem = true;
          return false;
        } else {
          return true;
        }
      }
    });
    props.setNote(result);
  };

  const addCredits = () => {};

  return (
    <div data-testid="note-container">
      {sessionStorage.getItem("jwtToken") !== null && (
        <form>
          <input />
          <button data-testid="add-credit">Add Credit</button>
        </form>
      )}
      <h2>Receipt</h2>
      {props.note &&
        props.note.map((item, index) => {
          return (
            <article data-testid="food-article" key={item.id + index}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>{item.price}</p>
              <button
                data-testid="remove-food"
                onClick={() => {
                  removeItem(item);
                }}>
                Remove
              </button>
            </article>
          );
        })}
      <section>
        <h3 data-testid="food-price">Sum: {totalSum}</h3>
      </section>
    </div>
  );
}

export default Note;
