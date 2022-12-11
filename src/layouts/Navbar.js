import { Link, useMatch, useResolvedPath } from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import { createStyles,createTheme,ThemeProvider } from '@mui/material/styles'
const drawerWidth = 240;


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
    <ThemeProvider theme={theme}>
    <AppBar position='fixed'>
    <nav className="nav">
      <Link to="/" className="site-title">
      <img class="navbarIcon" src="./favicon.ico"></img><i>EzWatts</i>
     
      </Link>
      <ul>
      <a>
        <CustomLink to="create/Create">Create</CustomLink>
        <CustomLink to="Contact">Contact Us</CustomLink>
        </a>   
      </ul>
       
      </nav>
    </AppBar>
    </ThemeProvider>
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
