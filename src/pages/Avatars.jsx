import React from "react"

const Avatars = () => {
    return (
        <div>
            <h1 className="text-4xl text-gray-800">Avatars</h1>

            <div className="my-10">
                <h3 className="text-2xl text-gray-800">Avatar sizes</h3>
                <img
                    class="inline object-cover w-16 h-16 mr-2 rounded-full"
                    src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Profile image"
                />
                <img
                    class="inline object-cover w-12 h-12 mr-2 rounded-full"
                    src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Profile image"
                />
                <img
                    class="inline object-cover w-8 h-8 rounded-full"
                    src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Profile image"
                />
            </div>
            <div className="my-10">
                <h3 className="text-2xl text-gray-800">Avatar group</h3>
                <div class="-space-x-4">
                    <img
                        class="relative z-30 inline object-cover w-12 h-12 border-2 border-white rounded-full"
                        src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                        alt="Profile image"
                    />
                    <img
                        class="relative z-20 inline object-cover w-12 h-12 border-2 border-white rounded-full"
                        src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                        alt="Profile image"
                    />
                    <img
                        class="relative z-10 inline object-cover w-12 h-12 border-2 border-white rounded-full"
                        src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                        alt="Profile image"
                    />
                </div>
            </div>

            <div className="my-10">
                <h3 className="text-2xl text-gray-800">Avatar with badge</h3>
                <div class="relative inline-block">
                    <img
                        class="inline-block object-cover w-12 h-12 rounded-full"
                        src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                        alt="Profile image"
                    />
                    <span class="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full"></span>
                </div>
            </div>
        </div>
    )
}

export default Avatars
