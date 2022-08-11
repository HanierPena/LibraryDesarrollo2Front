import React from 'react';
import Cards from './Cards';


class Libro extends React.Component{
    agregar=()=>{}
    eliminar=()=>{}
    

    render(){
        
    const userNameStatus = this.props.usuario;
    const img = this.props.book.image;
    const title = this.props.book.title;
    const description = this.props.book.description;
    let booleanStatus =false;
    if(userNameStatus === 'Carlos'){
        
        booleanStatus=false;
    }else{
        booleanStatus=true;
    }
       return <div className='col-3'>
        <Cards 
        img = {img}
        title = {title}
        description = {description}
        />
        <div>
            <button className='btnAgregar' onClick={()=>this.agregar()}>Agregar</button>
        
        {booleanStatus ?  (
            <button className='btnAgregar' onClick={()=>this.eliminar()}>Eliminar</button>
        ):(<h1></h1>)}
       </div>
       
       </div>
       
    }
}
export default Libro;