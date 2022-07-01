import React from "react";
import ReactDOM from "react-dom";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LoginPage />, div);
});

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<HomePage />, div);
});
