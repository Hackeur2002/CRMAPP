
// Material Dashboard 2 React layouts
import Teams from "./Component/Team/Teams";
import Message from "./Component/Message/Message";
import Dashboard from "./Component/Dashboard/Dashboard";
//import Login from "./Component/Login/Login";
import Register from "./Component/Invite/Invite"

// @mui icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupsIcon from '@mui/icons-material/Groups';
import MessageIcon from '@mui/icons-material/Message';
import LoginIcon from '@mui/icons-material/Login';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Login from './Component/Login/Login';

const routes = [
  {
    name: "Dashboard",
    key: "dashboard",
    icon: <DashboardIcon sx={{color:'white'}} fontSize="small">dashboard</DashboardIcon>,
    route: "/admin/dashboard",
    component: <Dashboard />,
  },
  {
    name: "Teams",
    key: "teams",
    icon: <GroupsIcon sx={{color:'white'}} fontSize="small">teams</GroupsIcon>,
    route: "/admin/teams",
    component: <Teams />,
  },
  {
    name: "Message",
    key: "message",
    icon: <MessageIcon sx={{color:'white'}} fontSize="small">message</MessageIcon>,
    route: "/admin/message",
    component: <Message />,
  },

];

export default routes;
