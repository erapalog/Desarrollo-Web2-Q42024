'use client';
import React, {useState, useEffect } from 'react';
import Image from 'next/image';
import { UseContext } from '../context/Provider';
import style from '../styles/styles.module.css';

export default function CardProducts() {
    const { car, removeFromCart, formatNumber, save } = UseContext();
    const [isv, setIsv] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
      calculateTotal();
  }, [car]); 

    const calculateTotal = () => {
      let tot = 0;
      let tot_isv = 0;
      car.forEach(producto => {
        tot += Number(producto.precio);
        tot_isv += Number(producto.isvProducto);
      });
      setTotal(tot);
      setIsv(tot_isv);
    }

    return (
        <div className="row">
            <div className="table-scroll">
                <table className="table table-striped table-hover border">
                    <thead>
                    {car.length > 0 ?
                        <tr style={{textAlign: 'end'}}>
                        <th className="font-size-10">No.</th>
                        <th className="font-size-10"></th>
                        <th className="font-size-10" style={{textAlign: 'start'}}>Nombre</th>
                        <th className="font-size-10">Impuesto</th>
                        <th className="font-size-10">Precio</th>
                        <th className="font-size-10">Total</th>
                        </tr>
                      : null
                      }
                    </thead>
                    <tbody>
                    {car.length > 0 ? (
                    car.map((producto) => (
                        <tr key={producto.id}>
                            <td className="font-size-10" style={{textAlign: 'end'}}>{producto.id}</td>
                            <td style={{textAlign: 'start'}}>
                                <div style={{width: '30px', height: '30px', position: 'relative', cursor: 'pointer'}}>
                                    <Image src={producto.imagenProducto} alt={producto.nombre} layout="fill" objectFit="cover" className={`${style.scale2} card-img-top`} />
                                </div>
                            </td>
                            <td className="font-size-10" style={{textAlign: 'start'}}>{producto.nombre}</td>
                            <td className="font-size-10" style={{textAlign: 'end'}}>L {formatNumber(Number(producto.isvProducto))}</td>
                            <td className="font-size-10" style={{textAlign: 'end'}}>L {formatNumber(Number(producto.precio))}</td>
                            <td className="font-size-10" style={{textAlign: 'end'}}>L {formatNumber(Number(producto.precio) + Number(producto.isvProducto))}</td>
                            <td className="font-size-10">
                              <button type="button" className="btn btn-danger btn-sm" onClick={() => removeFromCart(producto.id)}><i className="fa fa-trash-o"></i></button>
                            </td>
                        </tr>
                    ))
                  ) : 
            (
              <tr>
                <td colSpan={6} className="text-center"><div className="alert alert-warning" role="alert"><span><i className="fa fa-info-circle" style={{fontSize: 12}}></i>&nbsp;Aún no has agregado nada a tu carrito de compras</span></div>
                </td>
              </tr>
            )}

          {car.length > 0 ?
            <tr style={{textAlign: 'end'}}>
              <td className="font-size-10"></td>
              <td className="font-size-10"></td>
              <td className="font-size-10"></td>
              <td className="font-size-10"><b>L {formatNumber(Number(isv))}</b></td>
              <td className="font-size-10"><b>L {formatNumber(Number(total))}</b></td>
              <td className="font-size-10"><b>L {formatNumber(Number(isv + total))}</b></td>
              <td className="font-size-10">
                <button type="button" className="btn btn-success btn-sm" onClick={() => save()}><i className="fa fa-check-circle"></i>&nbsp;Pagar</button>
              </td>
            </tr>
            :
            null
            }            
          </tbody>
        </table>
      </div>
    </div>
    );
}
