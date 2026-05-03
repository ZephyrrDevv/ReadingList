const book = document.getElementById("book");
const addBtn = document.getElementById("addBtn");
const totalBook = document.getElementById("totalBook");
const bookList = document.getElementById("bookList");
const removeBtn = document.getElementById("removeBtn");

const readingList = [];

function addBook() {
  let bookTitle = book.value;
  if (bookTitle === "") {
    return;
  }
  readingList.push(bookTitle);
  book.value = "";
  renderList();
}

function renderList() {
  bookList.innerHTML = "";
  for (let i = 0; i < readingList.length; i++) {
    bookList.innerHTML += `
      <li>
            <span class="book-title">${readingList[i]}</span>
            <span class="book-number">#${i + 1}</span>
          </li>
    `;
  }

  totalBook.textContent = readingList.length;
}

function removeBook() {
  if (readingList.length === 0) {
    return;
  } else {
    readingList.pop();
  }
  renderList();
}

addBtn.addEventListener("click", addBook);
removeBtn.addEventListener("click", removeBook);
