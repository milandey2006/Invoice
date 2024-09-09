import { useState } from "react";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import Tables from "./components/Tables";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import ClientsDetails from "./components/ClientsDetails";
import Dates from "./components/Dates";
import TableForm from "./components/TableForm";
function App() { 

  const [showInvoice, setshowInvoice] = useState(false)

  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [bank, setBank] = useState("")
  const [bankAc, setBankAc] = useState("")
  const [ifsc, setIfsc] = useState("")
  const [website, setWebsite] = useState("")
  const [clientName, setClientName] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [invoiceNo, setInvoiceNumber] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")
  const [salesPerson, setSalesPerson] = useState("")
  const [po, setPo] = useState("")
  const [notes, setNotes] = useState("")
  // const [sn, setSn] = useState("")
  const [product, setProduct] = useState("")
  const [hsn, setHsn] = useState("")
  const [qty, setQty] = useState("")
  const [unit, setUnit] = useState("")
  const [subTotal, setSubTotal] = useState("")
  const [cgst, setCgst] = useState("")
  const [sgst, setSgst] = useState("")
  const [igst, setIgst] = useState("")
  const [total, setTotal] = useState("")
  const [list, setList] = useState([])




  const handlePrint = () => {
    window.print()
  }
  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">

        {showInvoice ?
          <div>
            <Header handlePrint={handlePrint} />

            <MainDetails name={name} address={address} website={website} email={email} />

            <ClientsDetails clientName={clientName} clientAddress={clientAddress} />


            <Dates invoiceNo={invoiceNo} invoiceDate={invoiceDate} dueDate={dueDate} paymentMethod={paymentMethod} po={po} salesPerson={salesPerson} />

            <Tables product={product} hsn={hsn} qty={qty} unit={unit} subTotal={subTotal} cgst={cgst} sgst={sgst} igst={igst} total={total} list={list} setList={setList} />

            <Notes notes={notes} />

            <Footer
              name={name}
              address={address}
              website={website}
              email={email}
              phone={phone}
              bank={bank}
              ifsc={ifsc}
              bankAc={bankAc}
            />

            <button onClick={() => setshowInvoice(false)} className="mt-5   bg-green-500 text-white font-bold py-2 px-8 rounded shadow border-2  border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300">Edit Information</button>
          </div>
          : (

            <>
              {/* name,address,email, phone, bank, ifsc code, website, client name,client address,invoice no, invoice date, due date, payment method, salesperson, po notes */}
              <div className="flex flex-col justify-center">
                <article className="md:grid grid-cols-2 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="name">Enter your name</label>
                    <input type="text" name="text" id="text" placeholder="Enter your name"
                      autoComplete="off"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="address">Enter your address</label>
                    <input type="text" name="address" id="address" placeholder="Enter your address"
                      autoComplete="off"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </article>

                <article className="md:grid grid-cols-3 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="email">Enter your email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email"
                      autoComplete="off"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="website">Enter your website</label>
                    <input type="url" name="website" id="website" placeholder="Enter your website"
                      autoComplete="off"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="phone">Enter your phone</label>
                    <input type="number" name="phone" id="phone" placeholder="Enter your phone"
                      autoComplete="off"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </article>

                <article className="md:grid grid-cols-3 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="bank">Bank Name</label>
                    <input type="text" name="bank" id="bank" placeholder="Enter your bank"
                      autoComplete="off"
                      value={bank}
                      onChange={(e) => setBank(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="bankAc">Bank Account No.</label>
                    <input type="text" name="bankAc" id="bankAc" placeholder="Enter your bank Account no"
                      autoComplete="off"
                      value={bankAc}
                      onChange={(e) => setBankAc(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="ifsc">IFSC Code</label>
                    <input type="text" name="ifsc" id="ifsc" placeholder="Enter your IFSC code"
                      autoComplete="off"
                      value={ifsc}
                      onChange={(e) => setIfsc(e.target.value)}
                    />
                  </div>
                </article>

                <article className="md:grid grid-cols-2 gap-10 md:mt-16">
                  <div className="flex flex-col">
                    <label htmlFor="ClientName">Client Name</label>
                    <input type="text" name="Client Name" id="ClientName" placeholder="Enter your Client Name"
                      autoComplete="off"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="ClientAddress">Client Address</label>
                    <input type="text" name="Client Name" id="ClientAddress" placeholder="Enter your Client Address"
                      autoComplete="off"
                      value={clientAddress}
                      onChange={(e) => setClientAddress(e.target.value)}
                    />
                  </div>
                </article>

                <article className="md:grid grid-cols-3 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="InvoiceNo">Invoice No</label>
                    <input type="text" name="InvoiceNo" id="InvoiceNo" placeholder="Enter your Invoice No"
                      autoComplete="off"
                      value={invoiceNo}
                      onChange={(e) => setInvoiceNumber(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="InvoiceDate">Invoice Date</label>
                    <input type="date" name="InvoiceDate" id="InvoiceDate" placeholder="Enter your Invoice Date"
                      autoComplete="off"
                      value={invoiceDate}
                      onChange={(e) => setInvoiceDate(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="DueDate">Due Date</label>
                    <input type="date" name="DueDate" id="DueDate" placeholder="Enter your Due Date"
                      autoComplete="off"
                      value={dueDate}
                      onChange={(e) => setDueDate(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="PaymentMethod">Payment Method</label>
                    <input type="text" name="PaymentMethod" id="PaymentMethod" placeholder="Payment Method"
                      autoComplete="off"
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="SalesPerson">SalesPerson</label>
                    <input type="text" name="SalesPerson" id="SalesPerson" placeholder="SalesPerson"
                      autoComplete="off"
                      value={salesPerson}
                      onChange={(e) => setSalesPerson(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="PurchaseOrder">Purchase Order</label>
                    <input type="text" name="PurchaseOrder" id="PurchaseOrder" placeholder="PurchaseOrder"
                      autoComplete="off"
                      value={po}
                      onChange={(e) => setPo(e.target.value)}
                    />
                  </div>
                </article>

                {/* This is our table form */}
                <article>
                  <TableForm
                  product={product} setProduct={setProduct}
                  hsn={hsn} setHsn={setHsn}
                  qty={qty} setQty={setQty}
                  unit={unit} setUnit={setUnit}
                  subTotal={subTotal} setSubTotal={setSubTotal}
                  cgst={cgst} setCgst={setCgst}
                  sgst={sgst} setSgst={setSgst}
                  igst={igst} setIgst={setIgst}
                  total={total} setTotal={setTotal}
                  list={list} setList={setList}
                  />
                  
                </article>

                <label htmlFor="Notes">Additional Notes</label>
                <textarea type="number" name="Notes" id="Notes" cols="30" row="20" placeholder="Additional Notes to the client"
                  autoComplete="off"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}></textarea>

                <button onClick={() => setshowInvoice(true)} className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2  border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Preview Invoice</button>
              </div>
            </>
          )}
      </main>
    </>
  );
}

export default App;
