import React from "react"
import DataTable from "react-data-table-component"
import SearchInput from "../Components/forms/SearchInput"
import ToolBar from "../Components/ToolBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom"

library.add(fas, far, fab)

const Employe = () => {
    const columns = [
        {
            name: "Employen NO",
            selector: (row) => row.employenNO,
            sortable: true,
        },
        {
            name: "Employen Name",
            selector: (row) => row.employenName,
            sortable: true,
        },
        {
            name: "Gender",
            selector: (row) => row.gender,
            sortable: true,
        },
        {
            name: "Position",
            selector: (row) => row.position,
            sortable: true,
        },
        {
            name: "Organization Unit",
            selector: (row) => row.organizationUnit,
            sortable: true,
        },
        {
            name: "Job Grade",
            selector: (row) => row.jobGrade,
            sortable: true,
        },
        {
            name: "Join Date",
            selector: (row) => row.joinDate,
            sortable: true,
        },
        {
            name: "Employment Status",
            selector: (row) => row.employmentStatus,
            sortable: true,
        },
    ]

    const data = [
        {
            id: 1,
            title: "Beetlejuice",
            year: "1988",
        },
        {
            id: 2,
            title: "Ghostbusters",
            year: "1984",
        },
    ]

    return (
        <div>
            <h1>Employe</h1>
            <div className="flex justify-between my-5">
                <div class="relative text-gray-700">
                    <input
                        class="w-full h-10 pl-8 pr-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        type="text"
                        placeholder="Regular input"
                    />
                    <div class="absolute inset-y-0 left-0 flex items-center px-2 pointer-events-none">
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                    </div>
                </div>
                <div id="tool" className="flex p-1 justify-end gap-2">
                    <Link className="p-1">
                        <FontAwesomeIcon icon="fa-solid fa-filter" />
                    </Link>
                    <Link className="p-1">
                        <FontAwesomeIcon icon="fa-solid fa-plus" />
                    </Link>
                    <Link className="p-1">
                        <FontAwesomeIcon icon="fa-solid fa-print" />
                    </Link>
                    <Link className="p-1">
                        <FontAwesomeIcon icon="fa-solid fa-file-pdf" />
                    </Link>
                    <Link className="p-1">
                        <FontAwesomeIcon icon="fa-solid fa-file-csv" />
                    </Link>
                </div>
            </div>
            <DataTable columns={columns} data={data} />
        </div>
    )
}

export default Employe
