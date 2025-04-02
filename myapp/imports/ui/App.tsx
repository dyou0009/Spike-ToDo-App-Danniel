import React from 'react';
import { Hello } from './Hello';
import { Info } from './Info';
import { TaskFormComponent } from './TaskFormComponent';
import { TaskComponent } from './TaskComponent';
import { Task } from '../api/tasks';
import { useTracker, useSubscribe } from 'meteor/react-meteor-data'
import { TasksCollection } from '/imports/api/tasks'

export const App = () => {
  const isLoading = useSubscribe("tasks");
  const tasks: Task[] = useTracker(() => TasksCollection.find({}).fetch());

  if (isLoading()) {
    return <div>Loading...</div>;
  }

  const task: Task = {
    _id: '1',
    text: 'First Task',
  };

  return (
    <div>
      <h1>Welcome to Meteor!</h1>
      <TaskFormComponent />
      <TaskComponent task={task} />
      <ul>
        {tasks.map((task) => (
          <TaskComponent key={task._id} task={task} />
        ))}
      </ul>
      <Hello />
      <Info />
    </div>
  );
};
