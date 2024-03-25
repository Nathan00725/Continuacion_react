import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CrearPost = () => {

    const navigate =  useNavigate();

    const [form, setForm] = useState({

        nombre_usuario : "", 
        imagen : "", 
        caption : ""
        
    });



    const onChangeHandler = () => {

        const { name, value } = event.target;
        if (name ==="imagen") {

           const img = event.target.files[0];
           setForm({ ...form, [name]: img });
           return;
           
        }
        setForm({ ...form, [name]: value });

    }

    const submitHandler = async () => {

        const url = "http://localhost:5000/api/publicacion";

        event.preventDefault();

        const datosFormulario = new FormData();
        
        datosFormulario.append( "nombre_usuario" , form.nombre_usuario);
        datosFormulario.append( "caption" , form.caption);
        datosFormulario.append( "imagen" , form.imagen);

        const result  = await axios.post(url, datosFormulario);
        const resultData = (await result).data;

        navigate('/muro')
    }

    return (
        <>
         <div className='container mt-5' style={{ backgroundColor: '#2C3E50', color: '#FFFFFF', padding: '20px', borderRadius: '10px' }}>
            <form onSubmit={submitHandler} >
                <fieldset>
                <legend style={{ color: '#2980B9' }}>Crear Post</legend>

                     <div className="form-group row" style={{ backgroundColor: '#34495E', padding: '10px', borderRadius: '5px', marginBottom: '15px' }}>
                        <label className="col-sm-2 col-form-label">Usuario</label>
                        <div className="col-sm-10">
                            <input className="form-control-plaintext" style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }}
                                name="nombre_usuario"
                                onChange={onChangeHandler} />
                        </div>
                    </div>

                     <div className="form-group row" style={{ backgroundColor: '#34495E', padding: '10px', borderRadius: '5px', marginBottom: '15px' }}>
                        <label className="col-sm-2 col-form-label">Caption</label>
                        <div className="col-sm-10">
                            <input className="form-control-plaintext" style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }}
                                name="caption"
                                onChange={onChangeHandler} />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label mt-4">Imagen</label>
                        <input className="form-control " type="file" name="imagen" onChange={onChangeHandler} style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }} />
                    </div>

                    <button type="submit"  className="btn btn-primary w-100" style={{ backgroundColor: '#2980B9', color: '#FFFFFF' }}>Crear Post</button>
                </fieldset>
            </form>

        </div>
    </>  
        
    )
}


