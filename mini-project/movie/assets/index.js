

const openModalPopupButton = document.querySelector('header button');
const backdrop = document.querySelector('#backdrop');
const modal = document.querySelector('#add-modal');
const cancelButton  = modal.querySelector('.btn--passive');
const addButton = cancelButton.nextElementSibling;
const userInputs = document.querySelectorAll('input');
const section = document.querySelector('#entry-text')

const ulList = document.querySelector('#movie-list');
const movies = [];

//[{id:9, title:"xuyx, image:"..", rating}]

console.log("movie from localstorage",localStorage.getItem('movies'));

const sectionRemove = ()=>{
if(movies.length>0){
    // section.style.display='none'
    section.remove();
}
}

const deleteHandler = (movieId)=>{
    alert("hiiii")
console.log("movieId",movieId)

let currentIndex =0;
for (item of movies){
    if(item.id==movieId){
           break;
    } 
    currentIndex++
}
console.log("currentIndex",currentIndex)
movies.splice(currentIndex,1)
ulList.children[currentIndex].remove()
// const childToRemove = ulList.children[currentIndex]
// ulList.remove(childToRemove)

   

}

const handleDeleteHandler = (movieId)=>{

    let movieCurrentIndex = 0;

    for(data of movies){
        if(data.id ==movieId){
           break
        }
        movieCurrentIndex++
    }

    movies.splice(movieCurrentIndex,1)
  console.log("movieCurrentIndex",movieCurrentIndex)

ulList.children[movieCurrentIndex].remove()

}


const renderMovie = ({id, title, image, rating})=>{

    const newList = document.createElement('li');
    console.log("newlist",newList)
    newList.className="movie-element";

    newList.innerHTML= `
    <div class="movie-element__image ">
    <img src=${image} alt=${title} />
    </div>
    <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${rating}/5</p>
    </div>

    `

    newList.addEventListener('click', handleDeleteHandler.bind(null, id))
    ulList.append(newList)


}



const clearInputValues = ()=>{

   // const userInputs = [title:{value:"ironmN"}, imageUrl:{value:"ironmN"}, rating:{value:"ironmN"}]
 // TITLE.VALUE=''
 for(let i =0; i<userInputs.length; i++){
        //console.log(userInputs[i].value);
         userInputs[i].value=''

 } 
}





const toggleModalHandler =()=>{

modal.classList.toggle('visible');
backdrop.classList.toggle('visible')
}

const backdropHandler = ()=>{
toggleModalHandler()
}

const closeModalHandler =()=>{
    toggleModalHandler();
    clearInputValues();
}

const addClickHandler = ()=>{
    
    let titleValue = userInputs[0].value;
    let imageUrl = userInputs[1].value;
    let rating = userInputs[2].value;

    console.log(titleValue, imageUrl, rating)

    if(titleValue.trim()===''|| imageUrl.trim()==='' || rating.trim()===''){
   alert("please fill all the input fields")
    }

    const movieObj = {
        id:Math.random(),
        title:titleValue,
        image:imageUrl,
        rating: rating
    };

    movies.push(movieObj);
//    userInputs[0].value='';
//    userInputs[1].value='';
//    userInputs[2].value='';
    console.log("movies", movies);
    // localStorage.setItem('movieObj',JSON.stringify(movieObj));
    // localStorage.setItem('movies',JSON.stringify(movies))
    toggleModalHandler();
    clearInputValues();
    sectionRemove();
    renderMovie(movieObj)

}
openModalPopupButton.addEventListener('click',toggleModalHandler);
backdrop.addEventListener('click', backdropHandler);
cancelButton.addEventListener('click',closeModalHandler);
addButton.addEventListener('click', addClickHandler);

