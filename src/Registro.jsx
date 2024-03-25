import { useState } from "react";
import axios from "axios";

export const Registro = () => {

    // Logica de la vista
    const url = 'http://localhost:5000/api/User'
    //Hooks: Componente nativo de REACT que se encarga de enlazar el contenido de la vista (HTML) la logica del componente en si

    const [usuario, setUsuario] = useState();

    const [correo, setCorreo] = useState();

    const [nombre, setNombre] = useState();

    const [apellido, setApellido] = useState();

    const [pass, setPass] = useState();

    const [passConfirm, setPassConfirm] = useState();

    const usuarioHandler = (event) => {

        const { name, value } = event.target;
        setUsuario(value);

    }

    const correoHandler = (event) => {

        const { name, value } = event.target;
        setCorreo(value);

    }

    const nombreHandler = (event) => {

        const { name, value } = event.target;
        setNombre(value);

    }

    const apellidoHandler = (event) => {

        const { name, value } = event.target;
        setApellido(value);

    }

    const passHandler = (event) => {

        const { name, value } = event.target;
        setPass(value);

    }

    const passConfirmHandler = (event) => {

        const { name, value } = event.target;
        setPassConfirm(value);

    }

    const submitHandler = async () => {

        event.preventDefault();
        const data = {
            nombre_usuario: usuario,
            correo_electronico: correo,
            contrasena: pass,
            nombre: nombre,
            apellido: apellido,
            confirmacion_con: passConfirm
        }

        const result = await axios.post(url, data);
        const resultData = (await result).data;

        console.log(result);
        console.log(resultData);

    }



    // Esto es lo que renderiza el Navegador
    return (
        <>
            <div className='container mt-5' style={{ backgroundColor: '#2C3E50', color: '#FFFFFF', padding: '20px', borderRadius: '10px' }}>
                <form onSubmit={submitHandler}>
                    <fieldset>
                    <legend style={{ color: '#2980B9' }}>Registro de Usuarios</legend>
    
                         <div className="form-group row" style={{ backgroundColor: '#34495E', padding: '10px', borderRadius: '5px', marginBottom: '15px' }}>
                            <label  className="col-sm-2 col-form-label">Usuario</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext" name="usuario" onChange={usuarioHandler} style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }} placeholder="Ingrese su Usuario"  />
                            </div>
                        </div>
    
                         <div className="form-group row" style={{ backgroundColor: '#34495E', padding: '10px', borderRadius: '5px', marginBottom: '15px' }}>
                            <label className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext" onChange={correoHandler} style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }}  name="correo" placeholder="Ingrese su Correo" />
                            </div>
                        </div>
    
                         <div className="form-group row" style={{ backgroundColor: '#34495E', padding: '10px', borderRadius: '5px', marginBottom: '15px' }}>
                            <label  className="col-sm-2 col-form-label">Nombre</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext" name="nombre" onChange={nombreHandler} style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }}placeholder="Ingrese su Nombre" />
                            </div>
                        </div>
    
                         <div className="form-group row" style={{ backgroundColor: '#34495E', padding: '10px', borderRadius: '5px', marginBottom: '15px' }}>
                            <label className="col-sm-2 col-form-label">Apellido</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext" name="apellido" onChange={apellidoHandler} style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }}placeholder="Ingrese su Apellido" />
                            </div>
                        </div>
    
                         <div className="form-group row" style={{ backgroundColor: '#34495E', padding: '10px', borderRadius: '5px', marginBottom: '15px' }}>
                            <label  className="col-sm-2 col-form-label">Contrasena</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control-plaintext" name="pass" onChange={passHandler} style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }} placeholder="Ingrese su Contraseña" />
                            </div>
                        </div>
    
                         <div className="form-group row" style={{ backgroundColor: '#34495E', padding: '10px', borderRadius: '5px', marginBottom: '15px' }}>
                            <label  className="col-sm-2 col-form-label">Confirmación</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control-plaintext" name="passConfirm" onChange={passConfirmHandler}  style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }} placeholder="Confirme su Contraseña" />
                            </div>
                        </div>
    
                        <button type="submit" className="btn btn-primary w-100">Crear Usuario</button>
                    </fieldset>
                </form>
            </div>
        </>
    );

}