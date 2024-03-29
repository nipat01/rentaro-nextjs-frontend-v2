
// const api_url = "https://rentaro-api.herokuapp.com"
const api_url = process.env.NEXT_PUBLIC_API_URL

function getProfileUser(email: any) {
    return fetch(`${api_url}/user/${email}`)
        .then(data => data.json())
}


function createOrUpdateUser(input: any) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input)
    };
    return fetch(`${api_url}/user`, requestOptions)
        .then(response => {
            // console.log("response =>", response);
            return response.json()

        });
}

function createCar(input: any) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input)
    };
    return fetch(`${api_url}/car`, requestOptions)
        .then(response => {
            // console.log("response =>", response);
            return response.json()

        });

}

function editCar(input: any) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input)
    };
    return fetch(`${api_url}/car`, requestOptions)
        .then(response => {
            console.log("response =>", response);
            return response.json()

        });

}

function deleteCarByCarId(carId: any) {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };
    return fetch(`${api_url}/car/${carId}`, requestOptions)
        .then(response => {
            console.log("response =>", response);
            return response

        });

}

function getCarByOwnerId(email: any) {
    return fetch(`${api_url}/car/ownerid/${email}`)
        .then(data => data.json())
}

function getCarAll() {
    return fetch(`${api_url}/car`)
        .then(data => data.json())
}

function getCarByCarId(id: any) {
    console.log("id =>", id);

    return fetch(`${api_url}/car/${id}`)
        .then(data => data.json())
}

function createRental(input: any) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input)
    };
    return fetch(`${api_url}/rental`, requestOptions)
        .then(response => {
            // console.log("response =>", response);
            return response.json()

        });
}

function getRentalByRenterId(email: any) {
    return fetch(`${api_url}/rental/renterid/${email}`)
        .then(data => data.json())
}

function getRentalByOwnerId(email: any) {
    return fetch(`${api_url}/rental/ownerid/${email}`)
        .then(data => data.json())
}

function getRentalByCarId(carId: any) {
    return fetch(`${api_url}/rental/carid/${carId}`)
        .then(data => data.json())
}

function updateRental(input: any) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input)
    };
    return fetch(`${api_url}/rental`, requestOptions)
        .then(response => {
            // console.log("response =>", response);
            return response.json()

        });
}



export {
    getProfileUser,
    createOrUpdateUser,
    createCar,
    getCarByOwnerId,
    getCarAll,
    getCarByCarId,
    editCar,
    deleteCarByCarId,
    createRental,
    getRentalByRenterId,
    getRentalByOwnerId,
    getRentalByCarId,
    updateRental
}