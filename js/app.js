// get the ui element 
let form = document.querySelector("#book-form");



// book class 
class Book {
    constructor (title,author,isbn) {
        this.title = title ;
        this.author = author ;
        this.isbn = isbn ;
    }
};


// UI Class
class UI {
    constructor () {

    }
    addToBookList(book) {
       let list = document.querySelector("#book-list");
       let row = document.createElement("tr");
       row.innerHTML = `
       <td>${book.title}</td>
       <td>${book.author}</td>
       <td>${book.isbn}</td>
       <td><a href="#" class="delete">X</a></td>
       `
       list.appendChild(row);
    }

    clearFields() {
         document.querySelector("#title").value = "";
         document.querySelector("#author").value ="";
         document.querySelector("#isbn").value ="";
    }

}



// add the event listener
form.addEventListener("submit" , newBook);




// define the function 
function newBook (e) { 
    let title = document.querySelector("#title").value ;
    let author = document.querySelector("#author").value;
    let isbn = document.querySelector("#isbn").value ;

    let ui = new UI ;
    if (title === "" || author === "" || isbn === "") {
        alert("Please Fill Out All The Fields")
    } else {
        let book = new Book (title, author, isbn);
        ui.addToBookList (book);
        ui.clearFields()
        e.preventDefault();
    }
}