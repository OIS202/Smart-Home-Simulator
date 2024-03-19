// import React, { useState } from "react";

// function Lights() {
//   const [lights, setLights] = useState({
//     kitchen: false,
//     livingRoom: false,
//     bedroom: false,
//     // Add more lights as needed
//   });

//   // Function to toggle the state of a light
//   const toggleLight = (light) => {
//     setLights((prevLights) => ({
//       ...prevLights,
//       [light]: !prevLights[light],
//     }));
//   };

//   return (
//     <div>
//       <LightsList lights={lights} toggleLight={toggleLight} />
//       <HomeImage lights={lights} toggleLight={toggleLight} />
//     </div>
//   );
// }

// export default Lights;
