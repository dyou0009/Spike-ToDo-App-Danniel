import React, { useState } from "react";

export const TaskFormComponent = () => {

  return (
    <form className="task-form">
      <input type="text" placeholder="Type to add new tasks" />

      <button type="submit">Add Task</button>
    </form>
  );
};
