import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


export const Put_cali = () => {
     // Logica de la vista
     const url = 'http://localhost:5000/api/calibre'
     //Hooks: Componente nativo de REACT que se encarga de enlazar el contenido de la vista (HTML) la logica del componente en si
 
     const [calibre, setCalibre] = useState();

     const [id, setIds] = useState();
 
 
     const CalibreHandler = (event) => {
 
         const { name, value } = event.target;
         setCalibre(value);
 
     }
 
    
 
     const idsHandler = (event) => {
 
        const { name, value } = event.target;
        setIds(value);

    }
 
     const PutHandler = async () => {
 
         event.preventDefault();
         const data = {
            calibre: calibre
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
                    <legend style={{ color: '#2980B9' }}>Actualizar el Calibre del arma</legend>
    
                    <div className="form-group row" style={{ backgroundColor: '#34495E', padding: '10px', borderRadius: '5px', marginBottom: '15px' }}>
                        <label className="col-sm-2 col-form-label">Id del Calibre del arma</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control-plaintext" style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }}
                                name="id"
                                onChange={idsHandler}
                            />
                        </div>
                    </div>
    
                    <div className="form-group row" style={{ backgroundColor: '#34495E', padding: '10px', borderRadius: '5px', marginBottom: '15px' }}>
                        <label className="col-sm-2 col-form-label">Calibre del arma</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control-plaintext" style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }}
                                name="calibre"
                                onChange={CalibreHandler}
                            />
                        </div>
                    </div>
    
                    <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#2980B9', color: '#FFFFFF' }}>Actualizar el Calibre del arma</button>
                    <br/>
                    <Link to="/Post_cali" style={{ color: '#2C3E50' }}>Ingresar el Calibre del arma</Link>
                    <br/>
                    <Link to="/Delete_cali" style={{ color: '#2C3E50' }}>Eliminar el Calibre del arma</Link>
                </fieldset>
                </form>
            </div>
        </>
    );
     
}