import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_h0WFgAse8TYm29CNZSowThgJzTqjYogyyXhBQhJWCUQ059vHXvpXSj3L2l5Z5H5e";

const API_KEY = "live_h0WFgAse8TYm29CNZSowThgJzTqjYogyyXhBQhJWCUQ059vHXvpXSj3L2l5Z5H5e";
const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
const CAT_URL = 'https://api.thecatapi.com/v1/images/search?breed_ids=';



function fetchBreeds() {
  
    return fetch(BASE_URL).then(
        (response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
}

function fetchCatByBreed(breedId) {
    
  const selectedOptionValue = breedId.currentTarget.value;
    return fetch(`${CAT_URL}${selectedOptionValue}`, {
        headers: {
        'x-api-key': API_KEY 
    }}).then(
        (response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
  
}
export { fetchCatByBreed, fetchBreeds };