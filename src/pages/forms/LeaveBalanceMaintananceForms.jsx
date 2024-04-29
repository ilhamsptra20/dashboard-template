import React from "react"

const LeaveBalanceMaintananceForms = () => {
    return (
        <div className="flex flex-col gap-5">
            {/* Leave/Permit Type */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">
                        Leave/Permit Type
                    </label>
                </div>
                <div class="md:w-2/3 md:flex-grow">
                    <input
                        class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        type="text"
                        placeholder="Enter Leave/Permit Type"
                        id="forms-labelLeftInputCode"
                    />
                </div>
            </div>
            {/* Can be Minus */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">Can be Minus</label>
                </div>
                <div class="md:w-2/3 md:flex-grow">
                    <input
                        class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        type="text"
                        placeholder="Enter Can be Minus"
                        id="forms-labelLeftInputCode"
                    />
                </div>
            </div>
            {/* Leave Status */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">Leave Status</label>
                </div>
                <div class="md:w-2/3 md:flex-grow">
                    <input
                        class="h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        type="text"
                        placeholder="Enter Leave Status"
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

export default LeaveBalanceMaintananceForms
