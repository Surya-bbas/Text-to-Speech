import React from 'react';

const Output = ({data}) => {

    const apikey = "0c89409873824f99bc746a2a81beea18";
    const AudioSrc = data;
    const mylink = "https://api.voicerss.org/?key=" + apikey + "&hl=en-us&src=" + AudioSrc;

    return (
        <div>
            <audio controls>
                <source src={mylink} type="audio/mp3" />
            </audio>
        </div>
    )
}
export default Output