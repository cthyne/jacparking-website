/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('contacts').del()
  await knex('contacts').insert([
    {id: 1, fullName: 'Ciara Nicole', emailAddress: 'ciarahelloyou@gmail.com', phone: '8085552375', formMessage: 'Hello, I am testing this out.'},
    {id: 2, fullName: 'Kyle Vuong', emailAddress: 'kylebecrazy@email.com', phone: '5035678366', formMessage: 'hi i want to know if this works'},
    {id: 3, fullName: 'Charles Christopher Walken', emailAddress: 'goodboycharlie@goofy.com', phone: '8085558975', formMessage: 'aloha this is a test to see if this will work entirely.'}
  ]);
};
