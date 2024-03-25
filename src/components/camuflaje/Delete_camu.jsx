import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export const Delete_camu = () => {
  // Logica de la vista
  const url = 'http://localhost:5000/api/camuflaje'
  //Hooks: Componente nativo de REACT que se encarga de enlazar el contenido de la vista (HTML) la logica del componente en si

  const [camuflaje_id, setCamuflaje_id] = useState();

 

  const Camuflaje_idHandler = (event) => {

    const { name, value } = event.target;
    setCamuflaje_id(value);

}


const deleteHandler = async () => {

    event.preventDefault();

    const result = await axios.delete(url + "/" + camuflaje_id);
    const resultData = (await result).data;

    console.log(result);
    console.log(resultData);
    

}

return (
    <div className='container mt-5' style={{ backgroundColor: '#2C3E50', color: '#FFFFFF', padding: '20px', borderRadius: '10px' }}>
        <form onSubmit={deleteHandler}>
            <fieldset>
                <legend style={{ color: '#2980B9' }}>Eliminar el Camuflaje del Arma</legend>

                <div className="form-group row" style={{ backgroundColor: '#34495E', padding: '10px', borderRadius: '5px', marginBottom: '15px' }}>
                    <label className="col-sm-2 col-form-label">Id del el Camuflaje del Arma</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control-plaintext" style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }}
                            name="camuflaje_id"
                            onChange={Camuflaje_idHandler}
                        />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#2980B9', color: '#FFFFFF' }}>Eliminar el Camuflaje del Arma</button>
                <br/>
                <Link to="/Post_camu" style={{ color: '#2980B9' }}>Ingresar el Camuflaje del Arma</Link>
                <br/>
                <Link to="/Put_camu" style={{ color: '#2980B9' }}>Actualizar el Camuflaje del Arma</Link>
            </fieldset>
        </form>
    </div>
);
}