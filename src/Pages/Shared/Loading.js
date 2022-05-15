import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center h-screen items-center'>
            <button className='btn loading   '>loading</button>

            <div class="flex items-center justify-center ">
                <div class="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
            </div>
        </div>
    );
};

export default Loading;