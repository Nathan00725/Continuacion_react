import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const baseUrl = import.meta.env.MY_APP_URL;

export const FormularioUsuarios = () => {

  const [dataForm, setDataForm] = useState({
    nombre_usuario : "", 
    correo_electronico : "", 
    contrasena : "", 
    nombre : "", 
    apellido : "", 
    activo : true
   });

   const handlerChange = (event)=>{

    const {name, value} = event.target;
    setDataForm({ ...dataForm, [name]: value });

   }

   const handlerSubmit = async()=>{

    event.preventDefault();

    const url = baseUrl + '/usuarioCrud';

    const result = await axios.post(url, dataForm);

    const resultData = (await  result).data;
    console.log(resultData);
   }

  return (
    <>
        <div className='container mt-5' style={{ backgroundColor: '#2C3E50', color: '#FFFFFF', padding: '20px', borderRadius: '10px' }}>

            <form onSubmit = {handlerSubmit} >
                <fieldset>
                <legend style={{ color: '#2980B9' }}>Administración de Usuarios</legend>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Usuario</label>
                        <div className="col-sm-10">
                            <input type='text' className="form-control-plaintext" style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }}
                                name="nombre_usuario"
                                onChange={handlerChange} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Correo</label>
                        <div className="col-sm-10">
                            <input type='email' className="form-control-plaintext" style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }}
                                name="correo_electronico"
                                onChange={handlerChange}
                                />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">contrasena</label>
                        <div className="col-sm-10">
                            <input type='password' className="form-control-plaintext" style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }}
                                name="contrasena"
                                onChange={handlerChange}
                                />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Nombre</label>
                        <div className="col-sm-10">
                            <input type='text' className="form-control-plaintext" style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }}
                                name="nombre" onChange={handlerChange}
                                />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Apellido</label>
                        <div className="col-sm-10">
                            <input type='text' className="form-control-plaintext" style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }}
                                name="apellido" onChange={handlerChange}
                                />
                        </div>
                    </div>
                    
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Activo</label>
                        <div className="col-sm-10">
                            <select className="form-select"
                                name="activo" onChange={handlerChange}
                                style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }}
                                >
                                    
                                <option value={true}  >Si</option>
                                <option value={false}>No</option>
                                
                            </select>
                        </div>
                    </div>

                    

                    <button type="submit" className="btn btn-primary w-100">Crear Usuario</button>
                </fieldset>
            </form>
        </div>

    </>
  )
}
