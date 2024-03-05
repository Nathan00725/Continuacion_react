import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export const DeleteAcce = () => {
  // Logica de la vista
  const url = 'http://localhost:5000/api/accesorios'
  //Hooks: Componente nativo de REACT que se encarga de enlazar el contenido de la vista (HTML) la logica del componente en si

  const [accesorio_id, setAccId] = useState();

 

  const idsHandler = (event) => {

      const { name, value } = event.target;
      setAccId(value);

  }


  const deleteHandler = async () => {

      event.preventDefault();
      
      const data = {
        accesorio_id: accesorio_id
      }

      
    try {
         const result = await axios.delete(url+ `/${accesorio_id}` , data);   
        console.log(result.data);
        console.log(data);
    } catch (error) {
        console.error("Error al elimimnar no se encontro el campo:", error)
    }

      
 };

      

  

  return (
      <>
          <div className='container mt-5' >
              <form onSubmit={deleteHandler} >
                  <fieldset>
                      <legend>Eliminar Accesorios</legend>

                      <div className="form-group row">
                          <label className="col-sm-2 col-form-label">Id del accesorio</label>
                          <div className="col-sm-10">
                              <input type="text" className="form-control-plaintext"
                                  name="accesorio_id"
                                  onClick={idsHandler}
                              />
                          </div>
                      </div>


                     

                      <button type="submit" className="btn btn-primary w-100">Eliminar Accesorios</button>
                      <br/> 
                        <Link to="/">Ingresar Accesorios</Link>
                        <br/>
                        <Link to="/Put">Actualizar Accesorios</Link>
                  </fieldset>
              </form>
             
          </div>
          
      </>
  )
}
