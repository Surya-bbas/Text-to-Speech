import React from 'react';

const Header = () => {
    return (
        <div className='text-center p-6'>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-pri md:text-5xl lg:text-6xl dark:text-white"><span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Text to Speech</span></h1>
            <p className="text-lg font-normal text-sec lg:text-xl dark:text-gray-400">Convert the Text into Mp3</p>
           
        </div>
    );
};

export default Header;
