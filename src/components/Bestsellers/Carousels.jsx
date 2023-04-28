import { Grid } from '@mui/material';
import Item from './Item';
import { items } from './ItemsData';
import Carousel from 'react-material-ui-carousel';
import { Colors } from '../../styles/index';

export const DesktopCarousel = () => {
    return (<Carousel navButtonsAlwaysVisible={true}
        navButtonsProps={{
            style: {
                background: Colors.primary,
                color: Colors.black,
                padding: 0,
                margin: '-10px',
                width: '30px',
                height: '30px'
            }
        }}>
        <Grid container spacing={2}>
            <Grid item lg={3}>
                <Item item={items[0]} />
            </Grid>
            <Grid item lg={3}>
                <Item item={items[1]} />
            </Grid>
            <Grid item lg={3}>
                <Item item={items[2]} />
            </Grid>
            <Grid item lg={3}>
                <Item item={items[3]} />
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid item lg={3}>
                <Item item={items[4]} />
            </Grid>
            <Grid item lg={3}>
                <Item item={items[5]} />
            </Grid>
            <Grid item lg={3}>
                <Item item={items[6]} />
            </Grid>
            <Grid item lg={3}>
                <Item item={items[7]} />
            </Grid>
        </Grid>
    </Carousel>
    )
}

export const TabletCarousel = () => {
    return (<Carousel navButtonsAlwaysVisible={true}
        navButtonsProps={{
            style: {
                background: Colors.primary,
                color: Colors.black,
                padding: 0,
                margin: '-10px',
                width: '30px',
                height: '30px'

            }
        }}>
        <Grid container spacing={2}>
            <Grid item md={6}>
                <Item item={items[0]} lg={3} />
            </Grid>
            <Grid item md={6}>
                <Item item={items[1]} lg={3} />
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid item md={6}>
                <Item item={items[2]} />
            </Grid>
            <Grid item md={6}>
                <Item item={items[3]} />
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid item md={6}>
                <Item item={items[4]} />
            </Grid>
            <Grid item md={6}>
                <Item item={items[5]} />
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid item md={6}>
                <Item item={items[6]} />
            </Grid>
            <Grid item md={6}>
                <Item item={items[7]} />
            </Grid>
        </Grid>
    </Carousel>
    )
}

export const MobileCarousel = () => {
    return (<Carousel navButtonsAlwaysVisible={true}
        navButtonsProps={{
            style: {
                background: Colors.primary,
                color: Colors.black,
                padding: 0,
                margin: '-10px',
                width: '30px',
                height: '30px',
            }
        }}>
        <Grid item xs={12}>
            <Item item={items[0]} />
        </Grid>
        <Grid item xs={12}>
            <Item item={items[1]} />
        </Grid>
        <Grid item xs={12}>
            <Item item={items[2]} />
        </Grid>
        <Grid item xs={12}>
            <Item item={items[3]} />
        </Grid>
        <Grid item xs={12}>
            <Item item={items[4]} />
        </Grid>
        <Grid item xs={12}>
            <Item item={items[5]} />
        </Grid>
        <Grid item xs={12}>
            <Item item={items[6]} />
        </Grid>
        <Grid item xs={12}>
            <Item item={items[7]} />
        </Grid>
    </Carousel>
    )
}