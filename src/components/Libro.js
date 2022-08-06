import React from 'react';
import Cards from './Cards';


class Libro extends React.Component{
    agregar=()=>{}
    eliminar=()=>{}
    

    render(){
        
    const userNameStatus = this.props.usuario;
    let booleanStatus =false;
    console.log(this.props.usuario);
    if(userNameStatus === 'Carlos'){
        
        booleanStatus=false;
    }else{
        booleanStatus=true;
    }
       return <div className='wrapper'>
        <Cards 
        img = "https://imagessl4.casadellibro.com/a/l/t7/44/9788415594444.jpg"
        title = "BUSCANDO A ALASKA"
        description = "Miles ve cómo su vida transcurre sin emoción alguna. Su obsesión con memorizar las últimas palabras de personajes ilustres le lleva a querer encontrar su Gran Quizá (como dijo François Rabelais justo antes de morir). Decide mudarse a Culver Creek"
        />
        <div>
            <button className='btnAgregar' onClick={()=>this.agregar()}>Agregar</button>
        </div>
        {booleanStatus ?  (
            <button onClick={()=>this.eliminar()}>Eliminar</button>
        ):(<h1></h1>)}
       
       
       </div>
       
    }
}
export default Libro;