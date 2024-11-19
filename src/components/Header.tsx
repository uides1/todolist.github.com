import React from 'react';
import styled from 'styled-components';
import { AppBar, Toolbar, Typography, Button, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import './Header.css';

const HeaderContainer = styled(AppBar)`
  background-color: #333;
  margin-bottom: 20px;
`;

const HeaderTitle = styled(Typography)`
  flex-grow: 1;
  font-weight: bold;
  font-size: 24px;
`;

interface HeaderProps {
  onOpenDialog: () => void;
  onFilterChange: (status: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenDialog, onFilterChange }) => {
  const handleFilterChange = (event: SelectChangeEvent<string>) => {
    onFilterChange(event.target.value);
  };

  return (
    <HeaderContainer position="static">
      <Toolbar>
        <HeaderTitle variant="h6">
          To-Do List
        </HeaderTitle>
        <Button color="inherit" onClick={onOpenDialog}>Add Task</Button>
        <Select
          defaultValue="All"
          onChange={handleFilterChange}
          displayEmpty
          style={{ marginLeft: '20px', color: 'white' }}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
          <MenuItem value="Approved">Approved</MenuItem>
        </Select>
      </Toolbar>
    </HeaderContainer>
  );
};

export default Header;
