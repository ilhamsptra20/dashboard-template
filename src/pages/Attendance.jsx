import React from "react"
import DataTable from "react-data-table-component"

const Attendance = () => {
    const columns = [
        {
            name: "Shift Daily Code",
            selector: (row) => row.shiftDailyCode,
            sortable: true,
        },
        {
            name: "Start Time",
            selector: (row) => row.startTime,
            sortable: true,
        },
        { name: "End Time", selector: (row) => row.endTime, sortable: true },
        {
            name: "Break Time",
            selector: (row) => row.breakTime,
            sortable: true,
        },
        { name: "Day Type", selector: (row) => row.dayType, sortable: true },
        {
            name: "Flexible Shift ",
            selector: (row) => row.flexibleShift,
            sortable: true,
        },
        { name: "Remark ", selector: (row) => row.remark, sortable: true },
    ]

    const data = [
        {
            shiftDailyCode: "",
            startTime: "",
            endTime: "",
            breakTime: "",
            dayType: "",
            flexibleShift: "",
            remark: "",
        },
    ]

    return (
        <div>
            <h1>Attendance</h1>
            <DataTable columns={columns} data={data} />
        </div>
    )
}

export default Attendance
