import { Link, useMatch, useResolvedPath } from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { createStyles,createTheme,ThemeProvider } from '@mui/material/styles'
import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
import logo from '../media/Icon1.png';
import Grid from "@mui/material/Grid";


const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },    
  palette: {
    primary: {
      main: '#1565c0',
    },
    secondary: {
      main: '#00acc1',
      contrastText: '#fff',
    },
  }
});

// Linking Functionality
// css class names and tags
export default function Navbar() {
 
  return (
    <>
   
    <Box sx={{ flexGrow: 1 }}>
       
    <AppBar position="static"  >
      <Toolbar>
      <nav className="nav">
      <Link to="/" >
      <Box
            component="img"
            sx={{
            height: 64,
            }}
            alt="Your logo."
            src={logo}
        />
        </Link>
       
    
      <ul>
      <Link to="/" className="site-title">
        EzWatts
      </Link>
        <CustomLink to="create/Create">Create</CustomLink>
        <CustomLink to="Contact">Contact Us</CustomLink>
      </ul>
    
          </nav> 
      </Toolbar>
    </AppBar>
 

  </Box>
  


</>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
