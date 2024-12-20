"use client";

import React, { useEffect, useState } from "react";
import { tasks } from "./interfaces";
import DeleteTask from "./deleteTasks";
import CreateTask from "./createTask";

const AllTasks = () => {
  const [tasks, setTasks] = useState<tasks[]>([]);

  const getTasks = async () => {
    const response = await fetch("/api/task");
    const data: tasks[] = await response.json();
    setTasks(data);
  };
  useEffect(() => {
    getTasks().catch((err) => console.error(err));
  }, []);

  const handleTaskDeleted = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => `${task.id}` !== id));
  };

  return (
    <>
      <div>Tasks :</div>
      {tasks.map((task) => (
        <div className="miniContainer" key={task.id}>
          <a href={`/${task.id}`}>{task.name}</a>
          <DeleteTask id={`${task.id}`} onTaskDeleted={handleTaskDeleted} />
        </div>
      ))}
      <CreateTask onTaskCreated={getTasks} />
    </>
  );
};

export default AllTasks;
