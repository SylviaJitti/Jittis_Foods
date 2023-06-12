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

// Make a POST request to add a new order
/*const addNewOrder = async (orderData) => {
    try {
      const response = await axios.post('/add_new_order', orderData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      console.log(response.data); // Assuming the backend returns a response message
    } catch (error) {
      console.error(error);
    }
  };

  // Example order data
  const orderData = new URLSearchParams();
  orderData.append('location_id', '123');
  orderData.append('date', '06-08-2023');
  orderData.append('plan', 'Example Plan');
  orderData.append('time', '14:30');
  
  // Call the function to add a new order
  addNewOrder(orderData);
  */
import axios from 'axios';

// Function to handle form submission
const handleFormSubmit = async (event) => {
  event.preventDefault();

  const location = document.querySelector('#location').value;
  const date = document.querySelector('#date').value;
  const time = document.querySelector('#time').value;

  const orderData = {
    location_id: location,
    date: date,
    time: time
  };

  // Call the function to add a new order
  addNewOrder(orderData);
};

// Make a POST request to add a new order
const addNewOrder = async (orderData) => {
  try {
    const response = await axios.post('/add_new_order', orderData, {
      headers:{
        'Accept': 'application/json'
      }
    });
    console.log(response.data); // Assuming the backend returns a response message
  } catch (error) {
    console.error(error);
  }
};

// Add event listener to the form submit button
document.querySelector('#order-form').addEventListener('submit', handleFormSubmit);
