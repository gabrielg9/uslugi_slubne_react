import axios from 'axios';

export const findCar = car => {
    return axios
        .post('http://localhost:4000/products/type', {
            type: car.type
        })
        .then(res => {
            return res.data
        })
}
