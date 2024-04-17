import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";


import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import { requestPictures } from "./js/pixabay-api"

import { creatMarkup } from "./js/render-functions";

const form = document.querySelector(".search-form")
const gallery = document.querySelector(".gallery")
const loader = document.querySelector('.loader')



form.addEventListener("submit", handelSubmit)
loader.style.display = 'none';


const simpleLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});


function handelSubmit(event) {
    event.preventDefault();
    loader.style.display = 'inline-block';

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
            loader.style.display = 'none';
            gallery.innerHTML = creatMarkup(boxFoto.hits)
            simpleLightbox.refresh()
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
                form.reset()
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

         })
             .finally(() => {
      loader.style.display = 'none';;
    })
    )
      
    
}

