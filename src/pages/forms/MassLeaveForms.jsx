import React from "react"

const MassLeaveForms = () => {
    return (
        <div className="flex flex-col gap-5">
            {/* Mass Leave */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">Mass Leave</label>
                </div>
                <div class="md:w-2/3 md:flex-grow">
                    <input
                        class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        type="text"
                        placeholder="Enter Mass Leave"
                        id="forms-labelLeftInputCode"
                    />
                </div>
            </div>
            {/* Type of Leave */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">Type of Leave</label>
                </div>
                <div class="md:w-2/3 md:flex-grow">
                    <input
                        class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        type="text"
                        placeholder="Enter Type of Leave"
                        id="forms-labelLeftInputCode"
                    />
                </div>
            </div>
            {/* Leave Date */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">Leave Date</label>
                </div>
                <div class="md:w-2/3 md:flex-grow">
                    <input
                        class="h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        type="date"
                        placeholder="Enter Leave Date"
                        id="forms-labelLeftInputCode"
                    />
                    <span>to</span>
                    <input
                        class="h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        type="date"
                        placeholder="Enter Leave Date"
                        id="forms-labelLeftInputCode"
                    />
                </div>
            </div>
            {/* Employe */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">Employe</label>
                </div>
                <div class="md:w-2/3 md:flex-grow">
                    <label class="text-gray-700">
                        <input type="checkbox" value="" />
                        <span class="ml-1">All</span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default MassLeaveForms
