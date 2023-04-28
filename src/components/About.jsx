import { Container, Typography, ListItem, Grid } from '@mui/material';
import MuiList from '@mui/material/List';
import MuiBox from '@mui/material/Box';
import MuiButton from '@mui/material/Button';
import MuiLink from '@mui/material/Link';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { styled } from '@mui/material/styles';
import { Colors } from '../styles/index'

const AboutWrapper = styled(MuiBox)(() => ({
    padding: '90px 0 0',
    background: `${Colors.body_bg}`,
}))

const List = styled(MuiList)(() => ({
    margin: '15px 0'
}))

const CircleIcon = styled(FiberManualRecordIcon)(() => ({
    fontSize: '10px',
    marginRight: '10px',
    color: `${Colors.secondary}`
}))


const About = () => {
    return (
        <AboutWrapper xs={{ background: 'inherit' }} id='about'>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h2'>―ABOUT US―</Typography>
                        <Typography variant='h3'>Fill Your Home and Garden With Beautiful, Green Plants!</Typography>
                        <Typography variant='p'>Our shop offers you to buy home plants to decorate your home or office. In our offline shop, you will find the best selection of flowers and evergreens at attractive prices. We get indoor flowers from the best suppliers in NY, all plants are grown with strict adherence to technology. We offer:</Typography>
                        <List>
                            <ListItem><CircleIcon /><Typography variant='aboutListItem'>LARGE SELECTION OF DIFFERENT PLANTS</Typography></ListItem>
                            <ListItem><CircleIcon /><Typography variant='aboutListItem'>RELATED SERVICES AND HOME GOODS</Typography></ListItem>
                        </List>
                        <MuiLink href="#bestsellers"><MuiButton variant='primary'>BROWSE PLANTS</MuiButton></MuiLink>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src='//res2.weblium.site/res/5ed0f79571a6c000211a3d8a/5ed8ce9c0343780021056d73_optimized_1229?nowebp' alt='Illustration' style={{ display: 'block', width: '100%' }}></img>
                    </Grid>
                </Grid>
            </Container>
            <img src="https://res2.weblium.site/res/5ed0f79571a6c000211a3d8a/5ed8acf67e2944002137609b_optimized_1920.webp" alt='Illustration' style={{ display: 'block', width: '100%' }}></img>
        </AboutWrapper>
    )
}

export default About