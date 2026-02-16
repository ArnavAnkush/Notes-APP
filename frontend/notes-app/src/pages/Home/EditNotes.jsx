import React from "react";
import "./EditNotes.scss";

const EditNotes = () => {
  return (
    <div>
      <div className="edit-container">
        <label className="input-label">TITLE</label>
        <input
          type="text"
          className="edit-title"
          placeholder="Go To Gym At 5pm"
        />
      </div>
      <div className="content-container">
        <label className="input-label" htmlFor="content">
          CONTENT
        </label>

        <textarea
          id="content"
          className="content-input"
          placeholder="Content"
          rows={10}
        ></textarea>
      </div>
      <div className="tags-container">
        <label className="input-lable">TAGS</label>
      </div>
      <button className="edit-btn" onClick={() => {}}>
        ADD
      </button>
    </div>
  );
};

export default EditNotes;
