import {useContext} from 'react';
import {DataContext} from "../context/DataContext.jsx";
import {Container, Grid} from "@mui/material";
import SensorCard from "./SensorCard.tsx";

const SensorsList = () => {
    const sensors = useContext(DataContext);

    return (
        <Container fixed component={'section'}>
            <Grid container spacing={2}>
                {sensors.map((sensor) => (
                    <Grid item xs={12} sm={6} md={4} key={sensor["id"]}>
                        <SensorCard sensor={sensor}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default SensorsList;
