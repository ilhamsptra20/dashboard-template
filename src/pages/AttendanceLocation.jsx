import React from "react"
import DataTable from "react-data-table-component"

const AttendanceLocation = () => {
    const columns = [
        {
            name: "Location Code",
            selector: (row) => row.LocationCode,
            sortable: true,
        },
        {
            name: "Location Name",
            selector: (row) => row.LocationName,
            sortable: true,
        },
        { name: "Maps", selector: (row) => row.Maps, sortable: true },
    ]

    const data = [
        {
            LocationCode: "",
            LocationName: "",
            Maps: "",
        },
    ]
    return (
        <div>
            <DataTable columns={columns} data={data} />
        </div>
    )
}

export default AttendanceLocation
