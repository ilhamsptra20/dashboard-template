import React from "react"

const LeaveTypeForms = () => {
    return (
        <div className="flex flex-col gap-5">
            {/* Shift Code */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">Leave Code</label>
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

            {/* Leave Name */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">Leave Name</label>
                </div>
                <div class="md:w-2/3 md:flex-grow">
                    <input
                        class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        type="text"
                        placeholder="Select Leave Name"
                        id="forms-labelLeftInputCode"
                    />
                </div>
            </div>

            {/* Eligibility */}
            <div class="text-gray-700 md:flex md:items-start">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">Eligibility</label>
                </div>
                <div class="md:w-2/3 md:flex-grow">
                    <textarea
                        class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        type="text"
                        rows="4"
                        cols="50"
                        placeholder="Select Eligibility"
                        id="forms-labelLeftInputCode"
                    />
                </div>
            </div>

            {/* Limit Date */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">Limit Date</label>
                </div>
                <div class="md:w-2/3 md:flex-grow">
                    <label class="text-gray-700">
                        <input type="checkbox" value="" />
                        <span class="ml-1">YES</span>
                    </label>
                    <div class="md:w-2/3 md:flex-grow gap-4">
                        <label class="text-gray-700">
                            <input name="shift-code" type="radio" value="" />
                            <span class="ml-1">Lorem ipsum dolor sit</span>
                        </label>
                        <label class="text-gray-700">
                            <input name="shift-code" type="radio" value="" />
                            <span class="ml-1">Lorem ipsum dolor sit</span>
                        </label>
                    </div>
                </div>
            </div>

            {/* Educted Leave */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">Educted Leave</label>
                </div>
                <div class="md:w-2/3 md:flex-grow">
                    <label class="text-gray-700">
                        <input type="checkbox" value="" />
                        <span class="ml-1">YES</span>
                    </label>
                </div>
            </div>

            {/* Day Count */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">Day Count</label>
                </div>
                <div class="md:w-2/3 md:flex-grow">
                    <div class="md:w-2/3 md:flex-grow gap-4">
                        <label class="text-gray-700">
                            <input name="shift-code" type="radio" value="" />
                            <span class="ml-1">Lorem ipsum dolor sit</span>
                        </label>
                        <label class="text-gray-700">
                            <input name="shift-code" type="radio" value="" />
                            <span class="ml-1">Lorem ipsum dolor sit</span>
                        </label>
                    </div>
                </div>
            </div>

            {/* Leave Day Type */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">Leave Day Type</label>
                </div>
                <div class="md:w-2/3 md:flex-grow">
                    <div class="md:w-2/3 md:flex-grow gap-4">
                        <label class="text-gray-700">
                            <input name="shift-code" type="radio" value="" />
                            <span class="ml-1">Lorem ipsum dolor sit</span>
                        </label>
                        <label class="text-gray-700">
                            <input name="shift-code" type="radio" value="" />
                            <span class="ml-1">Lorem ipsum dolor sit</span>
                        </label>
                    </div>
                </div>
            </div>

            {/* Validate against other attendance status */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">
                        Validate against other attendance status
                    </label>
                </div>
                <div class="md:w-2/3 md:flex-grow">
                    <label class="text-gray-700">
                        <input type="checkbox" value="" />
                        <span class="ml-1">YES</span>
                    </label>
                </div>
            </div>

            {/* Once in employment period */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">
                        Once In Employment Period
                    </label>
                </div>
                <div class="md:w-2/3 md:flex-grow">
                    <label class="text-gray-700">
                        <input type="checkbox" value="" />
                        <span class="ml-1">YES</span>
                    </label>
                </div>
            </div>

            {/* Once in balance period */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">
                        Once in balance period
                    </label>
                </div>
                <div class="md:w-2/3 md:flex-grow">
                    <label class="text-gray-700">
                        <input type="checkbox" value="" />
                        <span class="ml-1">YES</span>
                    </label>
                </div>
            </div>

            {/* Leave Entitlement Period based on */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">
                        Leave Entitlement Period based on
                    </label>
                </div>
                <div class="md:w-2/3 md:flex-grow">
                    <input
                        class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        type="text"
                        placeholder="Leave Entitlement Period based on"
                        id="forms-labelLeftInputCode"
                    />
                </div>
            </div>
        </div>
    )
}

export default LeaveTypeForms
