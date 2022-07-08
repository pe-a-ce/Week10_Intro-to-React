import lemonCake from "../images/lemonCake.jpg";
import carrotCake from "../images/carrotCake.jpg";
import brownies from "../images/brownies.jpg";
import tealoaf from "../images/tealoaf.jpg";

function CakeImages () {

    return (
        <div>
        <img src={lemonCake} alt = "" className="cakeImages"/>
        <img src={tealoaf} alt = "" className="cakeImages"/>
        <img src={brownies} alt=""className="cakeImages"/>
        <img src={carrotCake} alt=""className="cakeImages"/>


        </div>
    )
}

export default CakeImages;

