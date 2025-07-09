import * as React from 'react';
import { useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Container,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Menu,
  MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo-skin-6.png';
import { motion, LayoutGroup } from 'framer-motion';
import { useAuth } from '../../pages/context/AuthContext';

const guestSections = [
  { id: 'home', name: 'Home', path: '/' },
  { id: 'tasks', name: 'Tasks', path: '/user-tasks' },
  { id: 'benefits', name: 'Benefits', path: '/user-benefits' },
  { id: 'refer-earn', name: 'Refer & Earn', path: '/user-refer-earn' },
  { id: 'testimonials', name: 'Testimonials', path: '/user-testimonials' },
  { id: 'faq', name: 'FAQ', path: '/user-faq' },
];

const userSections = [
  { id: 'user-tasks', name: 'Tasks', path: '/tasks' },
  { id: 'refer-earn', name: 'Refer & Earn', path: '/refer-earn' },
  { id: 'leaderboard', name: 'Leaderboard', path: '/leaderboard' },
  { id: 'support', name: 'Support', path: '/ContactUs' },
];

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const { user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const sections = user ? userSections : guestSections;
  const [activeSection, setActiveSection] = React.useState(
    user ? 'user-tasks' : 'home'
  );

  const toggleDrawer = (open) => () => {
    setOpenDrawer(open);
  };

  useEffect(() => {
    if (user) {
      if (location.pathname === '/') {
        navigate('/tasks', { replace: true });
        setActiveSection('user-tasks');
      } else {
        const currentSection = userSections.find(
          section => section.path === location.pathname
        );
        if (currentSection) {
          setActiveSection(currentSection.id);
        }
      }
    } else {
      const currentSection = guestSections.find(
        section => section.path === location.pathname ||
          (section.path.includes('#') && location.pathname === '/')
      );
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    }
  }, [user, location.pathname, navigate]);

  const handleNavClick = (section) => {
    setActiveSection(section.id);
    if (section.path.startsWith('/')) {
      if (section.path.includes('#')) {
        const elementId = section.path.split('#')[1];
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(section.path);
      }
    }
    setOpenDrawer(false);
  };

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#060614' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* Desktop Logo */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
              <RouterLink to="/">
                <img src={logo} alt="Logo" style={{ width: '130px', height: 'auto' }} />
              </RouterLink>
            </Box>

            {/* Mobile Menu Icon */}
            <Box sx={{ flexGrow: 2, display: { xs: 'flex', md: 'none' }, marginLeft: '12px' }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
            </Box>

            {/* Mobile Logo */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
              <RouterLink to="/">
                <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
              </RouterLink>
            </Box>

            {/* Desktop Nav */}
            <LayoutGroup>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: 'none', md: 'flex' },
                  justifyContent: 'center',
                  gap: 2,
                  position: 'relative',
                }}
              >
                {sections.map((section) => {
                  const isActive = activeSection === section.id;
                  return (
                    <Box key={section.id} sx={{ position: 'relative' }}>
                      <Button
                        onClick={() => handleNavClick(section)}
                        sx={{
                          my: 2,
                          color: 'white',
                          textTransform: 'none',
                          fontSize: '1rem',
                          opacity: isActive ? 1 : 0.7,
                        }}
                      >
                        {section.name}
                      </Button>
                      {isActive && (
                        <motion.div
                          layoutId="underline"
                          style={{
                            height: '3px',
                            width: '100%',
                            borderRadius: '4px',
                            background: '#7C39F6',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                          }}
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        />
                      )}
                    </Box>
                  );
                })}
              </Box>
            </LayoutGroup>

            {/* Desktop Auth Buttons */}
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, gap: '12px', alignItems: 'center' }}>
              {user ? (
                <>
                  <IconButton
                    onClick={() => navigate('/profile')}
                    sx={{ p: 0 }}
                  >
                    <Avatar
                      src={user.avatar}
                      alt={user.name}
                      sx={{ width: 40, height: 40 }}
                    />
                  </IconButton>

                </>
              ) : (
                <>
                  <Button component={RouterLink} to="/login"
                    sx={{
                      color: 'white',
                      textTransform: 'none',
                      fontSize: '1rem',
                      padding: '10px 32px',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '30px',
                      background: `linear-gradient(180deg, rgba(255,255,255,0.04), rgba(153,153,153,0.04))`,
                      boxShadow: `inset 0 2.91px 8px #FFFFFF14, inset 0 -2.91px 8px #FFFFFF14`,
                      '&:hover': { backgroundColor: 'rgba(255,255,255,0.08)' },
                    }}>
                    Login
                  </Button>

                  <Button component={RouterLink} to="/signup"
                    sx={{
                      backgroundColor: '#7C39F6',
                      color: 'white',
                      textTransform: 'none',
                      fontSize: '1rem',
                      padding: '10px 32px',
                      borderRadius: '30px',
                      boxShadow: `inset 0 2.91px 6px #FFFFFF61, inset 0 -2.91px 6px #FFFFFF61`,
                      '&:hover': { backgroundColor: '#8C31F1' },
                    }}>
                    Sign up
                  </Button>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={toggleDrawer(false)}
        PaperProps={{ sx: { backgroundColor: '#060614', width: 250 } }}
      >
        <List>
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <ListItem
                button
                key={section.id}
                onClick={() => handleNavClick(section)}
                sx={{
                  backgroundColor: isActive ? '#1F1F2E' : 'transparent',
                  borderLeft: isActive ? '4px solid #7C39F6' : '4px solid transparent',
                  pl: 2,
                }}
              >
                <ListItemText
                  primary={section.name}
                  sx={{
                    color: isActive ? '#7C39F6' : 'white',
                    fontWeight: isActive ? 'bold' : 'normal',
                  }}
                />
              </ListItem>
            );
          })}
          {user ? (
            <>
              <ListItem
                button
                component={RouterLink}
                to="/profile"
                onClick={toggleDrawer(false)}
              >
                <ListItemText primary="My Profile" sx={{ color: 'white' }} />
              </ListItem>

            </>
          ) : (
            <>
              <ListItem button component={RouterLink} to="/login" onClick={toggleDrawer(false)}>
                <ListItemText primary="Login" sx={{ color: 'white' }} />
              </ListItem>
              <ListItem button component={RouterLink} to="/signup" onClick={toggleDrawer(false)}>
                <ListItemText primary="Sign up" sx={{ color: 'white' }} />
              </ListItem>
            </>
          )}
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;