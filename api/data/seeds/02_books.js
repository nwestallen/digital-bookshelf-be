
exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(() => {
      // Inserts seed entries
      return knex('books').insert([
        {book_title: 'Moby Dick', book_author: 'Herman Melville', user_id: 1, book_color: 'navy'},
        {book_title: 'The Old Man and the Sea', book_author: 'Ernest Hemmingway', user_id: 1, book_color: 'aquamarine'},
        {book_title: 'Robinson Crusoe', book_author: 'Daniel Defoe', user_id: 1, book_color: 'red'},
        {book_title: 'Infinite Jest', book_author: 'David Foster Wallace', user_id: 2, book_color: 'gray'}
      ]);
    });
};
  