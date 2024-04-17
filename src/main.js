import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";


import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import { requestPictures } from "./js/pixabay-api"

import { creatMarkup } from "./js/render-functions";

const form = document.querySelector(".search-form")
const gallery = document.querySelector(".gallery")



form.addEventListener("submit", handelSubmit)


function handelSubmit(event) {
    event.preventDefault();

    const { search } = event.currentTarget.elements;

     if (search.value === "") {
         iziToast.show({
      title: 'error',
      titleColor: 'white',
      message: 'Please find what you want to find',
      messageColor: 'white',
      color: 'red',
      position: 'topCenter',
      timeout: '2000',
        });
      return
       
    }

    requestPictures(search.value)
        .then(boxFoto => {
            gallery.innerHTML = creatMarkup(boxFoto.hits)
            if (boxFoto.total === 0) {
                iziToast.show({
                    title: 'error',

                    titleColor: 'white',
                    message:
                        'We cannot find a picture for this name, please enter the correct name',
                    messageColor: 'white',
                    color: 'red',
                    position: 'topCenter',
                    timeout: '2000',
                });
                gallery.reset()
                return;
                
      }
        })
        

         .catch(Error => iziToast.show({
             title: 'error',
             titleColor: 'white',
             message:
            'Sorry, there are no images matching your search query. Please try again!',
             messageColor: 'white',
             color: 'red',
             position: 'topCenter',
             timeout: '2000',  

    }))
}

