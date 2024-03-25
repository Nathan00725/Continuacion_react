import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Muro = () => {

    const [dataMuro, setDataMuro] = useState([]);

    const navigate = useNavigate();

    const [contadorDeBorrar, setContadorDeBorrar] = useState(0);

    const getDatos = async () => {
        const url = "http://localhost:5000/api/publicacion";
        const response = await axios.get(url);
        const datos = (await response).data;
        console.log(datos);
        setDataMuro(datos);

    }

    const borraPublicacion = async ( idpublicacion )=>{

        const url = `http://localhost:5000/api/publicacion/${idpublicacion}`;
        const response = await axios.delete(url);
        const datos = (await response).data;

        setContadorDeBorrar( contadorDeBorrar+ 1 );
        console.log(contadorDeBorrar);

    }

    const editarPublicacion = (idImagen)=>{

        navigate(`/editarPost/${idImagen}`);

    }

    const crearPostHandler = ()=>{

        navigate('/crearPost');

    }

    // siempre se ejecuta cada vez que se renderiza el componente
    useEffect(() => {

        getDatos();

    }, [contadorDeBorrar]);

    return (
        <>
        <div className='container mt-5' style={{ backgroundColor: '#2C3E50', color: '#FFFFFF', padding: '20px', borderRadius: '10px' }}>

        <button onClick={crearPostHandler}  className="btn btn-primary  w-100" type="button" style={{ backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9' }}  >
                Crear Post
        </button>

            {
                dataMuro.map((item) => (
                    <div key={item.id} className="card text-white bg-secondary mx-auto mt-3 mb-3 w-50" style={{width : '80%' }}  >
                        <div className="card-header">
                            <label> {item.nombre_usuario} </label>
                             
                            <button  onClick={ ()=> borraPublicacion(item.id) }  className="btn btn-danger mx-2" style={{ backgroundColor: '#2980B9', color: '#FFFFFF' }}  >Borrar</button>  

                            <button onClick={ ()=> editarPublicacion(item.id) }  className="btn btn-warning mx-2"  style={{ backgroundColor: '#2980B9', color: '#FFFFFF' }} >Editar</button>  
                        </div>
                        <div className="card-body">
                            <img src={`data:${item.mime_type};base64,${item.imagen}`}  style={{width:'100%', backgroundColor: '#283747', color: '#FFFFFF', border: 'none', borderBottom: '1px solid #2980B9'
                         }}  />
                        </div>
                        <div className="card-fotter">
                            <p>{item.caption}</p>
                        </div>
                    </div>
                ))
            }
            </div>
        </>
    )
}
