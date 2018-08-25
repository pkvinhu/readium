import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import SingleAuthor from './SingleAuthor'
import axios from 'axios'

export default class Authors extends Component {
  constructor(){
  	super()
  	this.state= {
  	  authors: []
  	}
  }

  componentDidMount () {
    axios.get('/api/authors')
      .then(res => res.data)
      .then(authors => this.setState({authors}))
      .catch(console.log.bind(console))
  }

  render() {
  	const {authors} = this.state;

  	return (
  	  <div>
        {authors.map(author => {
                 return (
                 <Link to={`/authors/${author.id}`} key={author.id}>
                   <div className='author row'>
                   <img src={author.imageUrl}/>
                    <p>{author.name}</p>
                  </div>
                 </Link>  
                 )  
          })
        }
      </div>
  	)
  }
}