// Prepare Your HTML Structure
// 1.Create a basic HTML file with a form (<form>), an input field for new tasks (<input>), and an unordered list (<ul>) to display your tasks.
// 2.Assign unique IDs to these elements (e.g., form, newTask, and list) so you can easily access them in your JavaScript code.


// Access DOM Elements in JavaScript
// 3.Acces the HTML eleents and store them in variables: $list, $form, and $newTask.


// Initialize Your Task Array
// 4.Create a variable named tasks and initialize it with an array of a few default tasks, such as ['Buy dinner', 'Complete assignment', 'Review class'].


// Write the buildToDoList Function
// 5.Define a function named buildToDoList that iterates over your tasks array and creates HTML list items (<li>) for each task. Include a "Delete" button (<button>) with each task.
// 6.Use innerHTML on your list ($list) to update its content with the tasks.


// Add the Application Logic
// 7.Add an event listener to your form ($form) to intercept the submit event.
// 8.Inside this event listener, add the value from the input field to your tasks array, clear the input field and call buildToDoList() to update the UI.


// Implement Task Deletion
// 9.Add a click event listener to your list ($list). Use event delegation to detect if a delete button was clicked.
// 10.If a delete button was clicked, remove the corresponding task from your tasks array based on the button's data-index and then call buildToDoList() again to update the UI.


// Persist Tasks with Local Storage
// 11.After adding or removing tasks, update the list in localStorage to ensure tasks persist across page reloads.
// 12.Check if there is any saved task list in localStorage when your application starts. If so, load this list and use it to initialize your tasks array.