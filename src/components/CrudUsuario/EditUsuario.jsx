import axios from 'axios'
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const baseUrl = import.meta.env.MY_APP_URL;

export const EditUsuario = () => {

    const navigate =  useNavigate();

    const {nombre_usuario} = useParams();

    const [dataForm, setDataForm] = useState({
        correo_electronico: "",
        contrasena: "",
        nombre: "",
        apellido: "",
        activo: true,
    });

    const getUsuarioModificar = async()=>{

        console.log("Funcion Get Usuario Modificar")

        const url = baseUrl + '/usuarioCrud/'+ nombre_usuario;
        const result = axios.get(url);
        const resulData = (await result).data;
        let tempUsuario = {
            correo_electronico: resulData[0].correo_electronico,
            contrasena:  resulData[0].contrasena,
            nombre:  resulData[0].nombre,
            apellido: resulData[0].apellido,
            activo: resulData[0].activo
        }

        setDataForm(tempUsuario);

    }   

    useEffect(()=>{
        
        getUsuarioModificar()

    } ,[]);

    const handlerChange = (event) => {

        const { name, value } = event.target;
        setDataForm({ ...dataForm, [name]: value });

    }

    const handlerSubmit = async () => {

        event.preventDefault();
        
        console.log("Entre al Handler");
        const url = baseUrl + '/usuarioCrud/' + nombre_usuario;

        const result = await axios.put(url, dataForm);

        const resultData = (await result).data;
        console.log(resultData);

        navigate('/crudUsuario')
    }

    return (
        <>
           <div className='container mt-5' style={{ backgroundColor: '#2C3E50', color: '#FFFFFF', padding: '20px', borderRadius: '10px' }}>

                <form onSubmit={handlerSubmit} >
                    <fieldset>
                    <legend style={{ color: '#2980B9' }}>Administración de Usuarios</legend>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Usuario</label>
                            <div className="col-sm-10">
                                <input type='text' className="form-control-plaintext" style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }}
                                    name="nombre_usuario"
                                    value={nombre_usuario}
                                    onChange={handlerChange}
                                    disabled={true}
                                    />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Correo</label>
                            <div className="col-sm-10">
                                <input type='email' className="form-control-plaintext" style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }}
                                    name="correo_electronico"
                                    value={dataForm.correo_electronico}
                                    onChange={handlerChange}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">contrasena</label>
                            <div className="col-sm-10">
                                <input type='password' className="form-control-plaintext" style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }}
                                    name="contrasena"
                                    value={dataForm.contrasena}
                                    onChange={handlerChange}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Nombre</label>
                            <div className="col-sm-10">
                                <input type='text' className="form-control-plaintext" style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }}
                                    name="nombre" 
                                    value={dataForm.nombre}
                                    onChange={handlerChange}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Apellido</label>
                            <div className="col-sm-10">
                                <input type='text' className="form-control-plaintext" style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }}
                                    name="apellido" 
                                    value={dataForm.apellido}
                                    onChange={handlerChange}
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

                    

                        <button type="submit"  className="btn btn-primary w-100" style={{ backgroundColor: '#2980B9', color: '#FFFFFF' }}>Actualizar Usuario</button>
                    </fieldset>
                </form>
            </div>

        </>
    )

}
