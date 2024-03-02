import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export const DeleteAcce = () => {
  // Logica de la vista
  const url = 'http://localhost:6000/api/accesorio'
  //Hooks: Componente nativo de REACT que se encarga de enlazar el contenido de la vista (HTML) la logica del componente en si

  const [ids, setIds] = useState();

 

  const idsHandler = (event) => {

      const { name, value } = event.target;
      setIds(value);

  }


  const submitHandler = async () => {

      event.preventDefault();
      const data = {
          accesorio_id  : ids
      }

      const result = await axios.post(url, data);
      const resultData = (await result).data;

      console.log(result);
      console.log(resultData);

  }



  return (
      <>
          <div className='container mt-5' >
              <form onSubmit={submitHandler} >
                  <fieldset>
                      <legend>Eliminar Accesorios</legend>

                      <div className="form-group row">
                          <label className="col-sm-2 col-form-label">Id del accesorio</label>
                          <div className="col-sm-10">
                              <input type="text" className="form-control-plaintext"
                                  name="ids"
                                  onChange={idsHandler}
                              />
                          </div>
                      </div>


                     

                      <button type="submit" className="btn btn-primary w-100">Ingresar Accesorios</button>
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
