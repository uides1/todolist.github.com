import React from 'react';
import './TaskItem.css';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';

interface Task {
  id: number;
  name: string;
  assignee: string;
  dueDate: string;
  status: string;
}

interface TaskItemProps {
  task: Task;
  onStatusChange: (id: number, status: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onStatusChange }) => {
  const handleStatusChange = (event: SelectChangeEvent<string>) => {
    onStatusChange(task.id, event.target.value);
  };

  return (
    <div className={`task-item ${task.status === 'Completed' ? 'task-completed' : ''}`}>
      <div className="task-cell task-name">{task.name}</div>
      <div className="task-cell">{task.assignee}</div>
      <div className="task-cell">{task.dueDate}</div>
      <div className="task-cell status-cell">
        <Select
          value={task.status}
          onChange={handleStatusChange}
          displayEmpty
          className="status-select"
          sx={{
            color: 'white',
            backgroundColor: '#333',
            '& .MuiSelect-select': {
              padding: '10px',
            },
            '& .MuiInputBase-root': {
              color: 'white',
            },
            '& .MuiSvgIcon-root': {
              color: 'white',
            },
          }}
        >
          <MenuItem value="Pending" className="status-menu-item">Pending</MenuItem>
          <MenuItem value="In Progress" className="status-menu-item">In Progress</MenuItem>
          <MenuItem value="Completed" className="status-menu-item">Completed</MenuItem>
          <MenuItem value="Approved" className="status-menu-item">Approved</MenuItem>
        </Select>
      </div>
    </div>
  );
};

export default TaskItem;
