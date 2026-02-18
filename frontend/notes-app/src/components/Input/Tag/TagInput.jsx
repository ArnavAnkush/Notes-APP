import React, { useState } from "react";
import "./TagInput.scss";
import { MdAdd, MdClose } from "react-icons/md";

const TagInput = ({ tags, setTags }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addNewTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addNewTag();
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div>
      {tags?.length > 0 && (
        <div className="tags-list">
          {tags.map((tag, index) => (
            <span key={index} className="tag-item">
              #{tag}
              <button onClick={() => handleRemoveTag(tag)}>
                <MdClose className="md-close" />
              </button>
            </span>
          ))}
        </div>
      )}

      <div className="tag-container">
        <input
          type="text"
          className="tags-input"
          placeholder="Add tags"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />

        <button className="md-btn-cont" onClick={addNewTag}>
          <MdAdd className="md-add" />
        </button>
      </div>
    </div>
  );
};

export default TagInput;
