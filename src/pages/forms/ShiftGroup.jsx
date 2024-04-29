import React from "react"

const ShiftGroup = () => {
    return (
        <div className="flex flex-col gap-5">
            {/* Shift Code */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">Group Code</label>
                </div>
                <div class="md:w-2/3 md:flex-grow">
                    <input
                        class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        type="text"
                        placeholder="Enter Group Code"
                        id="forms-labelLeftInputCode"
                    />
                </div>
            </div>

            {/* Group Name */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">Group Name</label>
                </div>
                <div class="md:w-2/3 md:flex-grow">
                    <input
                        class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        type="text"
                        placeholder="Select Group Name"
                        id="forms-labelLeftInputCode"
                    />
                </div>
            </div>

            {/* Calculate after productive minutes fulfilled */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">
                        Calculate after productive minutes fulfilled
                    </label>
                </div>
                <div class="md:w-2/3 md:flex-grow">
                    <label class="text-gray-700">
                        <input type="checkbox" value="" />
                        <span class="ml-1">YES</span>
                    </label>
                </div>
            </div>

            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">Total Day</label>
                </div>
                <div class="md:w-2/3 md:flex-grow">
                    <input
                        class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        type="text"
                        placeholder="Regular input"
                        id="forms-labelLeftInputCode"
                    />
                </div>
            </div>
        </div>
    )
}

export default ShiftGroup
