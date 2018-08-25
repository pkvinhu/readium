import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function Stories({stories}){
    return (
      <div id='stories' className='column'>
        {
          stories.map(story => {
            return (
            <div className='story' key={story.id}>
              <a>
                 <Link to={`/stories/${story.id}`}><h3>{story.title}</h3></Link>
              </a>
              <a>
                <p>{story.author.name}</p>
              </a>
              <hr />
            </div>
            )
          })
        }
      </div>
    )
}
