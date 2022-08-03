books = [
    {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        publisher: "Scholastic"
    },
    {
        title: "In Cold Blood",
        author: "Truman Capote",
        publisher: "Random House",
    },
    {
        title: "Invisible Monsters",
        author: "Chuck Palahniuk",
        publisher: "WW Norton",
    },
    {
        title: "Fight Club",
        author: "Chuck Palahniuk",
        publisher: "WW Norton",
    },
    {
        title: "The Shining",
        author: "Stephen King",
        publisher: "Doubleday",
    }
]



function bookDisplay() {
    const bookContainer = document.querySelector("#book-container")
    console.log(bookContainer.children.length)
    if (bookContainer.children.length > 0) {
        const bookClass = document.querySelectorAll(".bookItem")
        bookClass.forEach(book => {
            book.remove()
        })
    }


    books.forEach(book => {
        const bookCard = document.createElement('div')
        bookCard.className = ("bookItem")
        const title = document.createElement('h4')
        const author = document.createElement('p')
        const publisher = document.createElement('p')

        title.textContent = `Title: ${book.title}`
        author.textContent = `Author: ${book.author}`
        publisher.textContent = `Publisher: ${book.publisher}`

        bookContainer.appendChild(bookCard)
        bookCard.appendChild(title)
        bookCard.appendChild(author)
        bookCard.appendChild(publisher)
    });
}

bookDisplay();

function categorySort(event) {
    const category = event.target.id
    const sortedCategory = books.sort(
        function (bookA, bookB) {
            return bookA[category].localeCompare(bookB[category])
        }
    )

    bookDisplay(sortedCategory)
}

//These Functions can work as well, but looks messy and can clutter up your .js file.
function sortByTitle() {
    const sortedArray = books.sort(
        function (bookA, bookB) {
            return bookA.title.localeCompare(bookB.title)
        }
    )
    bookDisplay(sortedArray)
}

function sortByAuthor() {
    const sortedArray = books.sort(
        function (bookA, bookB) {
            return bookA.author.localeCompare(bookB.author)
        }
    )
    bookDisplay(sortedArray)
}

function sortByPublisher() {
    const sortedArray = books.sort(
        function (bookA, bookB) {
            return bookA.publisher.localeCompare(bookB.publisher)
        }
    )
    bookDisplay(sortedArray)
}
