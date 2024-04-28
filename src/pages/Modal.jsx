import React, { useState, useEffect } from "react"

const Modal = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden" // Menonaktifkan overflow body saat modal terbuka
        } else {
            document.body.style.overflow = "auto" // Mengaktifkan overflow body saat modal tertutup
        }

        return () => {
            document.body.style.overflow = "auto" // Mengaktifkan overflow body saat komponen Modal di-unmount
        }
    }, [isOpen])

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <div className="relative inline-block">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={openModal}
            >
                Open Modal
            </button>
            {isOpen && (
                <div className="fixed z-50 scale-150 inset-0 overflow-y-auto flex items-center justify-center">
                    <div
                        className="fixed inset-0 transition-opacity"
                        aria-hidden="true"
                        onClick={closeModal}
                    >
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        {children}
                        <div className="p-4">
                            <button
                                className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                onClick={closeModal}
                            >
                                Close Modal
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Modal
