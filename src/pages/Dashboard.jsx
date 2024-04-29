import React from "react"
import DataTable from "react-data-table-component"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js"
import { Bar } from "react-chartjs-2"
import * as faker from "@faker-js/faker"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Persentase Kehadiran",
        },
    },
}

const labels = ["January", "February", "March", "April", "May", "June", "July"]

export const data = {
    labels,
    datasets: [
        {
            label: "hadir 1",
            data: [8, 10, 7, 6, 9, 10, 9],
            backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
        {
            label: "tidak hadir 2",
            data: [2, 0, 3, 4, 1, 0, 1],
            backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
    ],
}

export const optionsKaryawan = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Persentase Pekerja",
        },
    },
}

const labelsKaryawan = ["Jabatan"]

export const dataKaryawan = {
    labelsKaryawan,
    datasets: [
        {
            label: "Direktur",
            data: [3],
            backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
        {
            label: "Loby",
            data: [5],
            backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
        {
            label: "Security",
            data: [10],
            backgroundColor: "#000",
        },
    ],
}

const columns = [
    {
        name: "Title",
        selector: (row) => row.title,
    },
    {
        name: "Year",
        selector: (row) => row.year,
    },
]

const dataTable = [
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

const Dashboard = () => {
    return (
        <div className="flex flex-col">
            {/* <h1>Dashboard</h1> */}
            <div className="w-full flex gap-10 text-white">
                <div className="border py-10  w-[25%] px-5 font-semibold text-xl bg-emerald-700">
                    Total Karyawan <br /> 100
                </div>
                <div className="border py-10  w-[25%] px-5 font-semibold text-xl bg-sky-500">
                    Daftar Hadir <br /> 80/100
                </div>
                <div className="border py-10  w-[25%] px-5 font-semibold text-xl bg-yellow-500">
                    Karyawan Cuti <br /> 5/100
                </div>
                <div className="border py-10  w-[25%] px-5 font-semibold text-xl bg-red-500">
                    Karyawan Izin <br /> 15/100
                </div>
            </div>
            {/* <DataTable columns={columns} data={dataTable} /> */}
            <div className="w-[50%] flex">
                <Bar options={options} data={data} />
                <Bar options={optionsKaryawan} data={dataKaryawan} />
            </div>
        </div>
    )
}

export default Dashboard
