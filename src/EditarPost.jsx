import React, { useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const EditarPost = () => {

  const {idpublicacion} = useParams();

  const [data , setData] = useState({
    caption : ""
  });

  const handlerChange = (event)=>{

    const { name , value } = event.target

    setData({...data,  [name]:value });

  }

  const handlerSubmit = async (event) =>{

    event.preventDefault();
    const url = `http://localhost:5000/api/publicacion/${idpublicacion}`;
    const result  = await axios.put(url,data);
    const resultData = (await result).data;

    console.log(resultData);

  }

  return (
    <>
        <div className='container mt-5' style={{ backgroundColor: '#2C3E50', color: '#FFFFFF', padding: '20px', borderRadius: '10px' }}>
            <form onSubmit={handlerSubmit} >
                <fieldset>
                <legend style={{ color: '#2980B9' }}>Editar Post</legend>

                    
                <div className="form-group row" style={{ backgroundColor: '#34495E', padding: '10px', borderRadius: '5px', marginBottom: '15px' }}>

                        <label className="col-sm-2 col-form-label">Caption</label>
                        <div className="col-sm-10">
                            <input className="form-control-plaintext"
                                name="caption"
                                style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }} 
                                onChange={handlerChange}
                             />
                        </div>
                    </div>

                    

                    <button type="submit" className="btn btn-primary w-100">Crear Post</button>
                </fieldset>
            </form>

        </div>
    </> 
  )
}
