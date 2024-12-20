"use client";

import React, { useState } from "react";

interface CreateTaskProps {
  onTaskCreated: () => void;
}

//appelle la queri create
const CreateTask: React.FC<CreateTaskProps> = ({ onTaskCreated }) => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const handleClick = async () => {
    try {
      const response = await fetch("/api/task/create", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          description: description,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      onTaskCreated();
    } catch (err) {
      throw err;
    }
  };
  return (
    <>
      <div>
        <h2>Create Tasks</h2>
        <input
          type="text"
          placeholder="Name your task"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleClick}> Create </button>
      </div>
    </>
  );
};

export default CreateTask;
