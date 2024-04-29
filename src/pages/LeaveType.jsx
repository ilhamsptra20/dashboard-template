import React from "react"
import DataTable from "react-data-table-component"

const LeaveType = () => {
    const columns = [
        {
            name: "Leave Code",
            selector: (row) => row.leaveCode,
            sortable: true,
        },
        {
            name: "Leave Name",
            selector: (row) => row.leaveName,
            sortable: true,
        },
        {
            name: "Eligibility Formula",
            selector: (row) => row.eligibilityFormula,
            sortable: true,
        },
        {
            name: "Day Type",
            selector: (row) => row.dayType,
            sortable: true,
        },
        {
            name: "Deducted Leave",
            selector: (row) => row.deductedLeave,
            sortable: true,
        },
        {
            name: "Day Count",
            selector: (row) => row.dayCount,
            sortable: true,
        },
        {
            name: "Repeat Period",
            selector: (row) => row.repeatPeriod,
            sortable: true,
        },
    ]

    const data = [
        {
            leaveCode: "",
            leaveName: "",
            eligibilityFormula: "",
            dayType: "",
            deductedLeave: "",
            dayCount: "",
            repeatPeriod: "",
        },
    ]

    return (
        <div>
            <h1>Leave Setting</h1>
            <DataTable columns={columns} data={data} />
        </div>
    )
}

export default LeaveType
