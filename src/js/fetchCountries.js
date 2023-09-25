import { fetchCatByBreed, fetchBreeds } from "./cat-api";
//import axios from "axios";
//axios.defaults.headers.common["x-api-key"] = "live_h0WFgAse8TYm29CNZSowThgJzTqjYogyyXhBQhJWCUQ059vHXvpXSj3L2l5Z5H5e";

const select = document.querySelector('.breed-select');
const loadText = document.querySelector(".loader");
const errorText = document.querySelector(".error");
const catInfo = document.querySelector(".cat-info");

errorText.classList.toggle("display-non");
select.classList.toggle("display-non");

const mass = [];
fetchBreeds()
  .then(data => {
    select.classList.toggle("display-non");
    loadText.classList.toggle("display-non");
    //console.log(data);
  
  for (const val of data) {
  //console.log(JSON.stringify(val));
  mass.push(val);
  const optionEl = document.createElement("option");
  optionEl.value = val.id;
  optionEl.textContent = val.name;
  select.prepend(optionEl);
    }
    console.log(mass);
    
  })
  .catch(error => {
    console.log(error);
  });


select.addEventListener("change", checkId);

function checkId(id) {
//const checoutMass = json(mass);
//console.log(id.currentTarget.value);
 //const optId = checoutMass.find(({ idMass }) => idMass == id.currentTarget.value);
  //console.log(optId);
 // console.log(optId);
  fetchCatByBreed(id)
    .then(data => {
      //console.log(mass[0]);
      console.log(data[0].breeds[0]);
          const img = document.querySelector('img');
          if (img !== null){img.remove();}
          const image = document.createElement("img");
          image.src = data[0].url;
          image.alt = "Cat";
          image.width = 100;
          catInfo.prepend(image);
    // Data handling
  })
  .catch(error => {
    console.log(error);
  });
}