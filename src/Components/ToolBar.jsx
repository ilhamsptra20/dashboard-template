import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fas, far, fab)

const ToolBar = () => {
    return (
        <div id="tool" className="flex p-1 justify-end gap-2">
            <button className="p-1">
                <FontAwesomeIcon icon="fa-solid fa-filter" />
            </button>
            <button className="p-1">
                <FontAwesomeIcon icon="fa-solid fa-plus" />
            </button>
            <button className="p-1">
                <FontAwesomeIcon icon="fa-solid fa-print" />
            </button>
            <button className="p-1">
                <FontAwesomeIcon icon="fa-solid fa-file-pdf" />
            </button>
            <button className="p-1">
                <FontAwesomeIcon icon="fa-solid fa-file-csv" />
            </button>
        </div>
    )
}

export default ToolBar
