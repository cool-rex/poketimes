import React from "react";

const Rainbow = (wrappedComponent)=>{

    const colours = ['red','pink','orange','blue','green', 'yellow'];
    const randomColour= colours[Math.floor(Math.random() * 5)];
    const className = randomColour + "-text";


    return(props) => {
        return(
            <div className={className}>
                <wrappedComponent {...props}/>
                <div className='container'>
        <h4 className='center'>About</h4>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
       </div>
            </div>
        )
    }


}

export default Rainbow
