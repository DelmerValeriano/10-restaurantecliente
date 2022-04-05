import React,{useState,useEffect,useContext} from 'react';
import {Link} from 'react-router-dom';
import {FirebaseContext} from '../../firebase'
import { Platillo } from '../ui/Platillo';


export const Menu = () => {

  const {firebase}= useContext(FirebaseContext);
  const [platillos,setPlatillos]=useState([]);


  //consultar la base de datos al cargar
  useEffect(()=>{
    const obtenerPlatillo= ()=>{
       firebase.db.collection('productos').onSnapshot(handleSnapshot);

    }
    obtenerPlatillo();

  },[])

  //Snapshot nos permite utilizar la base de datos en tiempo real de firestore
  const handleSnapshot = snapshot =>{
    const platillos= snapshot.docs.map(doc=>{
      return{
        id: doc.id,
        ...doc.data()
      }
    })
    setPlatillos(platillos);


  }


  return (
    <>
    <h1 className="text-3xl font-light mb-4">Menu</h1>
    <Link to="/nuevoplatillo" className="bg-blue-800 hover:bg-blue-700 inline-block mb-5 p-2 text-white uppercase font-bold">
    Agregar Platillo

    </Link>

    {platillos.map(platillo=>(
      <Platillo
        key={platillo.id}
        platillo={platillo}
      />
    ))}


    
    
    </>
  )
}
