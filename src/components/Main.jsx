import React from 'react';
import Output from './Output';
import { useState } from 'react';

const Main = () => { 
    
    const [data, setData] = useState(['Welcome to the website'])
      
    const getData =  () => {
        const TxtData = document.getElementById('editor').value;
        setData(TxtData)
        console.log(TxtData);
        
    }
    function click() {
        getData();
    }
    return (
        <div>
            <div className='object-contain flex flex-col items-center  '>
                <div className="w-full mb-4 border border-gray-200 rounded-lg bg-sec dark:bg-gray-700 dark:border-gray-600  w-3/4">
                    <div className="px-4 py-2 bg-sec rounded-b-lg dark:bg-gray-800">
                        <textarea id="editor" rows="8" className="block w-full px-0 text-sm text-gray-800 bg-sec border-0 dark:bg-gray-800 focus:ring-0 dark:text-sec dark:placeholder-gray-400 " placeholder="Write your text..." required></textarea>
                    </div>
                    <div className='flex flex-col items-center py-4'>
                        <button type="button" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-secondary rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-secondary  md:text-2xl" onClick={click}>
                            Convert
                        </button>
                    </div>
                </div>
            </div>
        <Output data={data} />
        </div>
        
    );
};

export default Main;