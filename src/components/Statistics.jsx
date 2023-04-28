import { Container, Typography, Grid } from '@mui/material';
import MuiBox from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Colors } from '../styles/index'

const StatisticsWrapper = styled(MuiBox)(() => ({
    padding: '60px 0',
    background: Colors.secondary,
}))
const CountWrapper = styled(MuiBox)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '10px',
    marginBottom: '10px',
}))

const Statistics = () => {
    return (
        <StatisticsWrapper>
            <Container>
                <Grid container spacing={2}>
                    <Grid item lg={3} md={6} xs={12}>
                        <CountWrapper>
                            <Typography variant='count'>120+</Typography>
                            <Typography variant='countTitle'>FLOWERS</Typography>
                        </CountWrapper>
                    </Grid>
                    <Grid item lg={3} md={6} xs={12}>
                        <CountWrapper>
                            <Typography variant='count'>239+</Typography>
                            <Typography variant='countTitle'>EVERGREENS</Typography>
                        </CountWrapper>
                    </Grid>
                    <Grid item lg={3} md={6} xs={12}>
                        <CountWrapper>
                            <Typography variant='count'>148+</Typography>
                            <Typography variant='countTitle'>SUCCULENTS</Typography>
                        </CountWrapper>
                    </Grid>
                    <Grid item lg={3} md={6} xs={12}>
                        <CountWrapper>
                            <Typography variant='count'>150+</Typography>
                            <Typography variant='countTitle'>PALM TREES</Typography>
                        </CountWrapper>
                    </Grid>
                </Grid>
            </Container>
        </StatisticsWrapper>
    )
}

export default Statistics