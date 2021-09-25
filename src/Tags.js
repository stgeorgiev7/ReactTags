import react from "react";

const Tags = () => {
    const arr = ['boomdotdev', 'task', 'tags', 'react'];
    
    return (<ul className='tags'>
    <li className='tag'>#{arr[0]}</li>
    <li className='tag'>#{arr[1]}</li>
    <li className='tag'>#{arr[2]}</li>
    <li className='tag'>#{arr[3]}</li>
    </ul>
);  

};

export default Tags;