import React from 'react'

export default function Tables({list}) {

    
  return (
    <>
    <table width="100%" className="mb-20">

<thead>
    <tr>
        <td className="font-bold">SN</td>
        <td className="font-bold" width="30%">Product Name</td>
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
{list.map(({ id, product, hsn, qty, unit, subtotal, cgst, sgst, igst, total }) => (

    <React.Fragment key={id}>


        <tbody >
            <tr>
                <td>1</td>
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
        </tbody>
    </React.Fragment>

))}
</table>
    </>
  )
}
