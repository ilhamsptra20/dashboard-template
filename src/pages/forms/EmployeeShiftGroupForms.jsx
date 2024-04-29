import React from "react"

const EmployeeShiftGroupForms = () => {
    return (
        <div className="flex flex-col gap-5">
            {/* Shift Group Code */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">
                        Shift Group Code
                    </label>
                </div>
                <div class="md:w-2/3 md:flex-grow">
                    <input
                        class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        type="text"
                        placeholder="Enter Shift Group Code"
                        id="forms-labelLeftInputCode"
                    />
                </div>
            </div>

            {/* Start Shift Date */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">
                        Start Shift Date
                    </label>
                </div>
                <div class="md:w-2/3 md:flex-grow">
                    <input
                        class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        type="date"
                        placeholder="Enter Start Shift Date"
                        id="forms-labelLeftInputCode"
                    />
                </div>
            </div>

            {/* Start Shift Daily */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">
                        Start Shift Daily
                    </label>
                </div>
                <div class="md:w-2/3 md:flex-grow">
                    <input
                        class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        type="text"
                        placeholder="Enter Start Shift Daily"
                        id="forms-labelLeftInputCode"
                    />
                </div>
            </div>

            {/* Always Present */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">Always Present</label>
                </div>
                <div class="md:w-2/3 md:flex-grow">
                    <div class="md:w-2/3 md:flex-grow">
                        <label class="text-gray-700">
                            <input type="checkbox" value="" />
                            <span class="ml-1">YES</span>
                        </label>
                    </div>
                </div>
            </div>

            {/* Employe */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">Employe</label>
                </div>
                <div class="md:w-2/3 md:flex-grow">
                    <div class="md:w-2/3 md:flex-grow">
                        <label class="text-gray-700">
                            <input type="checkbox" value="" />
                            <span class="ml-1">YES</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeShiftGroupForms
