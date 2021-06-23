const db = require('../../data/db-config');

const findBy = filter => {
  return db('books').where(filter)
};

const getLib = user_id => {
  return db.raw(
    `select
	cases.case_id, cases.lib_order, cases.user_id,
	(select json_agg(shelf) as shelves
	from(
		select s.shelf_id, s.case_order, s.case_id,
		(select json_agg(bk)
		 from (
			select book_title, book_color, shelf_order from books where books.shelf_id = s.shelf_id order by shelf_order
		 ) bk
		) as books
	from shelves as s order by case_order) shelf
	where shelf.case_id = cases.case_id)
	from cases
  where user_id = ${user_id}
  order by lib_order`
  )
};

const add = async book => {
  return await db('books').insert(book, ['book_id']);
};

module.exports = {
  findBy,
  getLib,
  add
};