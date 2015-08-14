const user = {
  id: 1,
  name: 'Jack'
};

const books = [{
  id: 1,
  author: 'Martin',
  title: 'Game of Thrones'
}, {
  id: 2,
  author: 'J K Rowling',
  title: 'Harry Potter'
}];

export function getBooks() {

  return new Promise(function(resolve, reject) {
    resolve(books);
  });
}

export function getUser() {

  return new Promise(function(resolve, reject) {
    resolve(user);
  });
}
