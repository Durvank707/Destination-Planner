import {useState} from "react";

function Card({id,info,price, name,image, removeTour}){

    const[readmore,setReadmore] = useState(false);

    const description = readmore ? info : `${info.substring(0,200)}....`;

    function readmoreHandler(){
        setReadmore(!readmore);
    }
     
    return(
        <div className="card-container">
            <img className="image" src = {image}></img>
            <div className="box">
                <div className="price">
                    <h4 className="tp"> Rs.{price}</h4>
                    <h4 className="tn">{name}</h4>
                </div>
                <div className="info">
                    {description}
                    <span className="smsl" onClick={readmoreHandler}>
                        {readmore ? `Show Less` : `Show More`} 
                    </span>

                </div>
            </div>

            <button className="btn" onClick={()=>removeTour(id)}>
                Not Interested
            </button>
        </div>
    )
}

export default Card;