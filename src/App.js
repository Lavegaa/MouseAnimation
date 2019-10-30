import React, { Component } from "react"
import "./App.css"

class App extends Component {
  state = { width: 0, height: 0, moveX: "", moveY: "" }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener("resize", this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions)
  }

  updateWindowDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  _handleMouseMove = e => {
    const { width, height } = this.state

    this.setState({
      moveX: (width / 2 - e.nativeEvent.clientX) * 0.1 + "px",
      moveY: (height / 2 - e.nativeEvent.clientY) * 0.1 + "px"
    })
  }

  render() {
    const { moveX, moveY } = this.state

    return (
      <div>
        <header>
          <div
            className="bg"
            onMouseMove={this._handleMouseMove}
            style={{ marginLeft: moveX, marginTop: moveY }}
          />
        </header>
      </div>
    )
  }
}

export default App
