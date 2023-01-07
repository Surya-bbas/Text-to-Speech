import React from 'react';
import ReactAudioPlayer from 'react-audio-player'

const Output = ({data}) => {

    console.log(data);

    const apikey = "0c89409873824f99bc746a2a81beea18";
    const AudioSrc = data;
    const mylink = "https://api.voicerss.org/?key=" + apikey + "&hl=en-us&src=" + AudioSrc;

    return (
        <div>
            <h1>{mylink}</h1>

            <ReactAudioPlayer
             src={mylink}
             controls
             style={{ width:'1000px'}}

              />
              
        </div>
    )
}
export default Output