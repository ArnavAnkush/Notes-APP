import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/Cards/NoteCard/NoteCard";
import "./Home.scss";
import { MdAdd } from "react-icons/md";
import EditNotes from "./EditNotes";
import Modal from "react-modal";

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    date: null,
  });

  return (
    <>
      <Navbar />

      <div className="card-container">
        <div className="grid-container">
          <NoteCard
            title="Meeting on 7th April"
            date="12th Jun 2026"
            content="Meeting on 7th April"
            tags="#meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />

          <NoteCard
            title="Meeting on 7th April"
            date="12th Jun 2026"
            content="Meeting on 7th April"
            tags="#meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />

          <NoteCard
            title="Meeting on 7th April"
            date="12th Jun 2026"
            content="Meeting on 7th April"
            tags="#meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />

          <NoteCard
            title="Meeting on 7th April"
            date="12th Jun 2026"
            content="Meeting on 7th April"
            tags="#meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />

          <NoteCard
            title="Meeting on 7th April"
            date="12th Jun 2026"
            content="Meeting on 7th April"
            tags="#meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />

          <NoteCard
            title="Meeting on 7th April"
            date="12th Jun 2026"
            content="Meeting on 7th April"
            tags="#meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />

          <NoteCard
            title="Meeting on 7th April"
            date="12th Jun 2026"
            content="Meeting on 7th April"
            tags="#meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>

      <button
        className="add-cont"
        onClick={() => {
          setOpenAddEditModal({ isShown: true, type: "add", date: null });
        }}
      >
        <MdAdd className="add" />
      </button>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {
          setOpenAddEditModal({ isShown: false, type: "add", date: null });
        }}
        style={{
          overlay: { backgroundColor: "rgba(0,0,0,0.2)" },
        }}
        contentLabel=""
        className="edit-modal"
      >
        <EditNotes />
      </Modal>
    </>
  );
};

export default Home;
