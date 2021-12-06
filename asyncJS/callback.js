/* console.log("1.görev");
console.log("2.görev");
console.log("3.görev"); 

const func1 = () => {
    console.log("Func1 tamamlandı");
};
const func2 = () => {
    console.log("Func2 tamamlandı");
};

func2();
func1(); */


/* const func1 = () => {
    console.log("Func1 tamamlandı");
    func2();
};

const func2 = () => {
    console.log("Func2 tamamlandı");
    func3();
};

const func3 = () => {
    console.log("Func3 tamamlandı");
};

func1(); */

/* const func1 = () => {
    console.log("Func1 tamamlandı");
    func3();
};

const func2 = () => {
    console.log("Func2 tamamlandı");
    
};

const func3 = () => {
    console.log("Func3 tamamlandı");
    func2();
};

func1(); */

// Single Thread -- JS Senkron

const books = [
    {name:"Kitap 1", author: "Yazar 1"},
    {name:"Kitap 2", author: "Yazar 2"},
    {name:"Kitap 3", author: "Yazar 3"},
];

const listBooks = () => {
    books.map(book => {
        console.log(book.name);
    })
};



const addBook = (newBook, callback) => {
    books.push(newBook);
    callback();
};

addBook({name: "Kitap 4", author:"Yazar 4"},listBooks);
