import { Typography, Container } from '@mui/material';
import MuiBox from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { DesktopCarousel, TabletCarousel, MobileCarousel } from './Carousels'

const TextWrapper = styled(MuiBox)(() => ({
    textAlign: 'center',
    padding: '60px 24px 0 24px',
}))

const CarouselWrapper = styled(MuiBox)(() => ({
    margin: '40px 0',
    padding: '0 24px'
}))

const Bestsellers = () => {
    const isDesktop = useMediaQuery('(min-width:1200px)');
    const isTablet = useMediaQuery('(min-width:900px)');

    return (<Container id="bestsellers">
        <TextWrapper>
            <Typography variant='h2'>―BESTSELLERS―</Typography>
            <Typography variant='h3'>Plants of the Month</Typography>
        </TextWrapper>
        <CarouselWrapper>
            {isDesktop ? <DesktopCarousel /> : isTablet ? <TabletCarousel /> : <MobileCarousel />}
        </CarouselWrapper>
    </Container>
    )
}

export default Bestsellers