
exports.seed = knex => {
  return knex('books').insert([
    { book_title: 'Moby Dick', book_author: 'Herman Melville', user_id: 1, book_color: 'navy', shelf_id: 1, shelf_order: 1 },
    { book_title: 'The Old Man and the Sea', book_author: 'Ernest Hemmingway', user_id: 1, book_color: 'aquamarine', shelf_id: 1, shelf_order: 2 },
    { book_title: 'Robinson Crusoe', book_author: 'Daniel Defoe', user_id: 1, book_color: 'red', shelf_id: 1, shelf_order: 3 },
    { book_title: 'Wealth of Nations', book_author: 'Adam Smith', user_id: 1, book_color: 'goldenrod', shelf_id: 2, shelf_order: 1 },
    { book_title: 'Infinite Jest', book_author: 'David Foster Wallace', user_id: 2, book_color: 'gray' }
  ]);
};
  