import { Container, Typography } from '@mui/material';
import MuiBox from '@mui/material/Box';
import MuiButton from '@mui/material/Button';
import MuiLink from '@mui/material/Link';
import { styled } from '@mui/material/styles'

const BannerWrapper = styled(MuiBox)(() => ({
    padding: '240px 0 160px',
    backgroundImage: `url('//res2.weblium.site/res/5ed0f79571a6c000211a3d8a/5ed8be96bebfe6002207efc0_optimized_1920')`,
    backgroundSize: 'cover',
}))

const TextWrapper = styled(MuiBox)(() => ({
    maxWidth: '600px',
}))

const ButtonWrapper = styled(MuiBox)(() => ({
    display: 'flex',
    flexDirection: 'row',
    gap: '30px',
    [`@media screen and (max-width: 768px)`]: {
        flexDirection: 'column',
    },
    marginTop: '35px',
}))
const Banner = () => {
    return (
        <BannerWrapper>
            <Container>
                <TextWrapper>
                    <Typography variant='h2'>―PLANTLAND―</Typography>
                    <Typography variant='h1'>Make Your Home Green</Typography>
                    <Typography variant='subtitle'>Check out our store in New York with the best indoor & outdoor plants that are suitable for growing exactly in your conditions.</Typography>
                </TextWrapper><ButtonWrapper>
                    <MuiLink href="#bestsellers"><MuiButton variant='primary'>BEST PLANTS</MuiButton></MuiLink>
                    <MuiLink href="#about"><MuiButton variant='secondary'>LEARN MORE</MuiButton></MuiLink>
                </ButtonWrapper>
            </Container>
        </BannerWrapper>
    )
}

export default Banner