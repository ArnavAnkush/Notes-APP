import React, { useState } from "react";
import "./EditNotes.scss";
import TagInput from "../../components/Input/Tag/TagInput";
import { MdClose } from "react-icons/md";

const EditNotes = ({ noteData, type, onClose }) => {
  const [title, setTitle] = useState(noteData?.title || "");
  const [content, setContent] = useState(noteData?.content || "");
  const [tags, setTags] = useState(noteData?.tags || []);

  const [error, setError] = useState(null);

  // Add Note
  const addNewNote = async () => {
    console.log("Adding note:", { title, content, tags });
  };

  // Edit Note
  const editNote = async () => {
    console.log("Editing note:", { title, content, tags });
  };

  const handleAddNotes = () => {
    if (!title) {
      setError("Please enter the title");
      return;
    }

    if (!content) {
      setError("Please enter the content");
      return;
    }

    setError(null);

    if (type === "edit") {
      editNote();
    } else {
      addNewNote();
    }

    onClose(); // close modal after adding/editing
  };

  return (
    <div className="edit-notes-container">
      <button className="close-btn" onClick={onClose}>
        <MdClose className="md-close" />
      </button>

      <div className="edit-container">
        <label className="input-label">TITLE</label>
        <input
          type="text"
          className="edit-title"
          placeholder="Go To Gym At 5pm"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
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
          value={content}
          onChange={({ target }) => setContent(target.value)}
        ></textarea>
      </div>

      <div className="tags-container">
        <label className="input-label">TAGS</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>

      {error && <p className="error-text">{error}</p>}

      <button className="edit-btn" onClick={handleAddNotes}>
        {type === "edit" ? "UPDATE" : "ADD"}
      </button>
    </div>
  );
};

export default EditNotes;
