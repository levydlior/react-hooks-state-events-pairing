import React from 'react'

function Header({video}){
    return (
        <header>
        <iframe
          width="919"
          height="525"
          src={video.embedUrl}
          frameBorder="0"
          allowFullScreen
          title="Thinking in React"
        />
      </header>
    )
}


export default Header