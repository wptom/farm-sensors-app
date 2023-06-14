import {useLocation, NavLink} from 'react-router-dom';
import MapComponent from './Map';
import {Button, Container, Typography} from "@mui/material";

const SensorDetail = () => {
    const location = useLocation();
    const data = location.state;

    return (
        <Container fixed component="section">
            <Typography variant="h5" component="h2" mb={2}>{data.name}</Typography>
            <Typography variant="body1" component="p"><strong>Long:</strong> {data.coordinates[0]}</Typography>
            <Typography variant="body1" component="p" mb={5}><strong>Lat:</strong> {data.coordinates[1]}</Typography>
            <MapComponent sensor={data}/>
            <div style={{textAlign: 'center'}}>
                <Button
                    component={NavLink}
                    to={"/"}
                    variant="contained"
                >
                    Go back
                </Button>
            </div>
        </Container>
    );
};

export default SensorDetail;
