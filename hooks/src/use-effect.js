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

  // componentWillUnmount
  useEffect(
    () => () => console.log('useEffect as componentWillUnmount only'),
    []
  )

  // componentDidMount, componentDidUpdate
  useEffect(() => {
    console.log('useEffect as componentDidMount and componentDidUpdate')
  }, [value])

  // componentDidMount, componentWillUnmount
  useEffect(() => {
    console.log('useEffect as componentDidMount')
    return () => console.log('useEffect as componentWillUnmount')
  }, [])

  // componentDidMount, componentDidUpdate, componentWillUnmount
  useEffect(() => {
    console.log('useEffect as componentDidMount, componentDidUpdate')
    return () => console.log('useEffect as componentWillUnmount')
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
