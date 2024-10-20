import React, { useEffect, useState } from 'react'

function Formulario() {
   //Contar letras

  const [Texto,settexto] = useState("");
  const [contadortxt,setcontadortxt] = useState(0);
  const [color,setcolor]=useState<string>("red");




  useEffect(()=>{
   
    const contadortxt = Texto.length;
    setcontadortxt(contadortxt)

 if (contadortxt<10){
    setcolor("red"); 
 }else if(contadortxt >=10 && contadortxt<=20){
    setcolor("orange");
 }else{
    setcolor("green");
 }


  },[Texto])
   
  function manejadorcambiotxt(e:any){
    settexto(e.target.value)
  }


  return (
    <div>
    <h1> Contador de letras </h1>

    <textarea name="" id="" 
    
    value={Texto}
    onChange={manejadorcambiotxt}

    style={{ padding: '8px', fontSize: '16px', width: '50%' }}
    
    ></textarea>
    
    <p style={{color:color}}>la cantidad de letras ingresadas es : {contadortxt}</p>


    </div>
  )
}

export default Formulario