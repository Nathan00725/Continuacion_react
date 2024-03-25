import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import '../fondo.css'

export const Post_camu = () => {
  // Logica de la vista
  const url = 'http://localhost:5000/api/camuflaje'
  //Hooks: Componente nativo de REACT que se encarga de enlazar el contenido de la vista (HTML) la logica del componente en si

  const [camuflaje, setCamuflaje] = useState();



  const CamuflajeHandler = (event) => {

      const { name, value } = event.target;
      setCamuflaje(value);

  }



  

  const submitHandler = async () => {

      event.preventDefault();
      const data = {
        camuflaje: camuflaje
      }

      const result = await axios.post(url, data);
      const resultData = (await result).data;

      console.log(result);
      console.log(resultData);

    }
    return (
        <div className='container mt-5' style={{ backgroundColor: '#2C3E50', color: '#FFFFFF', padding: '20px', borderRadius: '10px' }}>
            <form onSubmit={submitHandler}>
                <fieldset>
                    <legend style={{ color: '#2980B9' }}>Ingresar el Camuflaje del Arma</legend>
                    <div className="form-group row" style={{ backgroundColor: '#34495E', padding: '10px', borderRadius: '5px', marginBottom: '15px' }}>
                        <label className="col-sm-2 col-form-label">Camuflaje del Arma</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control-plaintext" style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }}
                                name="camuflaje"
                                onChange={CamuflajeHandler}
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#2980B9', color: '#FFFFFF' }}>Ingresar el Camuflaje del Arma</button>
                    <br/>
                    <Link to="/Put_camu" style={{ color: '#2C3E50' }}>Actualizar el Camuflaje del Arma</Link>
                    <br/>
                    <Link to="/Delete_camu" style={{ color: '#2C3E50' }}>Eliminar el Camuflaje del Arma</Link>
                </fieldset>
            </form>
        </div>
    );
}
