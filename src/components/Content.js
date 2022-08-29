import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import useDataContact from '../hooks/useDataContact';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import './Content.css'
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import RefreshIcon from '@mui/icons-material/Refresh';
import { RecordVoiceOver } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';

export default function Content() {
  const [showAddForm, setShowAddForm] = useState(false);
    const { isLoading, isError, data } = useDataContact();
  return (
    <Paper style={{ background: 'white' }} sx={{ maxWidth: 912, margin: 'auto', overflow: 'hidden' }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <EmailIcon color="inherit" sx={{ display: 'block' }} />
            </Grid>
            <Grid item xs>
              <TextField color="black"
                fullWidth
                placeholder="Les derniers contacts"
                InputProps={{
                  disableUnderline: true,
                  sx: { fontSize: '17px' },
                }}
                variant="standard"
              />
            </Grid>
            <Grid item color="black">
              <NavLink to="/admin/messages">
              <Button className='btnmsg' variant="contained" sx={{ mr: 5 }}>
                Afficher tous les messages
              </Button>
              </NavLink>
              <Tooltip title="Reload">
                <IconButton>
                  <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Typography sx={{ my: 3, mx: 10 }} color="black" align="center">
        
      
          {data?.map(records => {
            return<div className='boite'>
             <NavLink to="/offre/id">
           <div>
           
           </div>
              <div >    <hr></hr> Message par:
               {records.fname } {records.lname } </div>
             
               </NavLink>
               </div>
          })}
      
      </Typography>

        
    </Paper>



  );
}
