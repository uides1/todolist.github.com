import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

interface Task {
  id: number;
  name: string;
  assignee: string;
  dueDate: string;
  status: string;
}

interface TaskListProps {
  tasks: Task[];
  onStatusChange: (id: number, status: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onStatusChange }) => {
  return (
    <div className="task-list">
      <div className="task-header">
        <div className="task-cell task-name">Task</div>
        <div className="task-cell">Assignee</div>
        <div className="task-cell">Due Date</div>
        <div className="task-cell status-cell">Status</div>
      </div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onStatusChange={onStatusChange} />
      ))}
    </div>
  );
};

export default TaskList;
