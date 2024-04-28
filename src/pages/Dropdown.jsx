import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

const Dropdown = ({ onSelect }) => {
    const [selectedOption, setSelectedOption] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    const options = [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" },
    ]

    const handleSelect = (option) => {
        setSelectedOption(option)
        setIsOpen(false)
        // onSelect(option)
    }

    return (
        <div className="relative inline-block text-left">
            <div>
                <span className="rounded-md shadow-sm">
                    <button
                        type="button"
                        className="inline-flex justify-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                        id="options-menu"
                        aria-haspopup="true"
                        aria-expanded="true"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {selectedOption
                            ? selectedOption.label
                            : "Select an option"}
                        <FontAwesomeIcon
                            icon={faAngleDown}
                            className="ml-2 h-5 w-5"
                        />
                    </button>
                </span>
            </div>

            {isOpen && (
                <div
                    className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <div className="py-1" role="none">
                        <button
                            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                            role="menuitem"
                            onClick={() => handleSelect(options[0])}
                        >
                            {options[0].label}
                        </button>
                        <button
                            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                            role="menuitem"
                            onClick={() => handleSelect(options[1])}
                        >
                            {options[1].label}
                        </button>
                        <button
                            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                            role="menuitem"
                            onClick={() => handleSelect(options[2])}
                        >
                            {options[2].label}
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Dropdown
