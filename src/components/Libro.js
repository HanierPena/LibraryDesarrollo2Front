import React from 'react';



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
       return <div>
        <h1>Libro</h1>
        <button onClick={()=>this.agregar()}>Agregar</button>
        {booleanStatus ?  (
            <button onClick={()=>this.eliminar()}>Eliminar</button>
        ):(<h1></h1>)}
       
       
       </div>
       
    }
}
export default Libro;