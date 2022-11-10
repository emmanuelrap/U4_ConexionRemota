

import * as mongoose from 'mongoose';

//Commerce

const prodservSchema = new mongoose.Schema({
    IdProdServPK: { type : Number, required : true },
    IdProdServOK: { type : String },
    IdProdServBK: { type : String },
    //--
    IdProdServMaOK: { type : String },
    IdProdServMaBK: { type : String },
    //--
    DesProdServ: { type : String },
    IdMedidaOK: {  type : String },
    IdMedidaBK: {  type : String },
    //FIC: ESTATUS
    cat_prod_serv_estatus: [
      {
            IdTipoGenEstatusOk: { type : String },
            IdGenEstatusOk: { type : String },
            TipoEstatus: { type : String },
            Actual: { type: String },
            Observacion: { type: String },
            detail_row: {
                FechaReg: { type: Date, default: Date.now },
                UsuarioReg: { type: String }
            },
            _id: false,
        },
    ],
    //ZAM: ARCHIVOS
    cat_prod_serv_archivos: [
        {
            DesArchivo: { type : String },
            RutaArchivo: { type : String },
            //ZAM: Tipo Archivo
            IdTipoGenArchivoOK: { type : String },
            IdGenArchivoOK: { type : String },
            TipoArchivo: { type : String },
            //ZAM: Sección
            IdTipoGenSeccionOK: { type : String },
            IdGenSeccionOK: { type : String },
            TipoSeccion: { type : String },
            //---
            Secuencia: { type : Number },
            Principal: { type : String },
            detail_row: {
                FechaReg: { type: Date, default: Date.now },
                UsuarioReg: { type: String },
                FechaUltMod: { type: Date, default: Date.now },
                UsuarioMod: { type: String },
                Activo: { type: String, default: 'S' },
                Borrado: { type: String, default: 'N' },
            _id: false,
            },
            _id: false,
        },
    ], 
    detail_row: {
          FechaReg: { type: Date, default: Date.now },
          UsuarioReg: { type: String },
          FechaUltMod: { type: Date, default: Date.now },
          UsuarioMod: { type: String },
          Activo: { type: String, default: 'S' },
          Borrado: { type: String, default: 'N' }
    }
});


//Commerce
export default mongoose.model(
    'cat_prod_serv',
    prodservSchema,
    'cat_prod_serv'
  );

  //Education
const institutosSchema  = new mongoose.Schema({
    IdInstitutoOK : { type : String, required : true },
    IdInstitutoBK : { type : String, required : true },
    DesInstituto  : { type : String, required : true },
    Alias        : { type : String, required : false },
    Matriz        : { type : String, required : false },
    Giro          : { type : String, required : false },
    IdInstitutoSupOK  : { type : String, required : false }
});
