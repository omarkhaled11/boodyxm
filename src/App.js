import React, { Component } from 'react'

const style = {
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
  },
  count: {
    textAlign: 'center',
    fontSize: 80,
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 30,
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  arrows: {
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 200,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    height: 100,
    width: 200,
    fontSize: 30,
    flex: 1,
    textAlign: 'center',
    backgroundColor: 'red',
    color: 'white',
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
        <div style={style.text}>If you want to know how many times xm nagy click here</div>
        <div style={style.arrows}>
          <img width={30} height={30} src="https://discover.engineering.utoronto.ca/files/2014/06/arrow-down.jpg" />
          <img width={30} height={30} src="https://discover.engineering.utoronto.ca/files/2014/06/arrow-down.jpg" />
          <img width={30} height={30} src="https://discover.engineering.utoronto.ca/files/2014/06/arrow-down.jpg" />
          <img width={30} height={30} src="https://discover.engineering.utoronto.ca/files/2014/06/arrow-down.jpg" />
          <img width={30} height={30} src="https://discover.engineering.utoronto.ca/files/2014/06/arrow-down.jpg" />
          <img width={30} height={30} src="https://discover.engineering.utoronto.ca/files/2014/06/arrow-down.jpg" />
        </div>
        <button autoFocus style={style.button} onClick={this.handleClick}>
          XM NAGY
        </button>
      </div>
    )
  }
}

export default App
