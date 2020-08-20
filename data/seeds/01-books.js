
exports.seed = function(knex) {
      return knex('books').insert([
        {id: 1, name: 'Seeking Wisdom', author: 'Peter Bevelin'},
        {id: 2, name: 'Know This', author: 'John Brockman'},
        {id: 3, name: 'Letters From a Self-Made Merchant to His Son', author: 'George Horace Lorimer'},
        {id: 4, name: 'The Origin of Species', author: 'Charles Darwin'},
      ]);
};
