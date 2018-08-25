import React, {Component} from 'react'
import axios from 'axios'
import Comment from './Comment'
import Stories from './Stories'
import { HashRouter, Link, Route } from 'react-router-dom'

export default class SingleAuthor extends Component {
  constructor(){
  	super()
  	this.state = {
  	  author: {},
  	  authorStories: [],
  	  authorComments: []
  	}
  	this.getAuthor=this.getAuthor.bind(this);
  	this.getAuthorStories=this.getAuthorStories.bind(this);
  	this.getAuthorComments=this.getAuthorComments.bind(this);
  }

  getAuthor(){
  	const authorId = this.props.match.params.authorId;
  	return axios.get(`/api/authors/${authorId}`)
  }

  getAuthorStories(){
  	const authorId = this.props.match.params.authorId;
  	return axios.get(`/api/authors/${authorId}/stories`)
  }

  getAuthorComments(){
  	const authorId = this.props.match.params.authorId;
  	return axios.get(`/api/authors/${authorId}/comments`)
  }

  componentDidMount(){
  	const authorId = this.props.match.params.authorId;
  	const {getAuthor, getAuthorStories, getAuthorComments} = this;
  	axios.all([getAuthor(), getAuthorStories(), getAuthorComments()])
  	.then(axios.spread((author, stories, comment)=>{
  	  this.setState({author:author.data, authorStories: stories.data, authorComments: comment.data})
  	})).catch()
  }

  render() {
  	const {author, authorComments, authorStories} = this.state;
  return (
  	<div id='single-author' className='column'>
  	  <div id='single-author-detail' className='row'>
  	    <div className='column mr1'>
  	      <h1>{author.name}</h1>
  	      <p>{author.bio}</p>
  	    </div>
  	  <img src={author.imageUrl} />
  	</div>
  	<div id='single-author-nav'>
  	  <Link to={`/api/authors/${author.id}/comments`}>Comments</Link>
  	  <Link to={`/api/authors/${author.id}/stories`}>Stories</Link>
  	  </div>
  	<hr />
  	<div>
  	<Route path='/api/authors/:authorId/stories' render={
  		(routeProps)=> <Stories stories={authorStories}/>} />
  	<Route path='/api/authors/:authorId/comments' render={
  		(routeProps)=> <Comment comments={authorComments}/>} />
  	</div>
  	</div>
  )
}
}


// <h4>STORIES</h4>
//   	<Stories stories={authorStories}/>
//   	<h4>COMMENTS</h4>
//   	{authorComments.map((comment)=>{
//   	  return (
//   	  	<Comment key={comment.id} comment={comment}/>
//   	  )
//   	})}



