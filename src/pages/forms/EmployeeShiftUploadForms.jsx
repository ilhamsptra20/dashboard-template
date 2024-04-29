import React from "react"

const EmployeeShiftUploadForms = () => {
    return (
        <div className="flex flex-col gap-5">
            {/* Upload Excel File */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">
                        Upload Excel File
                    </label>
                </div>
                <div class="md:w-2/3 md:flex-grow">
                    <input
                        class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        type="file"
                        placeholder="Enter Upload Excel File"
                        id="forms-labelLeftInputCode"
                    />
                </div>
            </div>

            {/* Upload Type */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">Upload Type</label>
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

            {/* Action Type */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">Action Type</label>
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

            {/* Download Template */}
            <div class="text-gray-700 md:flex md:items-center">
                <div class="mb-1 md:mb-0 md:w-1/3">
                    <label for="forms-labelLeftInputCode">
                        Download Template
                    </label>
                </div>
                <div class="md:w-2/3 md:flex-grow">
                    <a href="">template_shift_upload.xls</a>
                </div>
            </div>
        </div>
    )
}

export default EmployeeShiftUploadForms
