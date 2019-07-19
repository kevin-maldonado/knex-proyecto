exports.up = function(knex, Promise) {
    return Promise.all([  knex.schema.createTable('proveedor', function(table){
        table.increments('id').primary();
        table.string('CI');
        table.string('nombres');
        table.string('apellidos');
        table.string('RUC');
        table.string('telefono');
        table.string('direccion');
        table.string('Num_Contacto');
        table.string('fecha_ingreso');
        table.string('responsable');
        table.string('estado');
       }),
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('proveedor'),
    ]);
};
