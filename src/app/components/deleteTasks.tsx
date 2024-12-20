"use client";

import React, { memo } from "react";

interface DeleteTaskProps {
  id: string;
  onTaskDeleted: (id: string) => void;
}

const DeleteTask: React.FC<DeleteTaskProps> = ({ id, onTaskDeleted }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/task/delete/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log(`Task with id ${id} deleted successfully`);
        onTaskDeleted(id);
      } else {
        console.error(`Failed to delete task with id ${id}`);
      }
    } catch (error) {
      console.error("An error occurred while deleting the task:", error);
    }
  };

  return (
    <button onClick={handleDelete} className="btn">
      Delete
    </button>
  );
};

export default memo(DeleteTask);
