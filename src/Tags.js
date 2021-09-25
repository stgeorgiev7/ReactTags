import react from "react";

const Tags = (tags) => {
    const arr = tags;
    
    return (<div className='tags'>
         <div className='tag'>#{arr.shift()}</div>
         <div className='tag'>#{arr.shift()}</div>
         <div className='tag'>#{arr.shift()}</div>
         <div className='tag'>#{arr.shift()}</div>
    </div>
   );  
};

export default Tags;