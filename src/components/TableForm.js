import { useState, useEffect, useLayoutEffect } from 'react'
import React from 'react'
import {AiFillDelete, AiFillEdit} from "react-icons/ai"
import { v4 as uuidv4 } from "uuid"

export default function TableForm({ product, setProduct, hsn, setHsn, qty, setQty, unit, setUnit, subTotal, setSubTotal, cgst, setCgst, sgst, setSgst, igst, setIgst, total, setTotal, list, setList }) {

    const [isEditing, setIsEditing] = useState(false)

    // Submit Function
    const handleSubmit = (e) => {
        e.preventDefault()

        const newItems = {
            id: uuidv4(),
            product,
            hsn,
            qty,
            unit,
            subTotal,
            cgst,
            sgst,
            igst,
            total,
        }
        setProduct("")
        setHsn("")
        setQty("")
        setUnit("")
        setSubTotal("") 
        setCgst("")
        setSgst("")
        setIgst("")
        setTotal("")
        setList([...list, newItems])
        setIsEditing(false)
        console.log(list)

    }


    // SUBTOTAL CALCULATION
    useEffect(() => {
        const calculateSubtotal = () => {
            setSubTotal(qty * unit);
        };

        calculateSubtotal();
    }, [qty, unit]);

    useEffect(() => {
        const calculateCGST = () => {
            setCgst(subTotal * 0.09);
        };

        calculateCGST();
    }, [subTotal, setCgst]);

    useEffect(() => {
        const calculateSGST = () => {
            setSgst(subTotal * 0.09);
        };

        calculateSGST();
    }, [subTotal, setSgst]);



    useEffect(() => {
        const calculateIGST = () => {
            setIgst(subTotal * 0.18);
        };

        calculateIGST();
    }, [subTotal, setIgst]);

    useEffect(() => {
        const calculateTotal = () => {
            setTotal(subTotal + cgst + sgst + igst);
        };

        calculateTotal();
    }, [subTotal, cgst, sgst]);

    // Edit Function
    const editRow = (id) => {
        const editingRow = list.find((row) => row.id === id)
        setList(list.filter((row) => row.id !== id))
        setIsEditing(true)
        setProduct(editingRow.product)
        setHsn(editingRow.hsn)
        setQty(editingRow.qty)
        setUnit(editingRow.unit)
        setCgst(editingRow.cgst)
        setSgst(editingRow.sgst)
        setIgst(editingRow.igst)

    }


    // Delete Function
    const deleteRow = (id) =>{
        setList(list.filter((row) => row.id !== id))
    }



    // // TOTAL CALCULATION
    // useEffect(() => {
    //     const calculateCGST = (cgst) => {
    //         setCgst(subTotal * 9/100)
    //     }

    //     calculateCGST(cgst)
    //  }, [cgst, subTotal, unit, qty, setCgst])


    return (
        <>
            <form onSubmit={handleSubmit}>

                <div className="flex flex-col">
                    {/* <label htmlFor="SN">SN</label>
                <input type="text" name="SN" id="SN" placeholder="product" value={sn} onChange={(e) => setSn(e.target.value)}
                /> */}

                    <label htmlFor="Product">Product</label>
                    <input type="text" name="Product" id="Product" placeholder="product" value={product} onChange={(e) => setProduct(e.target.value)}
                    />

                </div>

                <div className="md:grid grid-cols-4 gap-10">
                    <div className="flex flex-col">
                        <label htmlFor="HSN">HSN/SAC</label>
                        <input type="text" name="HSN" id="HSN" placeholder="HSN/SAC" value={hsn} onChange={(e) => setHsn(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="Quantity">Quantity</label>
                        <input type="text" name="Quantity" id="Quantity" placeholder="Quantity" value={qty} onChange={(e) => setQty(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="Unit">Unit</label>
                        <input type="text" name="Unit" id="Unit" placeholder="Unit" value={unit} onChange={(e) => setUnit(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="Subtotal">Subtotal</label>
                        <p>{subTotal}</p>
                    </div>
                </div>

                <div className="md:grid grid-cols-4 gap-10">
                    <div className="flex flex-col">
                        <label htmlFor="CGST">CGST</label>
                        <input type="text" name="CGST" id="CGST" placeholder="CGST" value={cgst} onChange={(e) => setCgst(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="SGST">SGST</label>
                        <input type="text" name="SGST" id="SGST" placeholder="SGST" value={sgst} onChange={(e) => setSgst(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="IGST">IGST</label>
                        <input type="text" name="IGST" id="IGST" placeholder="IGST" value={igst} onChange={(e) => setIgst(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="Total">Total</label>
                        <p>{total}</p>


                    </div>
                </div>

                <button type="submit" className="bg-blue-500 text-white font-bold mb-20 py-2 px-8 rounded shadow border-2  border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">{isEditing ? "Editing Row Item" : "Add Table Item"}</button>
            </form>

            {/* TABLE ITEMS */}

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
                                <td><button onClick={() => deleteRow(id)}> <AiFillDelete className="text-red-500 font-bold text-xl"/></button></td>
                                <td><button onClick={() => editRow(id)}> <AiFillEdit className="text-green-500 font-bold text-xl"/></button></td>

                            </tr>
                        </tbody>
                    </React.Fragment>

                ))}
            </table>


        </>
    )
}
