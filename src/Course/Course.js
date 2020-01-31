import React from 'react';
import  "./Course.css";

class Course extends React.Component{

    // addCart=event=>{
    //     console.log("addcart")
    // }
    render()
    {
        return(
            <div className="Card"> 
            <img src={this.props.Image} alt="iii" ></img>
            <h2>{this.props.Title}</h2>
            <h3>{this.props.Author}</h3>
            <button onClick={this.props.addcart}>add to cart</button>
            </div>     
        )
    }
}
export default Course;