import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { ShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Link to="/">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <h2>Brand</h2>
          </IconButton>

          </Link>
          <Typography variant="h6" color="textPrimary" component="p">
            Hello you!
          </Typography>
          <div>
            <Button color="inherit" variant="outlined">
                Login
            </Button>
            <IconButton>
                <Badge badgeContent={2}>
                    <Link to = "CartWidget">
                      <ShoppingCart fontSize="large"/>
                    </Link>
                </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}