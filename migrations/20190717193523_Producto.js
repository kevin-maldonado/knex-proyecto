exports.up = function(knex, Promise) {
    return Promise.all([  knex.schema.createTable('producto', function(table){
        table.increments('id').primary();
        table.string('CI');
        table.string('sec_percha');
        table.string('codigo');
        table.string('nombre');
        table.string('dexcripcion');
        table.string('fecha_ingreso');
        table.string('responsable');
        table.string('estado');
        table.integer('sec_categoria').references('id').inTable('categoria');
       }),
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('producto'),
    ]);
};