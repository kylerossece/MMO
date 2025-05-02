import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { RxHamburgerMenu } from "react-icons/rx";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { IoGameControllerOutline } from "react-icons/io5";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['games', 'news',];

export default function Nav(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

 const redirectTo = (path: string | undefined) => {
  const targetWindow = window?.() || globalThis.window;
  
  if (!targetWindow) return;

  if (path === 'games') {
    targetWindow.open("/", "_self");
  } else if (path === 'news') {
    targetWindow.open("/news", "_self");
  } else {
    targetWindow.open("/", "_self");
  }
};

  const drawer = (

    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center',    bgcolor: '#1F2937',
      color: '#fff',    }}>
      <Typography variant="h6"  sx={{ my: 2, display:'flex', justifyContent: 'center', alignItems: 'center', }}>
      <IoGameControllerOutline className='text-4xl cursor-pointer ' onClick={() => redirectTo("")} />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} className='uppercase' />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (

    <Box sx={{ display: 'flex' }} >
      <CssBaseline />

      <AppBar component="nav" sx={{ bgcolor: '#1F2937', }}>
      <Container>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{  display: { sm: 'none' } }}
          >
          <RxHamburgerMenu />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
           <IoGameControllerOutline className='text-4xl cursor-pointer' onClick={() => redirectTo("")} />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }} onClick={() => redirectTo(item)}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
        </Container>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            bgcolor: '#1F2937', // ✅ background color of the drawer
            color: '#fff',   
         
          }}
          slotProps={{
            paper: {
              sx: {
                bgcolor: '#1F2937', 
                color: '#fff',       
                width: drawerWidth,
              },
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 0,  }}>
        <Toolbar />
    
      </Box>
    </Box>
  );
}
