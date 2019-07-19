
exports.up = function(knex, Promise) {
    return Promise.all([  knex.schema.createTable('productoxcantidad', function(table){
        table.increments('id').primary();
        table.string('codigo');
        table.string('codigo_barras');
        table.string('lote');
        table.string('presentacion');
        table.string('observacion');
        table.string('forma_farma');
        table.string('fecha_elaboracion');
        table.string('fecha_vencimiento');
        table.string('costo');
        table.string('cantidad');
        table.string('num_factura');
        table.string('fecha_ingreso');
        table.string('respondable');
        table.string('ruta');
        table.string('ruta_ant');
        table.string('estado');
        table.integer('sec_proveedor').references('id').inTable('proveedor');
        table.integer('sec_producto').references('id').inTable('roducto');
        table.integer('sec_percha').references('id').inTable('percha');

       }),
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('productoxcantidad'),
    ]);
};