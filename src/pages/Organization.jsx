import React from "react"
import DataTable from "react-data-table-component"
import ToolBar from "../Components/ToolBar"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import SearchInput from "../Components/forms/SearchInput"

library.add(fas, far, fab)

const Organization = () => {
    const columns = [
        {
            name: "Company Name",
            selector: (row) => row.companyName,
            sortable: true,
        },
        {
            name: "Company Code",
            selector: (row) => row.companyCode,
            sortable: true,
        },
        {
            name: "Base Currency",
            selector: (row) => row.currency,
            sortable: true,
        },
        {
            name: "Company Type",
            selector: (row) => row.companyType,
            sortable: true,
        },
    ]

    const data = [
        {
            id: 1,
            no: 1,
            companyName: "PT Bangun Indonesia",
            companyCode: "BI1",
            currency: "IDR",
            companyType: "vendor",
        },
        {
            id: 2,
            no: 2,
            companyName: "PT Bangun Indonesia",
            companyCode: "BI1",
            currency: "IDR",
            companyType: "vendor",
        },
        {
            id: 3,
            no: 3,
            companyName: "PT Bangun Indonesia",
            companyCode: "BI1",
            currency: "IDR",
            companyType: "vendor",
        },
        {
            id: 4,
            no: 4,
            companyName: "PT Bangun Indonesia",
            companyCode: "BI1",
            currency: "IDR",
            companyType: "vendor",
        },
        {
            id: 5,
            no: 5,
            companyName: "PT Bangun Indonesia",
            companyCode: "BI1",
            currency: "IDR",
            companyType: "vendor",
        },
        {
            id: 6,
            no: 6,
            companyName: "PT Bangun Indonesia",
            companyCode: "BI1",
            currency: "IDR",
            companyType: "vendor",
        },
        {
            id: 7,
            no: 7,
            companyName: "PT Bangun Indonesia",
            companyCode: "BI1",
            currency: "IDR",
            companyType: "vendor",
        },
        {
            id: 8,
            no: 8,
            companyName: "PT Bangun Indonesia",
            companyCode: "BI1",
            currency: "IDR",
            companyType: "vendor",
        },
        {
            id: 9,
            no: 9,
            companyName: "PT Bangun Indonesia",
            companyCode: "BI1",
            currency: "IDR",
            companyType: "vendor",
        },
        {
            id: 10,
            no: 10,
            companyName: "PT Bangun Indonesia",
            companyCode: "BI1",
            currency: "IDR",
            companyType: "vendor",
        },
        {
            id: 11,
            no: 11,
            companyName: "PT Bangun Indonesia",
            companyCode: "BI1",
            currency: "IDR",
            companyType: "vendor",
        },
        {
            id: 12,
            no: 12,
            companyName: "PT Bangun Indonesia",
            companyCode: "BI1",
            currency: "IDR",
            companyType: "vendor",
        },
        {
            id: 13,
            no: 13,
            companyName: "PT Bangun Indonesia",
            companyCode: "BI1",
            currency: "IDR",
            companyType: "vendor",
        },
        {
            id: 14,
            no: 14,
            companyName: "PT Bangun Indonesia",
            companyCode: "BI1",
            currency: "IDR",
            companyType: "vendor",
        },
        {
            id: 15,
            no: 15,
            companyName: "PT Bangun Indonesia",
            companyCode: "BI1",
            currency: "IDR",
            companyType: "vendor",
        },
        {
            id: 16,
            no: 16,
            companyName: "PT Bangun Indonesia",
            companyCode: "BI1",
            currency: "IDR",
            companyType: "vendor",
        },
    ]

    const paginationComponentOptions = {
        rowsPerPageText: "Baris per halaman",
        rangeSeparatorText: "dari",
        selectAllRowsItem: true,
        selectAllRowsItemText: "ke",
    }
    return (
        <div>
            <h1 className="font-bold text-2xl">Organization</h1>

            <div className="flex justify-between my-5">
                <SearchInput />
                <ToolBar />
            </div>
            <DataTable
                columns={columns}
                data={data}
                pagination
                paginationComponentOptions={paginationComponentOptions}
            />
        </div>
    )
}

export default Organization
