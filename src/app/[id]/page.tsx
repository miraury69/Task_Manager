"use client";
import { useParams } from "next/navigation";

import FindTask from "../components/findTask";

const TasksPage = () => {
  const params = useParams();
  const id = params?.id;
  if (!id) {
    return <div></div>;
  }
  return (
    <>
      <div>
        <FindTask id={id[0]} />
      </div>
    </>
  );
};

export default TasksPage;
