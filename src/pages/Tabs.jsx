import React, { useState } from "react"

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0)

    const tabs = [
        { title: "Tab 1", content: <div>This is content for Tab 1</div> },
        { title: "Tab 2", content: <div>This is content for Tab 2</div> },
        { title: "Tab 3", content: <div>This is content for Tab 3</div> },
    ]

    const handleTabClick = (index) => {
        setActiveTab(index)
    }

    const showToast = () => {
        alert(`Toast from Tab ${activeTab + 1}`)
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Tabs</h1>
            <div className="border-b border-gray-200">
                <div className="flex">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => handleTabClick(index)}
                            className={`${
                                index === activeTab ? "bg-gray-100" : "bg-white"
                            } hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border-b-2 border-gray-200 focus:outline-none`}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>
                <div className="mt-2">{tabs[activeTab].content}</div>
                <button
                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={showToast}
                >
                    Show Toast from Tab {activeTab + 1}
                </button>
            </div>
        </div>
    )
}

export default Tabs
