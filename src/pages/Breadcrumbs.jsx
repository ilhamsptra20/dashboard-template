import React from "react"

const Breadcrumbs = () => {
    return (
        <div>
            <h1 className="text-4xl text-gray-800">Breadcrumb</h1>

            <div className="my-10">
                <h3 className="text-2xl text-gray-800">Simple breadcrumb</h3>

                <nav aria-label="breadcrumb">
                    <ol class="flex leading-none text-indigo-600 divide-x divide-indigo-400">
                        <li class="pr-4">
                            <a href="#">Home</a>
                        </li>
                        <li class="px-4 text-gray-700" aria-current="page">
                            Blog
                        </li>
                    </ol>
                </nav>
                <nav class="mt-8" aria-label="breadcrumb">
                    <ol class="flex leading-none text-indigo-600 divide-x divide-indigo-400">
                        <li class="pr-4">
                            <a href="#">Home</a>
                        </li>
                        <li class="px-4">
                            <a href="#">Blog</a>
                        </li>
                        <li class="px-4 text-gray-700" aria-current="page">
                            This week
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
    )
}

export default Breadcrumbs
