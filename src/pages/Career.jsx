import React from "react"
import DataTable from "react-data-table-component"

const Career = () => {
    const columns = [
        {
            name: "Transition No",
            selector: (row) => row.transitionNo,
            sortabel: true,
        },
        {
            name: "Letter",
            selector: (row) => row.letter,
            sortabel: true,
        },
        {
            name: "Employee Name",
            selector: (row) => row.employeeName,
            sortabel: true,
        },
        {
            name: "Career Transition",
            selector: (row) => row.careerTransition,
            sortabel: true,
        },
        {
            name: "Transition Typ",
            selector: (row) => row.transitionTyp,
            sortabel: true,
        },
        {
            name: "Start Date",
            selector: (row) => row.startDate,
            sortabel: true,
        },
        {
            name: "End Dat",
            selector: (row) => row.endDat,
            sortabel: true,
        },
        {
            name: "Employee No",
            selector: (row) => row.employeeNo,
            sortabel: true,
        },
        {
            name: "Positin",
            selector: (row) => row.position,
            sortabel: true,
        },
    ]

    const data = [
        {
            transitionNo: "",
            letter: "",
            employeeName: "",
            careerTransition: "",
            transitionTyp: "",
            startDate: "",
            endDat: "",
            employeeNo: "",
            position: "",
        },
    ]

    return (
        <div>
            <h1>Career</h1>
            <DataTable columns={columns} data={data} />
        </div>
    )
}

export default Career
