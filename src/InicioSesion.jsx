import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const InicioSesion = () => {

    const navigate = useNavigate();

    const [dataForm, setDataForm] = useState({
        nombre_usuario: "",
        pass: ""
    });

    const [inicioSesion, setInicioSesion] = useState("");

    const onChangeHandler = (event) => {

        const { name, value } = event.target;
        setDataForm({ ...dataForm, [name]: value });

    }

    const submitHandler = async () => {
        event.preventDefault();

        const url = `http://localhost:5000/api/User/auth/${dataForm.nombre_usuario}/${dataForm.pass}`;

        try {
            const result = await axios.get(url);
            const resultData = (await result).data;
            navigate('/registro');
        } catch (err) {
            setInicioSesion("Error de Inicio de Sesion");
        }

    }

    return (
        <>
            <div className='container mt-5' style={{ backgroundColor: '#2C3E50', color: '#FFFFFF', padding: '20px', borderRadius: '10px' }}>
                <form onSubmit={submitHandler} >
                    <fieldset>
                    <legend style={{ color: '#2980B9' }}>Inicio Sesion</legend>

                    <div className="form-group row" style={{ backgroundColor: '#34495E', padding: '10px', borderRadius: '5px', marginBottom: '15px' }}>
                            <label className="col-sm-2 col-form-label">Contraseña</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control-plaintext"
                                    name="pass"
                                    style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }} 
                                    onChange={onChangeHandler} />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Iniciar Sesion</button>
                    </fieldset>
                </form>
                <div> {inicioSesion} </div>
            </div>
        </>
    )
}
