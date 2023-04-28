import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MuiTypography from '@mui/material/Typography';
import MuiBox from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Colors } from '../styles/index';
import { Box, List, Typography, Modal } from '@mui/material';
import { useState } from 'react';
import { selectItems, selectTotalQuantity, selectTotalSum } from '../store/cart_slice';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const BasketWrapper = styled(MuiBox)(() => ({
    position: 'fixed',
    background: Colors.primary,
    top: 66,
    right: 24,
    borderRadius: '40px',
    zIndex: 10,
    boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)'
}))
const BasketIcon = styled(ShoppingBagOutlinedIcon)(() => ({
    width: '50px',
    height: '50px',
    margin: '10px 12px',
    stroke: "#ffffff",
    strokeWidth: '1px'
}))
const TotalQuantity = styled(MuiTypography)(() => ({
    fontFamily: 'Lora',
    fontSize: '14px',
    fontWeight: 400,
    position: 'fixed',
    top: 66,
    right: 24,
    color: Colors.primary,
    background: Colors.accent,
    padding: '1px 8px',
    borderRadius: '12px',
}))
const CartWrapper = styled(MuiBox)(() => ({
    position: 'absolute',
    background: Colors.primary,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    [`@media screen and (max-width: 600px)`]: {
        width: '300px',
        padding: '10px',
    },
    boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
    padding: '30px',
}))

const Basket = () => {
    const items = useSelector(selectItems);
    const totalQuantity = useSelector(selectTotalQuantity);
    const totalSum = useSelector(selectTotalSum);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (<>{(totalQuantity !== 0) && <Box>
        <BasketWrapper>
             <BasketIcon onClick={handleOpen} />
            <TotalQuantity>{totalQuantity}</TotalQuantity> 
        </BasketWrapper>
            <Modal
                open={open}
            onClose={handleClose}
            >
            <CartWrapper>
                    <Typography variant="h5">
                        Shopping cart
                    </Typography>
                    <List>
                        {items.map((item) => (<CartItem
                            key={item.id}
                            id={item.id}
                            imgPath={item.imgPath}
                            title={item.title}
                            price={item.price}
                            quantity={item.quantity}
                            totalPrice={item.totalPrice}
                        />))}
                </List>
                <Typography variant='basketText' sx={{ textAlign: 'right', width: '100%', display: 'block' }} >Total price: ${totalSum}</Typography>
                </CartWrapper>
            </Modal>
    </Box>}</>)
}

export default Basket