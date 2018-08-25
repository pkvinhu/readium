import React from 'react'
import Navbar from './Navbar'
import AllStories from './Stories'
import {HashRouter, Route} from 'react-router-dom'
import SingleStory from './SingleStory'
import Authors from './Authors'
import SingleAuthor from './SingleAuthor'

export default class Main extends React.Component {
  render () {
    return (
     <HashRouter>
      <div id='main'>
        <div className='column container'>
          <div id='header'>
            <h1>Readium</h1>
          </div>
          <Navbar />
        </div>
        <Route exact path='/' component={AllStories}/>
        <Route exact path='/authors' component={Authors}/>
        <Route path='/authors/:authorId' component={SingleAuthor}/>
        <Route exact path='/stories' component={AllStories}/>
        <Route path='/stories/:storyId' component={SingleStory}/>
      </div>
      </HashRouter> 
    )
  }
}
