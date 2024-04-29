import Attendance from "../pages/Attendance"
import Career from "../pages/Career"
import Dashboard from "../pages/Dashboard"
import Employe from "../pages/Employe"
import EmployeeAttendanceLocation from "../pages/EmployeeAttendanceLocation"
import MassLeave from "../pages/MassLeave"
import Organization from "../pages/Organization"
import Payroll from "../pages/Payroll"
import Setting from "../pages/Setting"
import AttendanceEditForms from "../pages/forms/AttendanceEditForms"
import AttendanceLocationForms from "../pages/forms/AttendanceLocationForms"
import EmployeeAttendanceLocationForms from "../pages/forms/EmployeeAttendanceLocationForms"
import EmployeeShiftGroupForms from "../pages/forms/EmployeeShiftGroupForms"
import EmployeeShiftUploadForms from "../pages/forms/EmployeeShiftUploadForms"
import LeaveBalanceMaintananceForms from "../pages/forms/LeaveBalanceMaintananceForms"
import LeaveTypeForms from "../pages/forms/LeaveTypeForms"
import MassLeaveForms from "../pages/forms/MassLeaveForms"
import ShiftDaily from "../pages/forms/ShiftDaily"
import ShiftGroup from "../pages/forms/ShiftGroup"

const routes = [
    {
        path: "/",
        component: Dashboard,
        title: "Dashboard",
        icon: "fa-solid fa-gauge-high",
        type: "sidebar",
    },
    {
        path: "/organization",
        component: Organization,
        title: "Organization",
        icon: "fa-solid fa-sitemap",
        type: "sidebar",
    },
    {
        path: "/employe",
        component: Employe,
        title: "Employe",
        icon: "fa-solid fa-user-tie",
        type: "sidebar",
    },
    {
        path: "/career",
        component: Career,
        title: "Career",
        icon: "fa-solid fa-user-tie",
        type: "sidebar",
    },
    {
        path: "/attendance",
        component: Attendance,
        title: "Attendance",
        icon: "fa-solid fa-clock",
        type: "sidebar",
    },
    {
        path: "/payroll",
        component: Payroll,
        title: "Payroll",
        icon: "fa-solid fa-newspaper",
        type: "sidebar",
    },
    {
        path: "/setting",
        component: Setting,
        title: "Setting",
        icon: "fa-solid fa-gear",
        type: "sidebar",
    },
    {
        path: "/shiftdaily",
        component: ShiftDaily,
        title: "ShiftDaily",
        icon: "fa-solid fa-gear",
        // type: "sidebar",
    },
    {
        path: "/shiftgroup",
        component: ShiftGroup,
        title: "ShiftGroup",
        icon: "fa-solid fa-gear",
        // type: "sidebar",
    },
    {
        path: "/leavetypeforms",
        component: LeaveTypeForms,
        title: "leavetype forms",
        icon: "fa-solid fa-gear",
        // type: "sidebar",
    },
    {
        path: "/AttendanceLocationForms",
        component: AttendanceLocationForms,
        title: "leavetype forms",
        icon: "fa-solid fa-gear",
        // type: "sidebar",
    },
    {
        path: "/EmployeeShiftUploadForms",
        component: EmployeeShiftUploadForms,
        title: "leavetype forms",
        icon: "fa-solid fa-gear",
        // type: "sidebar",
    },
    {
        path: "/EmployeeShiftGroupForms",
        component: EmployeeShiftGroupForms,
        title: "leavetype forms",
        icon: "fa-solid fa-gear",
        // type: "sidebar",
    },
    {
        path: "/AttendanceEditForms",
        component: AttendanceEditForms,
        title: "leavetype forms",
        icon: "fa-solid fa-gear",
        // type: "sidebar",
    },
    {
        path: "/MassLeave",
        component: MassLeave,
        title: "leavetype forms",
        icon: "fa-solid fa-gear",
        // type: "sidebar",
    },
    {
        path: "/MassLeaveForms",
        component: MassLeaveForms,
        title: "leavetype forms",
        icon: "fa-solid fa-gear",
        // type: "sidebar",
    },
    {
        path: "/LeaveBalanceMaintananceForms",
        component: LeaveBalanceMaintananceForms,
        title: "leavetype forms",
        icon: "fa-solid fa-gear",
        // type: "sidebar",
    },
    {
        path: "/EmployeeAttendanceLocation",
        component: EmployeeAttendanceLocation,
        title: "leavetype forms",
        icon: "fa-solid fa-gear",
        // type: "sidebar",
    },
    {
        path: "/EmployeeAttendanceLocationForms",
        component: EmployeeAttendanceLocationForms,
        title: "leavetype forms",
        icon: "fa-solid fa-gear",
        // type: "sidebar",
    },
]

export default routes
