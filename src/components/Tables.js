import React from 'react'
import { useState, useEffect } from 'react';

export default function Tables({ list }) {
  const [serialNumbers, setSerialNumbers] = useState({});

  useEffect(() => {
    // Generate serial numbers when the component mounts
    generateSerialNumbers();
  }, [list]);

  const generateSerialNumbers = () => {
    const newSerialNumbers = {};
    list.forEach((item, index) => {
      newSerialNumbers[item.id] = index + 1;
    });
    setSerialNumbers(newSerialNumbers);
  };

  return (
    <>
      <table width="100%" className="mb-20">
        <thead>
          <tr>
            <td className="font-bold">SN</td>
            <td className="font-bold" width="30%">
              Product Name
            </td>
            <td className="font-bold">HSN/SAC</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Unit</td>
            <td className="font-bold">Subtotal</td>
            <td className="font-bold">CGST</td>
            <td className="font-bold">SCGST</td>
            <td className="font-bold">IGST</td>
            <td className="font-bold">Total</td>
          </tr>
        </thead>
        <tbody>
          {list.map(({ id, product, hsn, qty, unit, subtotal, cgst, sgst, igst, total }) => (
            <tr key={id}>
              <td>{serialNumbers[id]}</td>
              <td>{product}</td>
              <td>{hsn}</td>
              <td>{qty}</td>
              <td>{unit}</td>
              <td>{subtotal}</td>
              <td>{cgst}</td>
              <td>{sgst}</td>
              <td>{igst}</td>
              <td>{total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
