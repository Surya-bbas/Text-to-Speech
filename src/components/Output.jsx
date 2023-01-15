import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const Output = ({ data }) => {

    
    
    const apikey = "0c89409873824f99bc746a2a81beea18";
    const AudioSrc = data;
    const mylink = "https://api.voicerss.org/?key=" + apikey + "&hl=en-us&src=" + AudioSrc;

    return (
        <div className='text-center p-6'>

            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-pri md:text-5xl lg:text-6xl dark:text-white"><span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Output</span></h1>
            <ReactAudioPlayer
                className='w-1/2 mt-10 mx-auto '
                src={mylink}
                controls

            />

        </div>
    );
};
export default Output;