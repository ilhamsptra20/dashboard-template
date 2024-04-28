import React from "react"

const Buttons = () => {
    return (
        <div>
            <h1 className="text-4xl text-gray-800">Breadcrumb</h1>
            <div className="my-10">
                <h3 className="text-2xl text-gray-800">Button Sizes</h3>

                <button className="h-12 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                    Large
                </button>
                <button className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                    Regular
                </button>
                <button className="h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                    Small
                </button>
                <a
                    className="inline-flex items-center h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
                    href="#"
                >
                    Link
                </a>
                <input
                    className="h-8 px-4 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg cursor-pointer focus:shadow-outline hover:bg-indigo-800"
                    type="submit"
                    value="Input"
                />
            </div>
            <div className="my-10">
                <h3 className="text-2xl text-gray-800">Block Button</h3>

                <button className="w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                    Large block button
                </button>
            </div>
            <div className="my-10">
                <h3 className="text-2xl text-gray-800">Button Colors</h3>

                <button className="h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800">
                    Danger
                </button>
                <button className="h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800">
                    Success
                </button>
                <button className="h-10 px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700">
                    Info
                </button>
                <button className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
                    Secondary
                </button>
                <button className="h-10 px-5 m-2 text-pink-100 transition-colors duration-150 bg-pink-600 rounded-lg focus:shadow-outline hover:bg-pink-700">
                    Pink
                </button>
                <button className="h-10 px-5 m-2 text-purple-100 transition-colors duration-150 bg-purple-600 rounded-lg focus:shadow-outline hover:bg-purple-700">
                    Purple
                </button>
                <button className="h-10 px-5 text-gray-800 transition-colors duration-150 bg-white rounded-lg focus:shadow-outline hover:bg-gray-200">
                    White
                </button>
            </div>
            <div className="my-10">
                <h3 className="text-2xl text-gray-800">Button Sizes</h3>

                <button className="h-10 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100">
                    Outline
                </button>
            </div>
            <div className="my-10">
                <h3 className="text-2xl text-gray-800">Button Sizes</h3>
                <button className="inline-flex items-center h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                    <span>With icon</span>
                    <svg
                        className="w-4 h-4 ml-3 fill-current"
                        viewBox="0 0 20 20"
                    >
                        <path
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                            fillRule="evenodd"
                        ></path>
                    </svg>
                </button>
            </div>
            <div className="my-10">
                <h3 className="text-2xl text-gray-800">Button Sizes</h3>

                <button className="inline-flex items-center h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                    <svg
                        className="w-4 h-4 mr-3 fill-current"
                        viewBox="0 0 20 20"
                    >
                        <path
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                            fillRule="evenodd"
                        ></path>
                    </svg>
                    <span>With icon</span>
                </button>
            </div>
            <div className="my-10">
                <h3 className="text-2xl text-gray-800">Button Sizes</h3>

                <div
                    className="inline-flex"
                    role="group"
                    aria-label="Button group"
                >
                    <button className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-l-lg focus:shadow-outline hover:bg-indigo-800">
                        Left
                    </button>
                    <button className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800">
                        Middle
                    </button>
                    <button className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-r-lg focus:shadow-outline hover:bg-indigo-800">
                        Right
                    </button>
                </div>
            </div>

            <div className="my-10">
                <h3 className="text-2xl text-gray-800">Button Sizes</h3>

                <button className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800">
                    Pill button
                </button>
            </div>

            <div className="my-10">
                <h3 className="text-2xl text-gray-800">Button Sizes</h3>

                <button className="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                            fillRule="evenodd"
                        ></path>
                    </svg>
                </button>
                <button className="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path
                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                            clipRule="evenodd"
                            fillRule="evenodd"
                        ></path>
                    </svg>
                </button>
                <button className="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                    </svg>
                </button>
            </div>

            <div className="my-10">
                <h3 className="text-2xl text-gray-800">Button Sizes</h3>

                <div className="relative mb-32">
                    <button className="inline-flex items-center h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                        <span>Dropdown</span>
                        <svg
                            className="w-4 h-4 ml-3 fill-current"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                                fillRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                    <div className="absolute flex flex-col py-2 mt-1 text-gray-700 bg-white border rounded-lg">
                        <a
                            className="px-3 py-1 hover:text-gray-800 focus:bg-indigo-700 focus:text-white"
                            href="#"
                        >
                            One item
                        </a>
                        <a
                            className="px-3 py-1 hover:text-gray-800 focus:bg-indigo-700 focus:text-white"
                            href="#"
                        >
                            Another longer item
                        </a>
                        <a
                            className="px-3 py-1 hover:text-gray-800 focus:bg-indigo-700 focus:text-white"
                            href="#"
                        >
                            A medium item
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Buttons
