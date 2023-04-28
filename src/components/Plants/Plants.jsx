import { Typography, Box } from '@mui/material';
import MuiBox from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import MuiTab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useState } from 'react';
import CardPlant from './CardPlant'

const TextWrapper = styled(MuiBox)(() => ({
    textAlign: 'center',
    marginTop: '-120px',
    [`@media screen and (max-width: 900px)`]: {
        marginTop: 0
    },
}))

const Plants = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <TextWrapper id="plants">
                <Typography variant='h2'>―WHAT WE OFFER―</Typography>
                <Typography variant='h3'>Our Plants</Typography>
                <Typography variant='subtitle'>We sell both indoor and outdoor varieties of plants.</Typography>
            </TextWrapper>
            <Box sx={{ width: '100%', marginTop: '30px' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} centered
                            indicatorColor='secondary'>
                            <MuiTab label="INDOOR" value="1" />
                            <MuiTab label="OUTDOOR" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1" sx={{ display: 'grid', gridTemplateColumns: { lg: '1fr 1fr 1fr 1fr', md: '1fr 1fr', xs: '1fr' }, gap: '20px', marginTop: '20px' }}>
                        <CardPlant src="https://res2.weblium.site/res/5ed0f79571a6c000211a3d8a/5ed8c0347e2944002137b5ec_optimized_1396?nowebp"
                            title='Small Ornamental Plants'
                            description="Such plants will fit on any windowsill, decorate your home or work table. Chlorophytum, money plants, aglaonema are not demanding in care but very beautiful." />
                        <CardPlant src="https://res2.weblium.site/res/5ed0f79571a6c000211a3d8a/5ed8c0941fc0da002180419d_optimized_1396_c1396x930-0x0?nowebp"
                            title='Indoor Trees'
                            description="It's a beautiful and original option for a large room. A small indoor tree will add some zest to the office or a large living room. Large dracaena, ficus, alocasia will be a great option for your space." />
                        <CardPlant src="https://res2.weblium.site/res/5ed0f79571a6c000211a3d8a/5ed8c0fc0343780021054554_optimized_1004_c930x1395-49x111?nowebp"
                            title='Plants in Florarium'
                            description="These are neatly planted compositions of succulents, grassroots, decorative ferns. Plants are selected so that they are in perfect harmony. Order your unique set of plants!" />
                        <CardPlant src="https://res2.weblium.site/res/5ed0f79571a6c000211a3d8a/5ed8c17c7e2944002137bd04_optimized_1500_c1239x826-17x12?nowebp"
                            title='Big Ornamental Plants'
                            description="Charming pachypodium, yucca, monstera will become a stunning decoration of your room or office. These plants will make a great impression on your guests." />
                    </TabPanel>
                    <TabPanel value="2" sx={{ display: 'grid', gridTemplateColumns: { lg: '1fr 1fr 1fr 1fr', md: '1fr 1fr', xs: '1fr' }, gap: '20px', marginTop: '-48px' }}>
                        <CardPlant src="https://res2.weblium.site/res/5ed0f79571a6c000211a3d8a/5ed8c1dd836b3b00220597b6_optimized_1500_c1500x750-0x0?nowebp"
                            title='Outdoor Flowers'
                            description="Flowers form the basis of the exterior and are the first to catch the eye. Charming anemones, freesia, lilies will provide brightness and a pleasant aroma. Choose your outdoor flower!" />
                        <CardPlant src="https://res2.weblium.site/res/5ed0f79571a6c000211a3d8a/5ed8c30fbebfe6002207fc47_optimized_929_c929x1398-0x0_flop?nowebp"
                            title='Succulents'
                            description="Succulents do not require constant care, perfectly take root in any yard, look nice, and stylish. We will help you to create the optimal composition of succulents in your garden." />
                        <CardPlant src="https://res2.weblium.site/res/5ed0f79571a6c000211a3d8a/5ed8c2217e2944002137be18_optimized_1396_c1396x930-0x0?nowebp"
                            title='Decorative Moss'
                            description="Decorative moss and lichen will make the garden truly special. Thanks to their density, coloring, and appearance, you can create a unique picture on the site." />
                        <CardPlant src="https://res2.weblium.site/res/5ed0f79571a6c000211a3d8a/5ed8c3b20343780021055026_optimized_1500_c1500x691-0x0?nowebp"
                            title='Decorative Conifers'
                            description="The real decoration of any yard is decorative coniferous trees. Thuja, mountain pines, cedar pines will charm anyone! These are unpretentious, but very beautiful trees." />
                    </TabPanel>
                </TabContext>
            </Box>
        </Box>
    )
}

export default Plants