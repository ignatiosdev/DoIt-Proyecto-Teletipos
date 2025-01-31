import React from 'react';
import smileyFace from '../../../assets/smileyFace.png'; // Import the image

function EmptyTaskList() {
  return (
    <div className='flex flex-col md:flex-row items-center md:w-10/12 mx-auto'>
      <div className=' md:w-1/2 md:text-xl md:px-8'>
        Parece que la lista de tareas está vacía!
      </div>
      <div className='md:w-1/2 flex justify-center'>
        
        <img src={smileyFace} className='opacity-75 w-[150px] md:w-[200px]'/> 
      </div>
    </div>
  );
}

export default EmptyTaskList;