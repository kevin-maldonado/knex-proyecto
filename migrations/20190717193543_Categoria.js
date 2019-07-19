exports.up = function(knex, Promise) {
    return Promise.all([  knex.schema.createTable('categoria', function(table){
        table.increments('id').primary();
        table.string('nombre');
        table.string('codigo');
        table.string('fecha_ingreso');
        table.string('fecha_ingreso');
        table.string('responsable');
        table.string('estado);
         }),
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('categoria'),
    ]);
};