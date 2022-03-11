
const container = document.querySelector('.container');
const notOccupiedSeats = document.querySelectorAll('.row .seat:not(.occupied)');
const allSeats = document.querySelectorAll('.row .seat');
const count = document.getElementById('count');
const total = document.getElementById('total');
const film = document.getElementById('film');
const movieSelectBox = document.getElementById('movie');


 // current price
 let ticketPriceFromSelectBox = parseFloat(movieSelectBox.options[movieSelectBox.selectedIndex].value);
 let ticketPriceFromStorage = parseFloat(localStorage.getItem("selectedMoviePrice"));
 let currentTicketPrice = ticketPriceFromStorage ? ticketPriceFromStorage : ticketPriceFromSelectBox;
// current selectedMovieIndex
 let selectedMovieIndexFromSelectBox = movieSelectBox.selectedIndex;
 let selectedMovieIndexFromStorage = localStorage.getItem('selectedMovieIndex');
 let currentMovieIndex = selectedMovieIndexFromStorage ? selectedMovieIndexFromStorage : selectedMovieIndexFromSelectBox;
// Initialize functions
window.onload = () => {

   //refresh sonrası son seçili filmin selectbox a eklenmesi
  movieSelectBox.selectedIndex = currentMovieIndex;
  //önce koltuklar selected yapılıyor
  displayUI();
  //sonra hesaplama ve info güncelleniyor
  updateMovieInfo(currentTicketPrice);  
}

// Movie select event
movieSelectBox.addEventListener('change', e => {
  let ticketPrice = e.target.value;
  let seatNumber = e.target.selectedIndex;
  updateMovieInfo(ticketPrice);
  setMovieDataToStorage(seatNumber, ticketPrice);
});

// Seat click event(capturing)
container.addEventListener('click', e => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
    //storage daki son filmin price ı update fonk parametre olarak veriliyor.
    updateMovieInfo(currentTicketPrice);
  }
});

// Update total and count
const updateMovieInfo = (price) => {
  // movieSelectBox.selectedIndex = currentMovieIndex;
  // .class .class matches any elements of class .class that are descendants of another element with the class .class.
  // .class.class matches any element with both classes.
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  //Array.prototype.forEach()
  //NodeList.prototype.forEach()
  //Array.prototype.map()
  //Array.prototype.filter()
  //Array.prototype.reduce()

  //selected koltuklara index atama, sonra array a alma
  console.log(Array.from(selectedSeats));
  const seatsIndexArray = [...selectedSeats].map(seat => [...allSeats].indexOf(seat));

  console.log(seatsIndexArray);

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndexArray));

  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * price;
  film.innerText = movieSelectBox.options[movieSelectBox.selectedIndex].innerText.split("(")[0];
}

const setMovieDataToStorage = (movieIndex, moviePrice) => {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Get data from localstorage and populate UI
const displayUI = () => {
  const selectedSeatsFromStorage = JSON.parse(localStorage.getItem('selectedSeats'));
  if (selectedSeatsFromStorage !== null && selectedSeatsFromStorage.length > 0) {
      allSeats.forEach((seat, index) => {
      // selectedSeats.indexOf(index) == -1 ==> false
      // selectedSeats.indexOf(index) > -1 ==> true
      // occupied olmayanların indexi localstorge da varsa onları selected yap refresh sonrası veri basma kısmı
      if (selectedSeatsFromStorage.indexOf(index) > -1) {
        seat.classList.add('selected');
        // seat.classList.toggle('occupied');
      }
    });
  }
  
}


// ----------------2.ÇÖZÜM LOCAL STORAGE YAPILMADI------------------------

// const movie = document.getElementById('movie');
// const rows = document.querySelectorAll('.row');
// const count = document.getElementById('count');
// const film = document.getElementById('film');
// const total = document.getElementById('total');
// const fragment = document.querySelector('.fragment');


// rows.forEach(element => {
//     // console.log(element)
//     element.addEventListener("click", (e)=>{
//         if (!e.target.classList.contains("selected") && !e.target.classList.contains("occupied")){
//             e.target.classList.add("selected");
//             count.innerText ++;
//         }else if (e.target.classList.contains("selected")){
//             e.target.classList.remove("selected");
//             count.innerText --;
//         }
//         total.innerText = +(count.innerText) * +(movie.value)

//     }) 
// });

// movie.addEventListener("change", chooseOption)
// function chooseOption(){
//     let text = movie.options[movie.selectedIndex].text;
//     console.log(text);
//     film.innerText = text;
//     total.innerText = +(count.innerText) * +(movie.value)
    
//     //added fragment
//     if(movie.value == 10){
//         fragment.innerHTML = `<iframe src="https://www.youtube.com/embed/hA6hldpSTF8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
//     }
//     else if(movie.value == 12){
//         fragment.innerHTML = `<iframe src="https://www.youtube.com/embed/t433PEQGErc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
//     }
//     else if(movie.value == 8){
//         fragment.innerHTML = `<iframe src="https://www.youtube.com/embed/wmiIUN-7qhE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
//     }
//     else if(movie.value == 9){
//         fragment.innerHTML = `<iframe src="https://www.youtube.com/embed/7TavVZMewpY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
//     }
// }


// //“javascript select option innertext” Code Answer"
// // var e = document.getElementById("selectElementID");
// // var value=e.options[e.selectedIndex].value; // get selected option value
// // var text=e.options[e.selectedIndex].text;
