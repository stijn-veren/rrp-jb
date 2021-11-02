import { Component, useEffect } from 'react'

const HookCounter = ({ value }) => {
  // componentDidMount, componentDidUpdate
  useEffect(() => {
    console.log('useEffect as componentDidMount and componentDidUpdate')
  })

  // componentDidMount
  useEffect(() => {
    console.log('useEffect as componentDidMount only')
  }, [])

  // componentDidMount, componentDidUpdate
  useEffect(() => {
    console.log('useEffect as componentDidMount and componentDidUpdate')
  }, [value])

  // componentDidMount, componentDidUpdate, componentWillUnmount
  useEffect(() => {
    console.log(
      'useEffect as componentDidMount, componentDidUpdate and componentWillUnmount'
    )
    return () => console.log('clear')
  }, [value])

  return <p>{value}</p>
}

class ClassCounter extends Component {
  componentDidMount() {
    console.log('class: mount')
  }

  componentDidUpdate(props) {
    console.log('class: update')
  }

  componentWillUnmount() {
    console.log('class: unmount')
  }

  render() {
    return <p>{this.props.value}</p>
  }
}

export { HookCounter, ClassCounter }
