import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Stories from './Stories'

export default class AllStories extends Component {
  constructor () {
    super()
    this.state = {
      stories: []
    }
  }

  componentDidMount () {
    axios.get('/api/stories')
      .then(res => res.data)
      .then(stories => this.setState({stories}))
      .catch(console.log.bind(console))

  }

  render () {
    const stories = this.state.stories
    return (
      <div>
        <Stories stories={stories}/>
      </div>
    }
    )
  }
}