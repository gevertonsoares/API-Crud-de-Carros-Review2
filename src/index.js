import express, { response } from 'express';
const app = express();
app.use(express.json());

const cars = [];
let contador = 1;

//Mostrar carro por ID
app.get('/cars/:id', (request, response) => {
    let {id} = request.params;
    let car = cars.find((car) => car.id === Number(id));

    if(car) {
        return response.json(car);
    } else {
        return response.status(404).json({message: 'Car not found'});
    }
});


//Mostrar lista de carros
app.get('/cars', (request, response)=>{
    return response.json(cars);
});

//Criar um novo carro
app.post('/cars', (request, response) =>{
    let infoRequest = request.body;
    let newCar = {
        id: contador++,
        model: infoRequest.model,
        brand: infoRequest.brand,
        year: infoRequest.year,
        color: infoRequest.color,
        price: infoRequest.price
    };
    cars.push(newCar);
    return response.status(201).json(newCar);
});

//Atualizar carro por ID
app.put('/cars/:id', (request, response) => {
    let {id} = request.params;
    let upgradeCar = request.body;
    let index = cars.findIndex((car) => car.id === Number(id));


    if (index !== -1) {
        cars[index] = {id: parseInt(id), upgradeCar};
        return response.json(cars[index]);
    } else {
        return response.status(404).json({message: 'Car not found'});
    };
})

//Deletar carro por id
app.delete('/cars/:id', (request, response) => {
    let {id} = request.params;
    let index = cars.findIndex((car) => car.id === Number(id));

    if (index !== -1) {
        cars.splice (index, 1);
        return response.json ({message: 'Car deleted'});
    } else {
        return response.status(404).json ({message: 'Car not found'});
    }
})

app.listen(8080, () => console.log(cars));