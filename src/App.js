import React, { Component } from 'react'

const style = {
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  count: {
    fontSize: 120,
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    height: 100,
    width: 200,
    fontSize: 30,
    flex: 1,
  }
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 1000
    }
  }

  handleClick = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }))
  }

  render () {
    const { count } = this.state
    return (
      <div style={style.container}>
        <div style={style.count}>XM NAGY</div>
        <div style={style.count}>{count}</div>
        <button style={style.button} onClick={this.handleClick}>
          XM NAGY
        </button>
      </div>
    )
  }
}

export default App
