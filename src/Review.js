import React from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import people from './data';




const Review = () =>{
    const [index, setIndex] = React.useState(0);
    const {name, job, image, text} = people[index];
    const checkNumara =(number) =>{
        if(number > people.length -1){
            return 0;
        }
        if (number < 0){
            return people.length -1;
        }
        return number;
    };

    const yeniKisi= () =>{
        setIndex((index)=>{
            let newIndex = index +1;
            return checkNumara(newIndex);
     } );
    };

    const oncekiKisi =() =>{
        setIndex((index)=>{
            let newIndex = index -1;
            return checkNumara(newIndex);
        })
    }

    const rastGeleBiri = () =>{
        let rastGeleNumara = Math.floor(Math.random() * people.length);
        if(rastGeleNumara === index){
            rastGeleNumara = index +1;
        }
        setIndex(checkNumara(rastGeleNumara));
    };
return(

<article className="yorumlar">
<div className="img-container">
    <img src={image} alt={name} className='kisi-resim'/>
<span className="quote-icon">
    <FaQuoteRight/>
</span>
</div>

<h4 className="yazar">{name}</h4>
<p className="meslek">{job}</p>
<p className="bilgi">{text}</p>
<div className="button-container">
    <button className="prev-btn" onClick={oncekiKisi}>
        <FaChevronLeft/>
    </button>
    <button className="next-btn" onClick={yeniKisi}></button>
    <FaChevronRight/>
     </div>
<button className="random-btn" onClick={rastGeleBiri}>

    surprise me
</button>

</article>


)




}

export default Review;