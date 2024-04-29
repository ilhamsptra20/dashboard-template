import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fas, far, fab)

const SearchInput = () => {
    return (
        <div class="relative text-gray-700">
            <input
                class="w-full h-10 pl-8 pr-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text"
                placeholder="Regular input"
            />
            <div class="absolute inset-y-0 left-0 flex items-center px-2 pointer-events-none">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </div>
        </div>
    )
}

export default SearchInput
