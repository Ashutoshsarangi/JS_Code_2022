class Book {
    title;
    auther
    isbn;
    numOfCopies;
    
    constructor(title, auther, isbn, numOfCopies){
        this.title = title;
        this.auther = auther;
        this.isbn = isbn;
        this.numOfCopies = numOfCopies;
    }

    get numOfBookCopies(){
        return this.getAvailability();
    }

    getAvailability(){
        if(this.numOfCopies == 0){
            return 'Out of Stuck';
        }else if (this.numOfCopies < 10){
            return 'low Stuck';
        }else{
            return 'in stuck';
        }
    }

    sell(numOfCopies = 1){
        this.numOfCopies -= numOfCopies;
    }

    reStuck(numOfCopies = 5){
        this.numOfCopies += numOfCopies;
    }
}

let newBook  = new Book('New JS Book', 'Ashu', 123344, 1);
console.log(newBook.getAvailability());
newBook.sell();
console.log(newBook.numOfBookCopies)
console.log(newBook.getAvailability());
