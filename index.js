// get the HTML elements
let incrementTitle = document.querySelector(".increment__title");
let decrementTitle = document.querySelector(".decrement__title");
let countNumber = document.querySelector(".count");
let  count = countNumber.innerText;

const btnIncrement = document.querySelector(".increment");
const btnDecrement = document.querySelector(".decrement");


// increment function
const incrementCount = () =>{
  count++;
  countNumber.innerText = count;
    

}
// decrement function

const decrementCount = () =>{
   count--;
   countNumber.innerText= count;

}
const updateTitles = () => {
  if (count === 0) {
    incrementTitle.innerText.style.display = "none";
    decrementTitle.style.display = "none";
  } else if (count > 0) {
    incrementTitle.style.display = "block";
    decrementTitle.style.display = "none";
  } else {
    incrementTitle.style.display = "none";
    decrementTitle.style.display = "block";
  }
};







// add event listeners to buttons
btnIncrement.addEventListener("click", ()=>{
    incrementCount();
    updateIncrement();
   

});
btnDecrement.addEventListener("click", ()=>{
    decrementCount();
})





