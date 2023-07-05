import React from "react";
import './style.css'
const Introduce = ()=>{
return (
    <div>
        <h1 className="heading">What I have learnt about ReactJs</h1>
        <p>It has reusable components</p>
        <p>The writing format is JSX</p>
        <p>It is fast</p>
        {/* <h1 className="The African Continent"></h1>
        <img src="images/ground.png" id="images"></img> */}
        <h1 className="heading">The Beauty of African Women</h1>
        <img src="images/woman.jpg" id="image"></img>
        <img src="images/beauty.png" id="image4"></img>
        <img src="images/africa.jpg" id="image1"></img>
        <img src="images/Africa.jpg" id="image2"></img>
        <img src="images/woman.png" id="image3"></img>
        <img src="images/empress.jpg" id="image5"></img>
        <img src="images/quen.jpg" id="image6"></img>
        <img src="images/black.jpg" id="image7"></img>
        <img src="images/black.png" id="image8"></img>

        <table class="table">
        <tr>
            <th>first name</th>
            <th> last name</th>
            <th> email adress</th>
        </tr>
        <tr>
            <td>lynette</td>
            <td>warukira</td>
            <td>warukiralynette@gmail.com</td>
        </tr>
        <tr>
            <td>Eunice</td>
            <td>Mjera</td>
            <td>mjeraeunice@gmail.com</td>
        </tr>
        <tr>
            <td>Faith</td>
            <td>Gisemba</td>
            <td>gisembafaith@gmail.com</td>
        </tr>
        <tr>
            <td>Milkah</td>
            <td>Makini</td>
            <td>makinimilkah@gmail.com</td>
        </tr>
        <tr>
            <td>Lilian</td>
            <td>Kanyua</td>
            <td>kanyualilian@gmail.com</td>
        </tr>
  </table>  
    </div>
);
};

export default Introduce;