import React, { Component } from "react"
import routes from "./routes"
import { Routes, Route } from "react-router-dom"

const Router = () => {
    return (
        <Routes>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    element={<route.component {...route.props} />}
                />
            ))}
        </Routes>
    )
}

export default Router
