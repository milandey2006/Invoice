import React, { useState, useEffect } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';

export default function TableForm({ product, setProduct, hsn, setHsn, qty, setQty, unit, setUnit, subTotal, setSubTotal, cgst, setCgst, sgst, setSgst, igst, setIgst, total, setTotal, list, setList }) {
  const [isEditing, setIsEditing] = useState(false);
  const [serialNumbers, setSerialNumbers] = useState({});
  const [selectedTaxType, setSelectedTaxType] = useState('CGST_SGST');
  const [selectedCGSTTax, setSelectedCGSTTax] = useState('9%');
  const [selectedSGSTTax, setSelectedSGSTTax] = useState('9%');
  const [selectedIGSTTax, setSelectedIGSTTax] = useState('9%');

  useEffect(() => {
    generateSerialNumbers();
  }, [list]);

  const generateSerialNumbers = () => {
    const newSerialNumbers = {};
    list.forEach((item, index) => {
      newSerialNumbers[item.id] = index + 1;
    });
    setSerialNumbers(newSerialNumbers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
    };

    setProduct('');
    setHsn('');
    setQty('');
    setUnit('');
    setSubTotal('');
    setCgst('');
    setSgst('');
    setIgst('');
    setTotal('');
    setList([...list, newItems]);
    setIsEditing(false);
  };

  const calculateSubtotal = () => {
    setSubTotal(qty * unit);
  };

  const calculateTax = (taxRate) => {
    return subTotal * (parseFloat(taxRate) / 100);
  };

  useEffect(() => {
    calculateSubtotal();
  }, [qty, unit]);

  useEffect(() => {
    if (selectedTaxType === 'CGST_SGST') {
      setCgst(calculateTax(selectedCGSTTax));
      setSgst(calculateTax(selectedSGSTTax));
      setIgst(0);
    } else if (selectedTaxType === 'IGST') {
      setIgst(calculateTax(selectedIGSTTax));
      setCgst(0);
      setSgst(0);
    }
  }, [subTotal, selectedTaxType, selectedCGSTTax, selectedSGSTTax, selectedIGSTTax]);

  useEffect(() => {
    setTotal(subTotal + cgst + sgst + igst);
  }, [subTotal, cgst, sgst, igst]);

  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id);
    setList(list.filter((row) => row.id !== id));
    setIsEditing(true);
    setProduct(editingRow.product);
    setHsn(editingRow.hsn);
    setQty(editingRow.qty);
    setUnit(editingRow.unit);
    setCgst(editingRow.cgst);
    setSgst(editingRow.sgst);
    setIgst(editingRow.igst);
  };

  const deleteRow = (id) => {
    setList(list.filter((row) => row.id !== id));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="Product">Product</label>
          <input type="text" name="Product" id="Product" placeholder="product" value={product} onChange={(e) => setProduct(e.target.value)} />
        </div>

        <div className="md:grid grid-cols-4 gap-10">
          <div className="flex flex-col">
            <label htmlFor="HSN">HSN/SAC</label>
            <input type="text" name="HSN" id="HSN" placeholder="HSN/SAC" value={hsn} onChange={(e) => setHsn(e.target.value)} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="Quantity">Quantity</label>
            <input type="text" name="Quantity" id="Quantity" placeholder="Quantity" value={qty} onChange={(e) => setQty(e.target.value)} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="Unit">Unit</label>
            <input type="text" name="Unit" id="Unit" placeholder="Unit" value={unit} onChange={(e) => setUnit(e.target.value)} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="Subtotal">Subtotal</label>
            <p>{subTotal}</p>
          </div>
        </div>

        <div className="md:grid grid-cols-4 gap-10">
          <div className="flex flex-col">
            <label htmlFor="TaxType">Tax Type</label>
            <select name="TaxType" id="TaxType" value={selectedTaxType} onChange={(e) => setSelectedTaxType(e.target.value)}>
              <option value="CGST_SGST">CGST + SGST</option>
              <option value="IGST">IGST</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="TaxRate">Tax Rate</label>
            {selectedTaxType === 'CGST_SGST' && (
              <>
                <label>CGST</label>
                <select name="CGST" id="CGST" value={selectedCGSTTax} onChange={(e) => setSelectedCGSTTax(e.target.value)}>
                  <option value="9%">9%</option>
                  <option value="18%">18%</option>
                </select>
                <label>SGST</label>
                <select name="SGST" id="SGST" value={selectedSGSTTax} onChange={(e) => setSelectedSGSTTax(e.target.value)}>
                  <option value="9%">9%</option>
                  <option value="18%">18%</option>
                </select>
              </>
            )}
            {selectedTaxType === 'IGST' && (
              <select name="IGST" id="IGST" value={selectedIGSTTax} onChange={(e) => setSelectedIGSTTax(e.target.value)}>
                <option value="9%">9%</option>
                <option value="18%">18%</option>
              </select>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="Total">Total</label>
            <p>{total}</p>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white font-bold mb-20 py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
        >
          {isEditing ? 'Editing Row Item' : 'Add Table Item'}
        </button>
      </form>

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
        {list.map(({ id, product, hsn, qty, unit, subtotal, cgst, sgst, igst, total }) => (
          <React.Fragment key={id}>
            <tbody>
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
                <td>
                  <button onClick={() => deleteRow(id)}>
                    {' '}
                    <AiFillDelete className="text-red-500 font-bold text-xl" />
                  </button>
                </td>
                <td>
                  <button onClick={() => editRow(id)}>
                    {' '}
                    <AiFillEdit className="text-green-500 font-bold text-xl" />
                  </button>
                </td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
    </>
  );
}
