import React from 'react'

export default function Comment ({comments}) {
  return (
  	<div>
  	{comments.map((comment)=>(
  	  return(
  	  <div className='comment row'>
      <img src={comment.author.imageUrl} />
      <div className='column'>
        <a>
          <h5>{comment.author.name}</h5>
        </a>
        <div>{comment.content}</div>
      </div>
    </div>
    )
  	))}
  	</div>
  )
}