import { List, ListItemText, Typography, Link } from '@mui/material';
import MuiListItemButton from '@mui/material/ListItemButton';
import { styled } from '@mui/material/styles';

const ListItemButton = styled(MuiListItemButton)(() => ({
    '&:hover': {
        background: 'transparent'
    },
}))

const HeaderMenu = () => {
    return (
        <List sx={{ display: 'flex', justifyContent: 'center' }} ><ListItemButton component={Link} to="#about">
            <ListItemText><Typography variant='menuItem'>About us</Typography></ListItemText>
        </ListItemButton>
            <ListItemButton component={Link} to="#plants">
                <ListItemText><Typography variant='menuItem'>Plants</Typography></ListItemText>
            </ListItemButton>
            <ListItemButton component={Link} to="#bestsellers">
                <ListItemText><Typography variant='menuItem'>Pick of the Month</Typography></ListItemText>
            </ListItemButton>
            <ListItemButton component={Link} to="#pricing">
                <ListItemText><Typography variant='menuItem'>Pricing</Typography></ListItemText>
            </ListItemButton>
            <ListItemButton component={Link} to="#contacts">
                <ListItemText><Typography variant='menuItem'>Contact us</Typography></ListItemText>
            </ListItemButton>
        </List>
    )
}

export default HeaderMenu;