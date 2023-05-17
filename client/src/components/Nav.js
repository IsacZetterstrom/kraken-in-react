import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDb } from "../utils/dbUtility";
import Note from "./Note";
function Nav(props) {
  const navigation = useNavigate();

  const [noteVisibility, setNoteVisibility] = useState(false);

  useEffect(() => {
    if (props.data !== undefined) {
      console.log(props);
      fetchDb(props.data);
      navigation("/menu");
    }
  }, [props.note]);

  const submit = (event) => {
    navigation("/menu");
    props.setData(event.target.value);
  };

  const handleToggle = () => {
    setNoteVisibility((current) => !current);
  };

  return (
    <div>
      <button
        onClick={() => {
          navigation("/");
        }}>
        Home
      </button>
      <button
        onClick={() => {
          navigation("/about");
        }}>
        About
      </button>
      <button data-testid="note-btn" onClick={handleToggle}>
        Reciept
      </button>
      <button
        onClick={() => {
          navigation("/login");
        }}>
        Login
      </button>
      {noteVisibility && <Note note={props.note} setNote={props.setNote} />}
      <div>
        <h3>Choose Category</h3>
        <select
          data-testid="food-categorys"
          name="foods"
          id="foods"
          onChange={submit}>
          <option defaultValue="foods" disabled hidden>
            Foods
          </option>
          <option value="bbqs">barbeque</option>
          <option value="breads">breads</option>
          <option value="burgers">burgers</option>
          <option value="fried-chicken">fried-chicken</option>
          <option value="pizzas">pizzas</option>
          <option value="porks">porks</option>
          <option value="sandwiches">sandwiches</option>
          <option value="sausages">sausages</option>
          <option value="steaks">steaks</option>
          <option value="chocolates">chocolates</option>
          <option value="desserts">desserts</option>
          <option value="ice-cream">ice-cream</option>
          <option value="drinks">Drinks</option>
        </select>
      </div>
    </div>
  );
}

export default Nav;
