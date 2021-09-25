import react from "react";

const Tags = (tags) => {
    const list = tags.map(element => {
        return <li key={element} className='tag'>#{element}</li>;
    });

    return (
        <ul className='tags'>{list}</ul>
    );
    
    // return(
    //     <ul className='tags'>
    //         {props.map(element => {
    //             return (
    //                 <li key={element} className='tag'>#{element}</li>
    //             );
    //         })}
    //     </ul>
    // );
    
};

export default Tags;
