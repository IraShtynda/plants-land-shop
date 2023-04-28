import { Typography, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';

const CardPlant = ({ src, title, description }) => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    src={src}
                    alt={title}
                    width={'100%'}
                    height={260}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        {title}
                    </Typography>
                    <Typography variant="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CardPlant;

