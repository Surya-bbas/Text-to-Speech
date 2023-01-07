import React from 'react';

const Output = ({data}) => {

    const apikey = "a51eb574f38944c28cf78061597b49ba";
    const AudioSrc = data;
    const mylink = "https://api.voicerss.org/?key="+apikey+"&hl=en-us&src=" + AudioSrc;

    return (
        <div>
            <audio controls>
                <source src={mylink} type="audio/mp3" />
            </audio>
        </div>
    )
}
export default Output