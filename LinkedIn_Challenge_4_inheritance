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
class TechnicalBook extends Book{
    constructor(title, auther, isbn, numOfCopies, edition){
        super(title, auther, isbn, numOfCopies);
        this.edition = edition;
    }

    getEdition(){
        return `Current version of this book is ${this.edition}`;
    }
}

const newTechnicalBook  = new TechnicalBook('C', 'Denish', 12345, 45, 12.9);
console.log(newTechnicalBook.getEdition());
console.log(newTechnicalBook.getAvailability())
