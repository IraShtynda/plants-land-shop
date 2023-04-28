import { Typography, Card, CardActions, CardMedia, CardContent } from '@mui/material';
import MuiButton from '@mui/material/Button';
import { cartActions } from '../../store/cart_slice';
import { useDispatch } from 'react-redux';

const Item = ({ item }) => {
    const { id, title, price, imgPath } = item;
    const dispatch = useDispatch();
    return (
        <Card>
            <CardMedia
                component="img"
                src={imgPath}
                alt={title}
                height={360}
            />
            <CardContent sx={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
            }}>
                <Typography variant="subtitle">
                    {title}
                </Typography>
                <Typography variant="h6">
                    ${price}
                </Typography>
            </CardContent>
            <CardActions sx={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <MuiButton variant='primaryOrder' onClick={() => dispatch(cartActions.addItemToCart({ id, imgPath, title, price, quantity: 1 }))}>ORDER NOW</MuiButton>
            </CardActions>
        </Card>
    )
}

export default Item;