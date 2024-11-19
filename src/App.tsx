import React, { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import Header from './components/Header';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

const App: React.FC = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Campaign brief and launch timeline', assignee: 'User1', dueDate: '', status: 'Approved' },
    { id: 2, name: 'Overall goals and success metrics', assignee: 'User2', dueDate: '', status: 'Approved' },
  ]);

  const [open, setOpen] = useState(false);
  const [newTask, setNewTask] = useState({ name: '', assignee: '', dueDate: '', status: 'Pending' });
  const [filterStatus, setFilterStatus] = useState('All');

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#121212',
        paper: '#1e1e1e',
      },
      text: {
        primary: '#ffffff',
      },
    },
  });

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleAddTask = () => {
    setTasks([...tasks, { id: tasks.length + 1, ...newTask }]);
    setNewTask({ name: '', assignee: '', dueDate: '', status: 'Pending' });
    handleCloseDialog();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleStatusChange = (id: number, status: string) => {
    const updatedTasks = tasks.map(task => (task.id === id ? { ...task, status } : task));
    setTasks(updatedTasks);
  };

  const handleFilterChange = (status: string) => {
    setFilterStatus(status);
  };

  const getFilteredTasks = () => {
    if (filterStatus === 'All') {
      return tasks;
    }
    return tasks.filter(task => task.status === filterStatus);
  };

  return (
    <MuiThemeProvider theme={darkTheme}>
      <div className="app-container">
        <Header onOpenDialog={handleOpenDialog} onFilterChange={handleFilterChange} />
        <TaskList tasks={getFilteredTasks()} onStatusChange={handleStatusChange} />
        <Dialog open={open} onClose={handleCloseDialog}>
          <DialogTitle sx={{ backgroundColor: '#1e1e1e', color: '#ffffff' }}>Add New Task</DialogTitle>
          <DialogContent sx={{ backgroundColor: '#1e1e1e' }}>
            <TextField
              margin="dense"
              label="Task Name"
              name="name"
              fullWidth
              value={newTask.name}
              onChange={handleInputChange}
              sx={{
                '& .MuiInputBase-root': { color: '#ffffff' },
                '& .MuiInputLabel-root': { color: '#ffffff' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#ffffff' },
                  '&:hover fieldset': { borderColor: '#ffffff' },
                  '&.Mui-focused fieldset': { borderColor: '#ffffff' },
                },
              }}
            />
            <TextField
              margin="dense"
              label="Assignee"
              name="assignee"
              fullWidth
              value={newTask.assignee}
              onChange={handleInputChange}
              sx={{
                '& .MuiInputBase-root': { color: '#ffffff' },
                '& .MuiInputLabel-root': { color: '#ffffff' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#ffffff' },
                  '&:hover fieldset': { borderColor: '#ffffff' },
                  '&.Mui-focused fieldset': { borderColor: '#ffffff' },
                },
              }}
            />
            <TextField
              margin="dense"
              label="Due Date"
              name="dueDate"
              type="date"
              fullWidth
              value={newTask.dueDate}
              onChange={handleInputChange}
              sx={{
                '& .MuiInputBase-root': { color: '#ffffff' },
                '& .MuiInputLabel-root': { color: '#ffffff' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#ffffff' },
                  '&:hover fieldset': { borderColor: '#ffffff' },
                  '&.Mui-focused fieldset': { borderColor: '#ffffff' },
                },
              }}
              InputLabelProps={{ shrink: true }}
            />
          </DialogContent>
          <DialogActions sx={{ backgroundColor: '#1e1e1e' }}>
            <Button onClick={handleCloseDialog} sx={{ color: '#ffffff' }}>
              Cancel
            </Button>
            <Button onClick={handleAddTask} sx={{ color: '#ffffff' }}>
              Add Task
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </MuiThemeProvider>
  );
};

export default App;
