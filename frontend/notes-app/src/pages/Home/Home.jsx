import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/Cards/NoteCard/NoteCard";
import "./Home.scss";
import { MdAdd } from "react-icons/md";
import EditNotes from "./EditNotes";

const Home = () => {
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

      <button className="add-cont" onClick={() => {}}>
        <MdAdd className="add" />
      </button>

      <EditNotes />
    </>
  );
};

export default Home;
