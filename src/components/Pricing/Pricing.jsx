import { Container, Typography, Grid } from '@mui/material';
import MuiBox from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Colors } from '../../styles/index';
import CardPricing from './CardPricing'

const PricingWrapper = styled(MuiBox)(() => ({
    padding: '90px 0 0',
    backgroundColor: `${Colors.body_bg}`,
}))
const TextWrapper = styled(MuiBox)(() => ({
    textAlign: 'center',
    marginBottom: '10px'
}))


const Pricing = () => {
    return (
        <PricingWrapper xs={{ backgroundColor: 'inherit' }} id="pricing">
            <Container>
                <TextWrapper>
                    <Typography variant='h2'>―PRICING―</Typography>
                    <Typography variant='h3'>Best Prices for Plants</Typography>
                    <Typography variant='subtitle'>We offer affordable and prices for flowers, indoor and outdoor plants. </Typography>
                </TextWrapper>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={3}><CardPricing price={20} title='Small plants' itemOne='Money Plant' itemTwo='Bryophyllum' itemThree='Philodendron' /></Grid>
                    <Grid item xs={12} md={6} lg={3}><CardPricing price={30} title='Succulents' itemOne='Graptosedum' itemTwo='Elephant bush' itemThree='Crassula ovata' /></Grid>
                    <Grid item xs={12} md={6} lg={3}><CardPricing price={20} title='Trees' itemOne='Raphis Palm' itemTwo='Cedar pine' itemThree='Thuja' /></Grid>
                    <Grid item xs={12} md={6} lg={3}><CardPricing price={25} title='Big plants' itemOne='Dracaena' itemTwo='Dieffenbachia' itemThree='Rubber Tree' /></Grid>
                </Grid>
            </Container>
            <img src="https://res2.weblium.site/res/5ed0f79571a6c000211a3d8a/5ed8acf67e2944002137609b_optimized_1920.webp" alt='Illustration' style={{ display: 'block', width: '100%' }}></img>
        </PricingWrapper >
    )
}

export default Pricing