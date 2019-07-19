exports.up = function(knex, Promise) {
    return Promise.all([  knex.schema.createTable('bodega', function(table){
        table.increments('id').primary();
        table.string('sec_lugar');
        table.string('nombre');
        table.string('codigo');
        table.string('fecha_ingreso');
        table.string('responsable');
        table.string('observacion');
    
       }),
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('bodega'),
    ]);
};