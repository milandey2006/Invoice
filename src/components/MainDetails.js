import React from 'react'

export default function MainDetails({name, address, website, email}) {
    return (
        <>
            <section className="flex flex-col items-start justify-start">
                <h2 className="font-bold md:text-4xl text-xl">{name}</h2>
                <p className="font-bold">{address}</p>
                <p className="font-bold text-blue-600">{email}&nbsp;&nbsp;{website}</p>
                
                
            </section>
        </>
    )
}
