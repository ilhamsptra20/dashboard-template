import React from "react"

const ShiftDaily = () => {
    return (
        <div className="flex flex-col gap-5">
            {/* Shift Code */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">
                        Shift Daily Code
                    </label>
                </div>
                <div class="md:w-2/3 md:flex-grow">
                    <input
                        class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        type="text"
                        placeholder="Enter Shift Code"
                        id="forms-labelLeftInputCode"
                    />
                </div>
            </div>

            {/* day type */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">Day Type</label>
                </div>
                <div class="md:w-2/3 md:flex-grow">
                    <input
                        class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        type="text"
                        placeholder="Select Day Type"
                        id="forms-labelLeftInputCode"
                    />
                </div>
            </div>

            {/* Shift Daily Code PH */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">
                        Shift Daily Code PH
                    </label>
                </div>
                <div class="md:w-2/3 md:flex-grow">
                    <label class="block text-gray-700">
                        <input name="shift-code" type="radio" value="" />
                        <span class="ml-1">Lorem ipsum dolor sit</span>
                    </label>
                    <label class="block text-gray-700">
                        <input name="shift-code" type="radio" value="" />
                        <span class="ml-1">Lorem ipsum dolor sit</span>
                    </label>
                    <label class="block text-gray-700">
                        <input name="shift-code" type="radio" value="" />
                        <span class="ml-1">Lorem ipsum dolor sit</span>
                    </label>
                </div>
            </div>

            {/* Flexible Shift */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">Flexible Shift</label>
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
                    <label for="forms-labelLeftInputCode">Start Time</label>
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

            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">End Time</label>
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

            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">Grace For Late</label>
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

            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">
                        Productive Work Time
                    </label>
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

export default ShiftDaily
