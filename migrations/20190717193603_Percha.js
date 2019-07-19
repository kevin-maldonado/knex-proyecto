exports.up = function(knex, Promise) {
    return Promise.all([  knex.schema.createTable('percha', function(table){
        table.increments('id').primary();
        table.string('prodecesor');
        table.string('nivel');
        table.string('nombre');
        table.string('descripcion');
        table.string('fecha_ingreso');
        table.string('resonsable');
        table.string('estado');
        table.integer('sec_bodega').references('id').inTable('bodega');
       }),
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('percha'),
    ]);
};