
import * as ProdServServices from '../services/prodServ.service';
import boom from '@hapi/boom';

//ZAM: API GET
//----------------------------------------
//ZAM: Todos los Productos/Servicios.
export const getProdServList = async (req, res, next) => {
    try{
      const prodServList = await ProdServServices.getProdServList();
      if (!prodServList) {
        throw boom.notFound('No se encontraron productos/servicios registrados.');
      } else if (prodServList) {
        res.status(200).json(prodServList);
      }

      } catch(error) {
        next(error);
      }
    };

    //ZAM: Solo un Producto/Servicio.
  export const getProdServItem = async (req, res, next) => {
    try {
      //ZAM: obtener parametro id mediante la
      //desestructuracion de objetos
      const { id } = req.params;
      //ZAM: se obtiene parametro de la forma
      //clase/objeto.
      //const idProdServ = req.params.id;
    const keyType = req.query.keyType || 'OK';
    const prodServItem = await ProdServServices.getProdServItem(id, keyType);
    if (!prodServItem) {
      throw boom.notFound('No se encontraron productos/servicios registrados.');
    } else if (prodServItem) {
      res.status(200).json(prodServItem);
    }
  }catch(error){
    next(error);
  }
  };

  