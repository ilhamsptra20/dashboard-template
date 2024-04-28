import React, { useState, useEffect } from "react"

const Toast = ({ message, duration = 3000 }) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        let timer
        if (isVisible) {
            timer = setTimeout(() => {
                setIsVisible(false)
            }, duration)
        }

        return () => clearTimeout(timer)
    }, [isVisible, duration])

    const handleShowToast = () => {
        setIsVisible(true)
    }

    const handleClose = () => {
        setIsVisible(false)
    }

    return (
        <div className="relative inline-block">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleShowToast}
            >
                Show Toast
            </button>
            <div
                className={`fixed bottom-5 right-5 bg-gray-800 text-white px-4 py-2 rounded-md ${
                    isVisible ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300`}
            >
                <div>{message}</div>
                <button className="ml-2" onClick={handleClose}>
                    Close
                </button>
            </div>
        </div>
    )
}

export default Toast
