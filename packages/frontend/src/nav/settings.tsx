import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Badge,
  Typography,
  styled,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import shallow from 'zustand/shallow';
import { useDrawerStore, useFriendsStore, PartialUser } from '../store';

const settings = ['Profile', 'Dashboard', 'Logout'];

export default function FriendsAndSettings() {
  const state = useDrawerStore(state => state);

  return (
    <Box>
      <Box
        sx={{
          width: 250,
          height: '100%',
        }}
        onClick={state.toggleRightDrawer(false)}
        onKeyDown={state.toggleRightDrawer(false)}
        color='rgba(0, 0, 0, 0.84)'
      >
        <Settings />
        <Divider />
        <Friends />
      </Box>
    </Box>
  );
}

function Settings() {
  let navigate = useNavigate();

  return (
    <List>
      <ListItem>
        <ListItemText disableTypography>
          <Typography variant='h5'>Settings</Typography>
        </ListItemText>
      </ListItem>
      {settings.map(text => (
        <ListItem key={text} disablePadding>
          <ListItemButton onClick={() => navigate(text.toLowerCase())}>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

function Friend({ friend }: { friend: PartialUser }) {
  return (
    <Paper
      elevation={0.1}
      sx={{
        marginBottom: 0.5,
      }}
    >
      <ListItem>
        <Badge
          color='success'
          overlap='circular'
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant='dot'
          sx={{
            marginRight: 2,
            '& .MuiBadge-dot': {
              backgroundColor: '#44b700',
              color: '#44b700',
              boxShadow: `0 0 0 2px #fff`,
            },
          }}
        >
          <Avatar src={friend.avatar} />
        </Badge>
        <ListItemText disableTypography>
          <Typography variant='h6' sx={{ fontSize: '.9rem' }}>
            {friend.name}
          </Typography>
        </ListItemText>
      </ListItem>
    </Paper>
  );
}

function Friends() {
  const friends = useFriendsStore(state => state.friends) ?? [];

  return (
    <List>
      <ListItem>
        <ListItemText disableTypography>
          <Typography variant='h5'>Friends</Typography>
        </ListItemText>
      </ListItem>
      {friends.map(friend => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </List>
  );
}
