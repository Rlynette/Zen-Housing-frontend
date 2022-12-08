import React, { useEffect , useState} from 'react'
import "./App.css"
// import image3 from "./images1/image3.png";



function Houses() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch(" ")
      .then((resp) => resp.json())
      .then((data) => setHouses(data));
  }, []);
  console.log(houses);

  return (
    <div className="Featuredproperties">
      <h2>Our Featured Properties.</h2>
      <p>
        One of our biggest product to be featured and that has sold out the
        most.
      </p>
    </div>

    
  );
  
}

export default Houses;
