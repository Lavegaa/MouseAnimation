# MouseAnimation
react hooks를 공부하며 기존 class component에서 functional component로 리팩토링 했다.
# 빠른시작

## 클론

```
git clone https://github.com/Lavegaa/MouseAnimation.git
```

## dependencies 설치

```
npm install
```

or

```
yarn
```

## 시작

```
npm start
```

or

```
yarn start
```

# useState
기존 class component에서 state 설정과 setState를 hooks에서는 useState를 통해 구현할 수 있다.
## Class component
```
import React, { Component } from "react"

class App extends Component {
  state = { width: 0, height: 0, moveX: "", moveY: "" }
  
  ...
   _handleMouseMove = e => {
    const { width, height } = this.state

    this.setState({
      moveX: (width / 2 - e.nativeEvent.clientX) * 0.1 + "px",
      moveY: (height / 2 - e.nativeEvent.clientY) * 0.1 + "px"
    })
  }
  ...
  
}
```
## funtional component
```
import React, { useState, useEffect } from "react";

const FunctionApp = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [moveX, setMoveX] = useState("");
  const [moveY, setMoveY] = useState("");
  
  ...
  const _handleMouseMove = e => {
    setMoveX((width / 2 - e.nativeEvent.clientX) * 0.1 + "px");
    setMoveY((height / 2 - e.nativeEvent.clientY) * 0.1 + "px");
  };
  ...
  
}
```
# useEffect
functional component에서도 useEffect hook을 사용해 라이프 사이클을 관리 할 수 있다.

## Class component
```
import React, { Component } from "react"

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
...  

}
```

## funtional component
```
import React, { useState, useEffect } from "react";

const FunctionApp = () => {
  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  });

  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
 ...

}
```
