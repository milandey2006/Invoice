import React from 'react'

export default function ClientsDetails({clientName, clientAddress}) {
  return (
    <>
    <section className="mt-5">
          <h4 className="text-xl font-bold capitalize">{clientName}</h4>
          <p className="text-sm lg:w-30">{clientAddress}</p>
        </section>
    </>
  )
}
