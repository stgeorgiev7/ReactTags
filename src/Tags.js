import react from "react";

const Tags = () => {
    const arr = ['boomdotdev', 'task', 'tags', 'react'];
    
    return (<div className='tags'>
         <title className='tag'>#{arr[0]}</title>
         <title className='tag'>#{arr[1]}</title>
         <title className='tag'>#{arr[2]}</title>
         <title className='tag'>#{arr[3]}</title>
    </div>
   );  


};

export default Tags;