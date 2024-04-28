import Accordion from "../pages/Accordion"
import Alerts from "../pages/Alerts"
import Avatars from "../pages/Avatars"
import Badges from "../pages/Badges"
import Breadcrumbs from "../pages/Breadcrumbs"
import Buttons from "../pages/Buttons"
import Cards from "../pages/Cards"
import Dashboard from "../pages/Dashboard"
import Dropdown from "../pages/Dropdown"
import Forms from "../pages/Forms"
import Modal from "../pages/Modal"
import Paginations from "../pages/Paginations"
import Tabs from "../pages/Tabs"
import Toast from "../pages/Toast"
// import Toggle from "../pages/Toggle"

const routes = [
    {
        path: "dashboard",
        component: Dashboard,
        title: "Dashboard",
        icon: "fa-solid fa-gauge-high",
        type: "sidebar",
    },
    {
        path: "alerts",
        component: Alerts,
        title: "alerts",
        icon: "fa-solid fa-gauge-high",
        type: "sidebar",
    },
    {
        path: "avatars",
        component: Avatars,
        title: "avatars",
        icon: "fa-solid fa-gauge-high",
        type: "sidebar",
    },
    {
        path: "badges",
        component: Badges,
        title: "badges",
        icon: "fa-solid fa-gauge-high",
        type: "sidebar",
    },
    {
        path: "breadcrumbs",
        component: Breadcrumbs,
        title: "breadcrumbs",
        icon: "fa-solid fa-gauge-high",
        type: "sidebar",
    },
    {
        path: "buttons",
        component: Buttons,
        title: "buttons",
        icon: "fa-solid fa-gauge-high",
        type: "sidebar",
    },
    {
        path: "cards",
        component: Cards,
        title: "cards",
        icon: "fa-solid fa-gauge-high",
        type: "sidebar",
    },
    {
        path: "forms",
        component: Forms,
        title: "forms",
        icon: "fa-solid fa-gauge-high",
        type: "sidebar",
    },
    {
        path: "paginations",
        component: Paginations,
        title: "paginations",
        icon: "fa-solid fa-gauge-high",
        type: "sidebar",
    },
    {
        path: "accordion",
        component: Accordion,
        title: "accordion",
        icon: "fa-solid fa-gauge-high",
        type: "sidebar",
    },
    {
        path: "dropdown",
        component: Dropdown,
        title: "dropdown",
        icon: "fa-solid fa-gauge-high",
        type: "sidebar",
    },
    {
        path: "modal",
        component: Modal,
        title: "modal",
        icon: "fa-solid fa-gauge-high",
        type: "sidebar",
    },
    {
        path: "toast",
        component: Toast,
        title: "toast",
        icon: "fa-solid fa-gauge-high",
        type: "sidebar",
    },
    {
        path: "tabs",
        component: Tabs,
        title: "tabs",
        icon: "fa-solid fa-gauge-high",
        type: "sidebar",
    },
    // {
    //     path: "toggle",
    //     component: Toggle,
    //     title: "toggle",
    //     icon: "fa-solid fa-gauge-high",
    //     type: "sidebar",
    // },
]

export default routes
