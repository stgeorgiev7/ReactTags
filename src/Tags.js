import react from "react";

const Tags = (tags) => {
    const arr = tags;
    
    return (<div className='tags'>
         <title className='tag'>#{arr.shift()}</title>
         <title className='tag'>#{arr.shift()}</title>
         <title className='tag'>#{arr.shift()}</title>
         <title className='tag'>#{arr.shift()}</title>
    </div>
   );  
};

export default Tags;