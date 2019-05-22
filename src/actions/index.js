const ROOT_URL = 'https://wagon-garage-api.herokuapp.com';
// const API_KEY = 'LEWAGON-BLOG';
export const FETCH_CARS = 'FETCH_CARS';
export const FETCH_CAR = 'FETCH_CAR';
export const CAR_CREATED = 'CAR_CREATED';
export const CAR_DELETED = 'CAR_DELETED';

export function fetchCars(garage) {
  const promise = fetch(`${ROOT_URL}/${garage}/cars`)
  .then(response => response.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function fetchCar(id) {
  const promise = fetch(`${ROOT_URL}/cars/${id}`)
  .then(response => response.json())

  return {
    type: FETCH_CAR,
    payload: promise
  }
}

export function createCar(garage, car, callback) {
  const request = fetch(`${ROOT_URL}/${garage}/cars`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(car)
    }).then(response => response.json())
    .then(() => callback());

  return {
    type: CAR_CREATED,
    payload: request
  };
}

export function deleteCar(history, id) {
  const request = fetch(`${ROOT_URL}/cars/${id}`, {
    method: 'DELETE'
  }).then(response => response.json())
  .then(() => history.push(""));

  return {
    type: CAR_DELETED,
    payload: request
  }
}
