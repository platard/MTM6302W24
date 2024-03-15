// DOM elements
const $studentList = document.getElementById('studentList')
const $modalBody = document.getElementById('modal-body')
const $studentForm = document.getElementById('studentForm')

// Display all the IDs
function createIDs(){

    const htmlTemplates = []
    for(const student of students ){
        const studentIndex = student.studentNumber -1
        htmlTemplates.push( /*html*/`
        <div class="col-md-6">
            <div class="ac-card">
                <div class="ac-card-image d-flex justify-content-center align-items-center"><i class="bi bi-person-bounding-box display-1"></i></div>
                <div class="ac-card-info">
                    <p>
                    <strong>${student.name}</strong><br>
                    <span>${student.studentNumber}</span>-
                    <span>${student.userName}</span>
                    </p>
                    <p>${student.email}</p>
                    <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" 
                    data-index="${student.studentNumber - 1}">Edit</button>
                </div>
                <div class="ac-card-footer">
                    <img class="ac-logo" src="https://imdac.github.io/images/codepen/AC_WORDMARK_1C_WHT.png">
                </div>
            </div>
        </div>`)
    }
$studentList.innerHTML = htmlTemplates.join('')
}
    
createIDs()

/*** Week 10 ***/
// 1. Create a HTML custom attribute to share the 'student number'. Use the html template.

// 2. Add an event listener to all the 'ac-card' buttons. Use the shared 'student numer' to target the proper 'student object'

/*** Direct */
// const $buttons = document.querySelectorAll('.btn')

// for(const $button of $buttons){
//     $button.addEventListener('click', function(event){
//         console.log(event.target.dataset.index)

//         $studentForm.elements['email'].value = students[event.target.dataset.index -1].email
//         $studentForm.elements['userName'].value = students[event.target.dataset.index -1].userName

//     })
// }

/*** Event delegation */

$studentList.addEventListener('click', function(event){
    if(event.target.classList.contains('btn')){
        console.log(event.target.dataset.index)

        $studentForm.elements['email'].value = students[event.target.dataset.index].email
        $studentForm.elements['userName'].value = students[event.target.dataset.index].userName
        // Add the index custom attribute to the form
        $studentForm.dataset.index = event.target.dataset.index
    }
})


// 3. Use the event delegation to listen to the 'submit' event in the student details view (modal).

$modalBody.addEventListener('submit', function(event){
    event.preventDefault()
    console.log('submit')
    console.log(event.target.elements['email'].value)
    console.log(event.target.elements['userName'].value)
    console.log(event.target.dataset.index)

    students[event.target.dataset.index].email = event.target.elements['email'].value
    students[event.target.dataset.index].userName = event.target.elements['userName'].value

    createIDs()
}
)






