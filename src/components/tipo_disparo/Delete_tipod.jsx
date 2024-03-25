import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export const Delete_tipod = () => {
  // Logica de la vista
  const url = 'http://localhost:5000/api/tipoDisparo'
  //Hooks: Componente nativo de REACT que se encarga de enlazar el contenido de la vista (HTML) la logica del componente en si

  const [id, setId] = useState();

 

  const idsHandler = (event) => {

    const { name, value } = event.target;
    setId(value);

}


const deleteHandler = async () => {

    event.preventDefault();

    const result = await axios.delete(url + "/" + id);
    const resultData = (await result).data;

    console.log(result);
    console.log(resultData);
    

}

return (
    <div className='container mt-5' style={{ backgroundColor: '#2C3E50', color: '#FFFFFF', padding: '20px', borderRadius: '10px' }}>
        <form onSubmit={deleteHandler}>
            <fieldset>
                <legend style={{ color: '#2980B9' }}>Eliminar Tipo de Disparo del arma</legend>

                <div className="form-group row" style={{ backgroundColor: '#34495E', padding: '10px', borderRadius: '5px', marginBottom: '15px' }}>
                    <label className="col-sm-2 col-form-label">Id del tipo de disparo del arma</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control-plaintext" style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }}
                            name="id"
                            onChange={idsHandler}
                        />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#2980B9', color: '#FFFFFF' }}>Eliminar tipo de Disparo del Arma</button>
                <br/>
                <Link to="/Post_tipod" style={{ color: '#2980B9' }}>Ingresar Tipo de Disparo</Link>
                <br/>
                <Link to="/Put_tipod" style={{ color: '#2980B9' }}>Actualizar Tipo de Disparo</Link>
            </fieldset>
        </form>
    </div>
);
}