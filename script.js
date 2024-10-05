//Get references to important D0M elements
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body; //body element to change theme

//The localStorage object allows you to save key/value pairs in the browser.
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    themeToggleBtn.textContent = savedTheme === 'dark-mode' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
}

//Function to switch theme
themeToggleBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        //If current mode is dark, swithc to light mode
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode'); // Saved theme to LocalStorage
        themeToggleBtn.textContent = 'Switch to Dark Mode'; // textContent returns the text of button
    } else {
        //If current mode is light, return to dark
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        themeToggleBtn.textContent = 'Switch to Light Mode'; 
    }
});

// Get the form element and the list where the blog posts will be displayed
const form = document.getElementById('new-blog-form'); //Form for adding new blog posts
const blogList = document.getElementById('blog-list');//Container where blog posts will be displayed

//Function to handle form submission
form.addEventListener('submit', (e) => {
    // Stop the form from actually submitting to a server
    e.preventDefault();

    //Get the values from the form fields
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const entry = document.getElementById('entry').value;

    //Check if any of the field are empty
    if (!title || !author || !entry) {
        // If any field is empty shor an alert and stop the function
        alert('Please fill all the field >8( ');
        return;
    }

    //Create a new div for the blog post
    const blogPost = document.createElement('div');
    blogPost.classList.add('blog-post'); // Add a class to the new blog post and make it easier to control wit css
    
    //Set the HTML inside the new div. This is where the users input is transformed into a new post visible 
    blogPost.innerHTML = 
        `<h3>${title}</h3> 
        <p><strong>By:</strong> ${author}</p> 
        <p>${entry}</p> 
        <button class="delete-post">Delete Post</button> <!-- Button to delete the post -->`
    ;

    // Add Event listener to delete the post when the delete button is clicked
    blogPost.querySelector('.delete-post').addEventListener('click', () => {
        blogPost.remove();
    });

    //Insert new post at the top of the list
    blogList.insertBefore(blogPost, blogList.firstChild); //returns the first child node

    //Clear the form 
    form.reset();
});

