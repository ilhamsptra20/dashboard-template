import React from "react"
import DataTable from "react-data-table-component"

const MassLeave = () => {
    const columns = [
        {
            name: "Massive Leave Name",
            selector: (row) => row.massiveLeaveName,
            sortable: true,
        },
        {
            name: "Leave Type",
            selector: (row) => row.leaveType,
            sortable: true,
        },
        {
            name: "Start Date",
            selector: (row) => row.startDate,
            sortable: true,
        },
        { name: "End Date", selector: (row) => row.endDate, sortable: true },
    ]

    const data = [
        { massiveLeaveName: "", leaveType: "", startDate: "", endDate: "" },
    ]
    return (
        <div>
            <DataTable columns={columns} data={data} />
        </div>
    )
}

export default MassLeave
