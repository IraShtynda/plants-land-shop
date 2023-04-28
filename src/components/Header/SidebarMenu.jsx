import { Box, Drawer, Button, List, ListItemText, Typography, Link} from '@mui/material';
import MuiListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Colors } from '../../styles/index';
import { styled } from '@mui/material/styles'

const ListItemButton = styled(MuiListItemButton)(() => ({
    borderBottom: `1px solid ${Colors.accent}`,
    padding: '20px 5px 5px 0'
}))

const SidebarMenu = function TemporaryDrawer() {
    const [state, setState] = useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            onKeyDown={toggleDrawer(anchor, false)}
            sx={{ background: `${Colors.secondary}`, height: '100%' }}
        >
            <List sx={{ margin: '20px', color: `${Colors.primary}`, width: '250px', flexDirection: 'column' }} onClick={toggleDrawer(anchor, false)}> <ListItemButton component={Link} to="#about">
                <ListItemText><Typography variant='menuItemMobile'>About us</Typography></ListItemText>
            </ListItemButton>
                <ListItemButton component={Link} to="#plants">
                    <ListItemText><Typography variant='menuItemMobile'>Plants</Typography></ListItemText>
                </ListItemButton>
                <ListItemButton component={Link} to="#bestsellers">
                    <ListItemText><Typography variant='menuItemMobile'>Pick of the Month</Typography></ListItemText>
                </ListItemButton>
                <ListItemButton component={Link} to="#pricing">
                    <ListItemText><Typography variant='menuItemMobile'>Pricing</Typography></ListItemText>
                </ListItemButton>
                <ListItemButton component={Link} to="#contacts">
                    <ListItemText><Typography variant='menuItemMobile'>Contact us</Typography></ListItemText>
                </ListItemButton>
            </List>
        </Box>
    );

    return (
        <Box>
            {['right'].map((anchor) => (
                <Box key={anchor}>
                    <Button onClick={toggleDrawer('right', true)}><MenuIcon color='info' /></Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </Box>
            ))}
        </Box>
    );
}
export default SidebarMenu;