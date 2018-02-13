import * as React from "react"
import { Component } from "react"
import { render } from "react-dom"

require("style.css")
var img = require("images/logo.png")

class App extends Component<{}, {}> {
    public render() {
        return (
            <div>
                <img src={img} />
            </div>
        )
    }
}

const el = document.getElementById("root")
render(<App />, el)
