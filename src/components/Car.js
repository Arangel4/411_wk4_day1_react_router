import React from 'react'
import cars from '../cars.json'
import { Container, Paper, Chip } from '@material-ui/core';
// import material ui components here //
// Container, Paper, Chip //

const Car = (props) => {
    // props.match.params is used to get the parameter being passed in the URL.
    let id = props.match.params.id;

    // To find the car, id  is used from the cars.json file.
    let findCar = cars.find(c => c.id == id)

    return (
        // Create container to paper element with each individual chip element pulled from findCar variable.
        <Container className="car-container">
            <div className="centerCarContainer">
            <Paper className="car-paper">
                <h2>{`${findCar.Name}`}</h2>
            <Chip label={`Id: ${findCar.id}`}></Chip>
              <Chip label={`Name: ${findCar.Name}`}></Chip>
              <Chip label={`Acceleration: ${findCar.Acceleration}`}></Chip>
              <Chip label={`Cylinders: ${findCar.Cylinders}`}></Chip>
              <Chip label={`Displacement: ${findCar.Displacement}`}></Chip>
              <Chip label={`Horsepower: ${findCar.Horsepower}`}></Chip>
              <Chip label={`Miles_per_Gallan: ${findCar.Miles_per_Gallon}`}></Chip>
              <Chip label={`Origin: ${findCar.Origin}`}></Chip>
              <Chip label={`Weight_in_lbs: ${findCar.Weight_in_lbs}`}></Chip>
            </Paper>
            </div>
        </Container>
    )
}

export default Car