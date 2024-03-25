import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import '../fondo.css'

export const Post_arma = () => {
  // Logica de la vista
  const url = 'http://localhost:5000/api/arma'
  //Hooks: Componente nativo de REACT que se encarga de enlazar el contenido de la vista (HTML) la logica del componente en si

  const [nombre_arma, setNombre_arma] = useState();

  const [id_tipo, setId_tipo] = useState();

  const [id_tipo_disparo, setId_tipo_disparo] = useState();

  const [id_fabricante, setId_fabricante] = useState();

  const [id_calibre, setId_calibre] = useState();


  const Nombre_armaHandler = (event) => {

      const { name, value } = event.target;
      setNombre_arma(value);

  }

  const Id_tipoHandler = (event) => {

    const { name, value } = event.target;
    setId_tipo(value);

}

const Id_tipo_disparoHandler = (event) => {

    const { name, value } = event.target;
    setId_tipo_disparo(value);

}

const Id_fabricanteHandler = (event) => {

    const { name, value } = event.target;
    setId_fabricante(value);

}

const Id_calibreHandler = (event) => {

    const { name, value } = event.target;
    setId_calibre(value);

}


  

  const submitHandler = async () => {

      event.preventDefault();
      const data = {
        nombre_arma: nombre_arma,
        id_tipo: id_tipo,
        id_tipo_disparo: id_tipo_disparo,
        id_fabricante: id_fabricante,
        id_calibre: id_calibre
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
                    <legend style={{ color: '#2980B9' }}>Ingresar el Arma</legend>
                    <div className="form-group row" style={{ backgroundColor: '#34495E', padding: '10px', borderRadius: '5px', marginBottom: '15px' }}>
                        <label className="col-sm-2 col-form-label">Nombre del arma</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control-plaintext" style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }}
                                name="nombre_arma"
                                onChange={Nombre_armaHandler}
                            />
                        </div>
                    </div>
                    <div className="form-group row" style={{ backgroundColor: '#34495E', padding: '10px', borderRadius: '5px', marginBottom: '15px' }}>
                        <label className="col-sm-2 col-form-label">Id del tipo arma</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control-plaintext" style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }}
                                name="id_tipo"
                                onChange={Id_tipoHandler}
                            />
                        </div>
                    </div>
                    <div className="form-group row" style={{ backgroundColor: '#34495E', padding: '10px', borderRadius: '5px', marginBottom: '15px' }}>
                        <label className="col-sm-2 col-form-label">Id del tipo de disparo</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control-plaintext" style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }}
                                name="id_tipo_disparo"
                                onChange={Id_tipo_disparoHandler}
                            />
                        </div>
                    </div>
                    <div className="form-group row" style={{ backgroundColor: '#34495E', padding: '10px', borderRadius: '5px', marginBottom: '15px' }}>
                        <label className="col-sm-2 col-form-label">Id del tipo de Fabricante</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control-plaintext" style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }}
                                name="id_fabricante"
                                onChange={Id_fabricanteHandler}
                            />
                        </div>
                    </div>
                    <div className="form-group row" style={{ backgroundColor: '#34495E', padding: '10px', borderRadius: '5px', marginBottom: '15px' }}>
                        <label className="col-sm-2 col-form-label">Id del Calibre</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control-plaintext" style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }}
                                name="id_calibre"
                                onChange={Id_calibreHandler}
                            />
                        </div>
                    </div>
        
                    <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#2980B9', color: '#FFFFFF' }}>Ingresar el Arma</button>
                    <br/>
                    <Link to="/Put_arma" style={{ color: '#2C3E50' }}>Actualizar el Arma</Link>
                    <br/>
                    <Link to="/Delete_arma" style={{ color: '#2C3E50' }}>Eliminar el Arma</Link>
                </fieldset>
            </form>
        </div>
    );
}
