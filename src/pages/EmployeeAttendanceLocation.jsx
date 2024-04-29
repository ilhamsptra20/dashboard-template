import React from "react"
import DataTable from "react-data-table-component"

const EmployeeAttendanceLocation = () => {
    const columns = [
        {
            name: "Employee No",
            selector: (row) => row.employeeNo,
            sortable: true,
        },
        {
            name: "Employee Name",
            selector: (row) => row.employeeName,
            sortable: true,
        },
        {
            name: "Position",
            selector: (row) => row.position,
            sortable: true,
        },
    ]

    const data = [
        {
            employeeNo: "",
            employeeName: "",
            position: "",
        },
    ]
    return (
        <div>
            <DataTable columns={columns} data={data} />
        </div>
    )
}

export default EmployeeAttendanceLocation
