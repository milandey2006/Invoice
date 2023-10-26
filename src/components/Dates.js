import React from 'react'

export default function Dates({invoiceNo, invoiceDate, dueDate, paymentMethod, salesPerson, po}) {
  return (
    <>
    <article className="my-5 flex flex-col items-end justify-end">
          <ul>
            <li className="p-1"><span className="font-bold">Invoice No: </span>{invoiceNo}</li>
            <li className="p-1"><span className="font-bold">Invoice Date: </span>{invoiceDate}</li>
            <li className="p-1"><span className="font-bold">Due Date: </span>{dueDate}</li>
            {/* <li className="p-1"><span className="font-bold">Payment Term:: </span>{dueDate}</li> */}
            <li className="p-1"><span className="font-bold">Payment Method: </span>{paymentMethod}</li>
            <li className="p-1"><span className="font-bold">Salesperson: </span>{salesPerson}</li>
            <li className="p-1"><span className="font-bold">Purchase Order: </span>{po}</li>
          </ul>
        </article>
    </>
  )
}
