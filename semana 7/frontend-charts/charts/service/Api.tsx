import axios from 'axios'

export const getSumaSalario = async ()=>{

    const response = await axios.get('http://localhost:5000/suma-salario-departamento');
    return response.data

}

export const getCountDepartamento = async ()=>{

    const response = await axios.get('http://localhost:5000/count-deparment');
    return response.data

}

export const getDeptos = async ()=>{

    const response = await axios.get(`http://localhost:5000/departamentos`);
    return response.data

}

export const getSalarioMaximo = async (departmentId:number)=>{

    const response = await axios.get(`http://localhost:5000/maximo-salario-departamento/${departmentId}`);
    return response.data

}