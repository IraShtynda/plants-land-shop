import { Container, Typography, List, ListItemText, ListItemButton, Link } from '@mui/material';
import MuiBox from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Colors } from '../styles/index'

const FooterWrapper = styled(MuiBox)(() => ({
    paddingTop: '60px',
    background: Colors.secondary,
}))
const TopFooterWrapper = styled(MuiBox)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    [`@media screen and (max-width: 600px)`]: {
        flexDirection: 'column',
        gap: '20px'
    },
    alignItems: 'center',
    paddingBottom: '15px',
    borderBottom: `1px solid ${Colors.accent}`
}))
const BottomFooterWrapper = styled(MuiBox)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '15px',
    paddingTop: '15px',
}))
const FooterList = styled(List)(() => ({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    [`@media screen and (max-width: 900px)`]: {
        flexDirection: 'column',
        gap: 0
    },
    alignItems: 'center',
    gap: '20px'
}))

const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                <TopFooterWrapper>
                    <img src='https://res2.weblium.site/res/5ed0f79571a6c000211a3d8a/5eda27980b6acf002134e8aa?nowebp' alt='PlantLand' width={160}></img>
                    <FooterList><ListItemButton component={Link} to="#about">
                        <ListItemText><Typography variant='menuItem' color='primary'>About us</Typography></ListItemText>
                    </ListItemButton>
                        <ListItemButton component={Link} to="#plants">
                            <ListItemText><Typography variant='footerMenuItem'>Plants</Typography></ListItemText>
                        </ListItemButton>
                        <ListItemButton component={Link} to="#bestsellers">
                            <ListItemText><Typography variant='footerMenuItem'>Pick of the Month</Typography></ListItemText>
                        </ListItemButton>
                        <ListItemButton component={Link} to="#pricing">
                            <ListItemText><Typography variant='footerMenuItem'>Pricing</Typography></ListItemText>
                        </ListItemButton>
                        <ListItemButton component={Link} to="#contacts">
                            <ListItemText><Typography variant='footerMenuItem'>Contact us</Typography></ListItemText>
                        </ListItemButton>
                    </FooterList>
                </TopFooterWrapper>
                <BottomFooterWrapper>
                    <Typography variant='p'>© Created by</Typography>
                    <Typography variant='p'>All rights Reserved</Typography>
                </BottomFooterWrapper>
            </Container>
        </FooterWrapper>
    )
}

export default Footer