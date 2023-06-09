let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}
 

let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}
 
var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

import axios from 'axios';

// Make a POST request to add a new order
const addNewOrder = async (orderData) => {
    try {
      const response = await axios.post('/add_new_order', orderData);
      console.log(response.data); // Assuming the backend returns a response message
    } catch (error) {
      console.error(error);
    }
  };

  // Example order data
const orderData = {
    location_id: "123",
    date: "2023-06-08",
    plan: "Example Plan",
    quantity: 5
  };
  
  // Call the function to add a new order
  addNewOrder(orderData);
  