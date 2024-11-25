import axios from "axios";

export const getAvgByLineCode = async ()=>{
    const response = await axios.get('http://localhost:5000/promedioxLinecode')
    return response.data
}

export const getTotalValueByProductType = async ()=>{
    const response = await axios.get('http://localhost:5000/valorTotalxProducType')
    return response.data
}

export const getProductosDisponiblesPorStatus = async ()=>{
    const response = await axios.get('http://localhost:5000/productosDisponiblesPorEstatus')
    return response.data
}