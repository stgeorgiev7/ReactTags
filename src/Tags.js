import react from "react";

const Tags = (props) => {
    
    return(
        <ul className='tags'>
            {props.map(element => {
                return (
                    <li key={element} className='tag'>#{element}</li>
                );
            })}
        </ul>
    );
    

};

export default Tags;
