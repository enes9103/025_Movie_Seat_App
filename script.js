const movie = document.getElementById('movie');
const rows = document.querySelectorAll('.row');
const count = document.getElementById('count');
const film = document.getElementById('film');
const total = document.getElementById('total');
const fragment = document.querySelector('.fragment');


rows.forEach(element => {
    // console.log(element)
    element.addEventListener("click", (e)=>{
        if (!e.target.classList.contains("selected") && !e.target.classList.contains("occupied")){
            e.target.classList.add("selected");
            count.innerText ++;
        }else if (e.target.classList.contains("selected")){
            e.target.classList.remove("selected");
            count.innerText --;
        }
        total.innerText = +(count.innerText) * +(movie.value)

    }) 
});

movie.addEventListener("change", chooseOption)
function chooseOption(){
    let text = movie.options[movie.selectedIndex].text;
    console.log(text);
    film.innerText = text;
    total.innerText = +(count.innerText) * +(movie.value)
    
    //added fragment
    if(movie.value == 10){
        fragment.innerHTML = `<iframe src="https://www.youtube.com/embed/hA6hldpSTF8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
    else if(movie.value == 12){
        fragment.innerHTML = `<iframe src="https://www.youtube.com/embed/t433PEQGErc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
    else if(movie.value == 8){
        fragment.innerHTML = `<iframe src="https://www.youtube.com/embed/wmiIUN-7qhE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
    else if(movie.value == 9){
        fragment.innerHTML = `<iframe src="https://www.youtube.com/embed/7TavVZMewpY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
}





//“javascript select option innertext” Code Answer"
// var e = document.getElementById("selectElementID");
// var value=e.options[e.selectedIndex].value; // get selected option value
// var text=e.options[e.selectedIndex].text;
