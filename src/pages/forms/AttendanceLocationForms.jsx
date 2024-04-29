import React from "react"

const AttendanceLocationForms = () => {
    return (
        <div className="flex flex-col gap-5">
            {/* Location Code */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">Location Code</label>
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

            {/* Location Address */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">
                        Location Address
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
            {/*  */}
            {/* City */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">City</label>
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

            {/* State/Provice */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">State/Provice</label>
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

            {/* Country */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">Country</label>
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

            {/* Maximum Radius */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">Maximum Radius</label>
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

export default AttendanceLocationForms
