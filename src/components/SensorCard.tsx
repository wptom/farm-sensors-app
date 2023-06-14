import {Card, CardContent, Typography, Button} from '@mui/material';
import {NavLink} from 'react-router-dom';

interface Sensor {
    id: string;
    name: string;
    description: string;
    coordinates: [number, number];
}

const SensorCard = ({ sensor }: { sensor: Sensor }) => {

    return (
        <Card className="card" component="article">
            <CardContent className="card__content">
                <Typography variant="h5" component="h2" mb={2}>{sensor.name}</Typography>
                <Typography className="card__description" variant="body1" style={{flexGrow: 1}} mb={3}>{sensor.description}</Typography>
                <div className="card__btn-container">
                    <Button
                        component={NavLink}
                        to={`/detail/${sensor.id}`}
                        variant="contained"
                        state={sensor}
                    >
                        View Detail
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default SensorCard;
