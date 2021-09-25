import react from "react";

const Tags = (tags) => {
    const arr = tags;
    
    return (<div className='tags'>
         <title className='tag'>#{arr[0]}</title>
         <title className='tag'>#{arr[1]}</title>
         <title className='tag'>#{arr[2]}</title>
         <title className='tag'>#{arr[3]}</title>
    </div>
   );  


};

export default Tags;