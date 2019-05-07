import React from 'react'

const VideoHero =(props) =>{
    
    if (props.video){
         return (
            <div style={{marginBottom:'2rem'}} className="ui segment">
                
                <div className="ui embed">
                   <iframe src={`https://www.youtube.com/embed/${props.video.id.videoId}`} title="video player" allowFullScreen></iframe>
                </div>

                <div  className="ui segment">
                    <h4 className="ui header">{props.video.snippet.title}</h4>
                    <p>{props.video.snippet.description}</p>
                </div>
                
            </div>
         
         )
    }   
    return <div></div>
   
}
export default VideoHero