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
            console.log(bookClass)
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
