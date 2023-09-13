import React from 'react'
import ApexVideo from '../videos/apex-hero-medium-video-legend-octane.mp4'

function Video(){

return(
    <section className="video">
            <video src={ApexVideo} autoPlay loop muted width="3440"></video>
        </section>
)

}

export default Video