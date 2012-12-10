// # Closures

// {{{
bookList = [
  { title: 'A Tale of Two Cities', author: 'Charles Dickens', sales: 200 },
  { title: 'The Catcher in the Rye', author: 'J. D. Salinger', sales: 65 },
  { title: 'Lolita', author: 'Vladimir Nabokov', sales: 50 },
  { title: 'Cien Años de Soledad', author: 'Gabriel García Márquez', sales: 30 },
  { title: 'The Hitchhiker\'s Guide to the Galaxy', author: 'Douglas Adams', sales: 10 }
];
// }}}

// Return a list of all books with at least 'threshold' copies sold.
function bestSellingBooks(threshold) {
  return bookList.filter(function (book) { return book.sales >= threshold; });
}

console.log(bestSellingBooks(65));
