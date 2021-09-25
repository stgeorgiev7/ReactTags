import react from "react";

const Tags = () => {
    const arr = ['boomdotdev', 'task', 'tags', 'react'];
    
    return (<ul className='tags'>
        <li>
            <title className='tag'>#{arr[0]}</title>
        </li>
        <li>
            <title className='tag'>#{arr[1]}</title>
        </li>
        <li>
            <title className='tag'>#{arr[2]}</title>
        </li>
        <li>
            <title className='tag'>#{arr[3]}</title>
        </li>
        </ul>
   );  


};

export default Tags;