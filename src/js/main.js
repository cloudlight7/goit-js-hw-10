import SlimSelect from 'slim-select'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCatByBreed, fetchBreeds } from "./cat-api";

const select = document.querySelector('.breed-select');
const loadText = document.querySelector(".loader");
const errorText = document.querySelector(".error");
const catInfo = document.querySelector(".cat-info");

errorText.classList.toggle("display-non");
select.classList.toggle("display-non");
fetchBreeds()
  .then(data => {
    select.classList.toggle("display-non");
    loadText.classList.toggle("display-non");
 //   console.log(data);
   
  for (const val of data) {
  const optionEl = document.createElement("option");
  optionEl.value = val.id;
  optionEl.textContent = val.name;
    select.prepend(optionEl);
    }
 new SlimSelect({
  select: select
    })

  })
  .catch(error => {
    loadText.classList.toggle("display-non");
    errorText.classList.toggle("display-non");
    Notify.failure(error);
  });



select.addEventListener("change", checkId);

function checkId(id) {
  fetchCatByBreed(id)
    .then(data => {
   //   console.log(data);
      const { description, temperament, name } = data[0].breeds[0];
       
     const markUp = data
         .map(({ url}) => 
           ` <img class="cat_img" src="${url}" alt="#" width ="300" />
             <div class="cat-info--text">
                <h2> ${name}</h2>
                <p>${description}</p>
                <p><b>Temperament:</b> ${temperament} </p></div>`)
            .join("");
        catInfo.innerHTML=markUp;
  })
  .catch(error => {
    Notify.failure(error);
  });
}