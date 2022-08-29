import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import TimerIcon from '@mui/icons-material/Timer';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SettingsIcon from '@mui/icons-material/Settings';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import EmailIcon from '@mui/icons-material/Email';
import './Content.css'
import { NavLink } from 'react-router-dom';
import OffreInfo from './OffreInfo';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import FeedIcon from '@mui/icons-material/Feed';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LogoutIcon from '@mui/icons-material/Logout';
const categories = [
  {
    id: 'Généralités',
    children: [
      {
        id: 'Messages',
        icon: <NavLink to ="/list"> <EmailIcon /> </NavLink>,
        active: true,
               
      },
      { id: 'Offres de travail', icon: <NavLink to ="/offres"><WorkHistoryIcon />             
    
       
        </NavLink> , 
    },
      { id: 'Ajouter une offre', icon: <NavLink to ="/AddOffreAdmin"><AddCircleIcon /> </NavLink>},
      { id: 'Supprimer une offre', icon: <NavLink to ="/list"> <RemoveCircleIcon /> </NavLink>},
      { id: 'Les postulations', icon: <NavLink to ="/postulationadmin"><GroupIcon /></NavLink> },
      {
        id: 'Les candidatures spontanées',
        icon: <NavLink to ="/CandidatureList"> <WorkIcon /> </NavLink>,
      },
      {
        id: 'Dossiers de candidatures  ',
        icon: <NavLink to ="/cvcandidatures"> <FeedIcon /> </NavLink>,
      },
    ],
  },
  {
    id: 'Mon Profil',
    children: [
      { id: 'Paramétres', icon: <NavLink to =""><SettingsIcon /> </NavLink> },
      { id: 'Profil', icon:<NavLink to=""> <AssignmentIndIcon /></NavLink>  },
      { id: 'Déconnexion', icon: <NavLink to =""><LogoutIcon /> </NavLink> },
    ],
  },
];

const item = {
  py: '2px',
  px: 3,
  color: 'black',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

export default function Navigator(props) {
  const { ...other } = props;

  return (
    <Drawer  variant="permanent"  {...other}>
      <List  style={{ background: '#a2a7a5' }} disablePadding>
        <ListItem  style={{ background: '#6D696A' }} sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
          Paperbase
        </ListItem>
        <br></br>
        <br></br>
        <ListItem   style={{ background: '#a2a7a5' }} sx={{ ...item, ...itemCategory }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText > <td >Accueil</td></ListItemText>
        </ListItem>
        <br
        ></br>
    
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#a2a7a5' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
           
       
              <ListItemText sx={{ color: 'black' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active }) => (
              <ListItem disablePadding key={childId}>
                <ListItemButton selected={active} sx={item}>
                  <ListItemIcon>{icon} </ListItemIcon>
      
  
       
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}

            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
