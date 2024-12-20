"use client";

import React, { useEffect, useState } from "react";
import { tasks } from "./interfaces";

interface FindTaskProps {
  id: string;
}

const FindTask: React.FC<FindTaskProps> = ({ id }) => {
  const [tasks, setTasks] = useState<tasks[]>([]);

  useEffect(() => {
    const taskHandler = async () => {
      const response = await fetch(`/api/task/${id}`);
      const data: tasks = await response.json();
      const dataArray: tasks[] = [];
      dataArray.push(data);
      setTasks(dataArray);
    };
    taskHandler().catch((err) => console.error(err));
  }, [id]);
  return (
    <div>
      <ul>
        {tasks.map((task) => {
          return (
            <div key={task.id} className="cell">
              <h2>{task.name} :</h2>
              <div>{task.description}</div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default FindTask;
