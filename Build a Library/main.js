//1 Create superclass for Book, CD and Movie classes
// All subclass will share the same class variable, title. 
class Media{
    constructor(title){
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];    
    }
    //create getters for properties to get access to values
    get title(){
        return this._title;
    }
    get isCheckedOut(){
        return this._isCheckedOut;
    }
    get ratings(){
        return this._ratings;
    } 
    //Create setter for isCheckedOut, this value will have added functionality
    set isCheckedOut(val){
        this._isCheckedOut = val;
    }
    //Use a method to change isCheckedOut to false if true and vice versa
    toggleCheckOutStatus(){
        this._isCheckedOut = !this.isCheckedOut;
    }
    //Use reduce() to get average rating
    getAverageRating(){
        const reducer = (total, currentVal) => total + currentVal;
        const sumOfRatings = this._ratings.reduce(reducer);
        const averageRatings = sumOfRatings/this._ratings.length - 1;
        return averageRatings;
    }
    //Create a method that will add a number value to the ratings array each time the method is called 
    addRating(ratingNum){
        this._ratings.push(ratingNum);
    }

}

//Super class is created. Now create three subclasses that wukk inherit from superclass

class Book extends Media{
    constructor(author, title, pages){
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author(){
        return this._author;
    }
    get pages(){
        return this._pages;
    }
}

class Movie extends Media{
    constructor(director, title, runTime){
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director(){
        return this._director;
    }
    get runTime(){
        return this._runTime;
    }
}

class CD extends Media{
    constructor(artist, title, songs){
        super(title);
        this._artist = artist;
        this._songs = songs
    }
    get artist(){
        return this._artist;
    }
    get songs(){
        return this._songs;
    }
}

//Create an instance of the Book class
//Check if the book is checked out or not
const lastReadBook = new Book('Hold my Hand and Run', 'Margaret McAllister', 150);
lastReadBook.toggleCheckOutStatus();
console.log(lastReadBook.isCheckedOut);

//Create an instance of the CD class, save list of songs to a new variable and check the CD rating
const leastBorrowedCD = new CD('Miranda Lilis', 'A Day Away', ['Dance', 'A Day Away', 'Ring The Bell'])
const playlist = leastBorrowedCD.songs;

//To check rating, call addRating
leastBorrowedCD.addRating(4);
leastBorrowedCD.addRating(2);
leastBorrowedCD.addRating(3);
console.log(leastBorrowedCD.getAverageRating());

//TODO: Create instance of Movie class, try adding more properties to each class, limit rating value to a range between 1 & 5, create shuffle method for CD class