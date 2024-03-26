/** Variables */ 
const $books =  document.getElementById('books')
const $saved = document.getElementById('saved')

let books = []
let saved = []

/** Functions */
//Create a function to build the wish list
function buildWishList() {
    const ls = localStorage.getItem('saved')
    if(ls){
        saved = JSON.parse(ls)
    }

    const html = buildBooks(saved)
    $saved.innerHTML = html.join('')
}

//Create a function to build the book list
function buildBooks(books){
    const html = []

    for(const book of books){
        html.push(/*html*/`
            <a href="#" class="book col-4 mb-3" data-id="${book.id}">
                <img src="${book.image}" alt="${book.title}" class="img-fluid">
            </a>
        `)
    }
    return html
}

/*** Fetch the data from seussology.info  */
/*** then */

/*** async / await */


//Create a function to fetch and display a single book
function getBook(id){
    // Fetch the book

    // Display the book details once the data is fetched
    $books.innerHTML = `
    <div class="row">
        <div class="col-6"><img src="${book.image}" alt="" class="img-fluid"></div>
        <div class="col-6">
            <h2>${book.title}</h2>
            <p>${book.description}</p>
            <button class="back btn btn-secondary">Back</button>
            <button class="save btn btn-primary" 
                data-id="${book.id }"
                data-title="${book.title }"
                data-description="${book.description }"
                data-image="${book.image }"
            >Add</button>
        </div>
    </div>
    `
}


/** Define the event listener for the click events */
$books.addEventListener('click', function(e){
    e.preventDefault()
    
    if(e.target.classList.contains('book')){
        getBook(
            //send the id of the book
        )

    }else if(e.target.classList.contains('back')){
        //build the book list

    }else if(e.target.classList.contains('save')){
    
        //add the book to the 'saved' array
        
        //save the data to local storage
        
        //build the wish list

        }
    }
})

//Create an event listener to listen for the click event on the 'saved' section


//Code to run when the page loads





