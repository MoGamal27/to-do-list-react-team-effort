import { useState } from "react";
import "../styles/newList.css";
function NewList() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  return (
    <>
      <form className="new-list" method="POST">
        <h2>Make New Plan</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name="detail"
          className="detail"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </>
  );
}

export default NewList;
