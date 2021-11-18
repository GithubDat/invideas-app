import React, { useState } from "react";
import "./NewItem.css";

function NewItem({ getData, submitData }) {
  // const [select, setSelect] = useState("");
  // const selectedField = (e, type) => {
  //   console.log(e.target.value)
  //   setSelect({ type: e.target.value })
  // }

  return (
    <div className="rootDiv">
      <div className="container parent">
        <h2>Add your Idea or Challenge below</h2>
        <div>
          <label>Title :</label>
          <input
            type="text"
            name="title"
            id="challenge_2"
            onChange={(e) => getData(e, "title")}
          />
        </div>
        <div>
          <label>Description :</label>
          <input
            type="text"
            name="description"
            id="challenge_3"
            onChange={(e) => getData(e, "description")}
          />
        </div>

        <div className="drop">
          <label className="dropl">Tag :</label>
          <select defaultValue="Select the tag" onChange={(e) => getData(e, "tag")}>
            <option value="none">Select the type</option>
            <option value="Tech">Tech</option>
            <option value="Feature">Feature</option>
          </select>
        </div>
        <button className="rdr_btn ideas-button" onClick={() => submitData()}>Submit</button>
      </div>
    </div>
  );
}

export default NewItem;
