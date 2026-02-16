import React from "react";
import { MdOutlinePushPin } from "react-icons/md";
import { MdCreate, MdDelete } from "react-icons/md";
import "./NoteCard.scss";

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    <div className="note-card">
      {/* Header */}
      <div className="card-header">
        <div className="card-title-section">
          <h6 className="card-title">{title}</h6>
          <span className="card-date">{date}</span>
        </div>

        <MdOutlinePushPin
          className={`pin icon-btn ${isPinned ? "text-blue" : "text-sec"}`}
          onClick={onPinNote}
        />
      </div>

      {/* Content */}
      <p className="card-content">{content?.slice(0, 60)}</p>

      {/* Footer */}
      <div className="card-footer">
        <div className="card-tags">{tags}</div>

        <div className="card-actions">
          <MdCreate className=" icon-btn edit" onClick={onEdit} />
          <MdDelete className="icon-btn delete" onClick={onDelete} />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
