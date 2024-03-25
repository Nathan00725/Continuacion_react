import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


export const Put_tipoa = () => {
     // Logica de la vista
     const url = 'http://localhost:5000/api/tipoArma'
     //Hooks: Componente nativo de REACT que se encarga de enlazar el contenido de la vista (HTML) la logica del componente en si
 
     const [nombre, setNombre] = useState();

     const [id, setIds] = useState();
 
 
     const nombreHandler = (event) => {
 
         const { name, value } = event.target;
         setNombre(value);
 
     }
 
    
 
     const idsHandler = (event) => {
 
        const { name, value } = event.target;
        setIds(value);

    }
 
     const PutHandler = async () => {
 
         event.preventDefault();
         const data = {
             nombre: nombre
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
                    <legend style={{ color: '#2980B9' }}>Actualizar Tipo de arma</legend>
    
                    <div className="form-group row" style={{ backgroundColor: '#34495E', padding: '10px', borderRadius: '5px', marginBottom: '15px' }}>
                        <label className="col-sm-2 col-form-label">Id Tipo de arma</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control-plaintext" style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }}
                                name="id"
                                onChange={idsHandler}
                            />
                        </div>
                    </div>
    
                    <div className="form-group row" style={{ backgroundColor: '#34495E', padding: '10px', borderRadius: '5px', marginBottom: '15px' }}>
                        <label className="col-sm-2 col-form-label">Tipo arma</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control-plaintext" style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }}
                                name="nombre"
                                onChange={nombreHandler}
                            />
                        </div>
                    </div>
    
                    <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#2980B9', color: '#FFFFFF' }}>Ingresar Tipo Arma</button>
                    <br/>
                    <Link to="/Post_tipoa" style={{ color: '#2C3E50' }}>Ingresar Tipo Arma</Link>
                    <br/>
                    <Link to="/Delete_tipoa" style={{ color: '#2C3E50' }}>Eliminar Tipo Arma</Link>
                </fieldset>
                </form>
            </div>
        </>
    );
     
}