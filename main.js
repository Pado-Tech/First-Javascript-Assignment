let library= []
library.push({title:"The Great Gatsby", author: "F. Scott Fitzgerald", yearPublished: 1925, available: true })
library.push({title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 1960, available: true })
library.push({title: "1984", author: "George Orwell", yearPublished: 1949, available: false})
library.push({title: "Pride and Prejudice", author: "Jane Austen", yearPublished: 1813, available: true})
console.log(library)

library[2].available = true
console.log(library)

library.splice(3, 1)
console.log(library)

let titles = library.map(book =>  book.title)
console.log(titles)

let results = titles.includes("The Great Gatsby")
console.log(results)