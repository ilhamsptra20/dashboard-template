import React, { useState } from "react"

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleAccordion = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="border rounded-md mb-4">
            <div
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={toggleAccordion}
            >
                <div className="font-bold">{title}</div>
                <div className="text-gray-600">{isOpen ? "-" : "+"}</div>
            </div>
            {isOpen && <div className="p-4">{children}</div>}
        </div>
    )
}

export default Accordion
