import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


export const Put_tipod = () => {
     // Logica de la vista
     const url = 'http://localhost:5000/api/tipoDisparo'
     //Hooks: Componente nativo de REACT que se encarga de enlazar el contenido de la vista (HTML) la logica del componente en si
 
     const [tipo, setTipo] = useState();

     const [id, setIds] = useState();
 
 
     const TipoHandler = (event) => {
 
         const { name, value } = event.target;
         setTipo(value);
 
     }
 
    
 
     const idsHandler = (event) => {
 
        const { name, value } = event.target;
        setIds(value);

    }
 
     const PutHandler = async () => {
 
         event.preventDefault();
         const data = {
             tipo: tipo
         }
 
         const result = await axios.put(url+ "/" + id ,data);
         const resultData = (await result).data;
 
         console.log(result);
         console.log(resultData);
         
     };
 
 
 
     return (
        <>
           <div className='container mt-5' style={{ backgroundColor: '#2C3E50', color: '#FFFFFF', padding: '20px', borderRadius: '10px' }}>
                <form onSubmit={PutHandler}>
                    <fieldset>
                    <legend style={{ color: '#2980B9' }}>Actualizar Tipo de Disparo del Arma</legend>
    
                    <div className="form-group row" style={{ backgroundColor: '#34495E', padding: '10px', borderRadius: '5px', marginBottom: '15px' }}>
                        <label className="col-sm-2 col-form-label">Id Tipo de disparo</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control-plaintext" style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }}
                                name="id"
                                onChange={idsHandler}
                            />
                        </div>
                    </div>
    
                    <div className="form-group row" style={{ backgroundColor: '#34495E', padding: '10px', borderRadius: '5px', marginBottom: '15px' }}>
                        <label className="col-sm-2 col-form-label">Tipo disparo del arma</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control-plaintext" style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }}
                                name="tipo"
                                onChange={TipoHandler}
                            />
                        </div>
                    </div>
    
                    <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#2980B9', color: '#FFFFFF' }}>Ingresar Tipo de Disparo del Arma</button>
                    <br/>
                    <Link to="/Post_tipod" style={{ color: '#2C3E50' }}>Ingresar Tipo de Disparo del Arma</Link>
                    <br/>
                    <Link to="/Delete_tipod" style={{ color: '#2C3E50' }}>Eliminar Tipo de Disparo del Arma</Link>
                </fieldset>
                </form>
            </div>
        </>
    );
     
}