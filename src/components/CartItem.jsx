import { ListItem, Typography, Grid} from '@mui/material';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart_slice';
import MuiButton from '@mui/material/Button';
import {Colors} from '../styles/index'

const CartItem = ({ id, imgPath, title, price, quantity, totalPrice }) => {

    const dispatch = useDispatch();
    return (
        <ListItem sx={{ borderBottom: `1px solid ${Colors.gray}`, padding: '10px 0' }}>
            <Grid container spacing={1} alignItems='center'>
                <Grid item xs={4} md={2} lg={2}><img src={imgPath} alt={title} height='60px' width='60px' /></Grid>
                <Grid item xs={8} md={6} lg={6}><Typography variant='basketText'>{title}</Typography></Grid> 
                <Grid item xs={8} md={3} lg={3}><MuiButton variant='counter' onClick={() => dispatch(cartActions.removeItemFromCart({ id }))}>-</MuiButton>
                    <Typography variant='subtitle' sx={{ padding: '0 10px' }}>{quantity}</Typography>
                    <MuiButton variant='counter' onClick={() => dispatch(cartActions.addItemToCart({ id, title, price }))}>+</MuiButton></Grid>
                <Grid item xs={4} md={1} lg={1}>
                    <Typography variant='subtitle'>${totalPrice}</Typography>
                </Grid>
            </Grid> 
        </ListItem>
    );
};

export default CartItem;