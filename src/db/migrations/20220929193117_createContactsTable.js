/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('contacts', function (table) {
            table.increments('id');
            table.string('fullName', 255);
            table.string('emailAddress', 255);
            table.string('phone');
            table.text('formMessage');
            table.timestamps();
        })
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable('contacts');
}