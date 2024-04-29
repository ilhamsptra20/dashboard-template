import React from "react"

const EmployeeAttendanceLocationForms = () => {
    return (
        <div className="flex flex-col gap-5">
            {/* Location Name */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">Location Name</label>
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
            {/* Start Date */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">Start Date</label>
                </div>
                <div class="md:w-2/3 md:flex-grow">
                    <input
                        class="h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        type="date"
                        placeholder="Enter Start Date"
                        id="forms-labelLeftInputCode"
                    />
                </div>
            </div>
            {/* End Date */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">End Date</label>
                </div>
                <div class="md:w-2/3 md:flex-grow">
                    <input
                        class="h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        type="date"
                        placeholder="Enter End Date"
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

export default EmployeeAttendanceLocationForms
