import React, {Component} from 'react'
import axios from 'axios'
import Comment from './Comment'

export default class SingleStory extends Component {
  constructor () {
  	super()
  	this.state = {
  	  story: {
  	  	content: '',
  	  	comments: []
  	  }
  	}
  }

  componentDidMount(){
  	const storyId = this.props.match.params.storyId;
  	axios.get(`/api/stories/${storyId}`)
  	.then((res)=>this.setState({story:res.data}))
  	.catch()
  }

  render() {
  	const {story} = this.state;
  	  	console.log(story.comments)
  	return (
  	  <div id='single-story' className='column'>
		<h1>{story.title}</h1>
		  <p>{story.content}</p>
		  <h3>Responses:</h3>
		  <div id='comments'>
		  	  <Comment comments={story.comments} />
		  </div>
	  </div>
  	)
  }
}
