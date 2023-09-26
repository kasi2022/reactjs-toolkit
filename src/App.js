
import { Route, Routes } from "react-router-dom";
import UseState from "./Component/Hooks/Usestate";
import UseEffect from "./Component/Hooks/useeffect";
import Landing from "./Component/Landing";
import Home from "./Component/Screens/Home";
import SingleForm from "./Component/Form/singleform";

function App() {
  return (
    <>
    {/* //landing Screen contain the link path  */}
    <Landing/>
    {/* //Createing the routing befere using the  */}
    {/*// install Routing using this commapnt copypath 
    Terminal [ npm i react-router-dom]*/}
    {/* path contained here is end point [it refere screen area ware we need to go] */}
    {/* element is the component name [contain html elements] */}
    {/* notes "/" refre to home Screen very  important  routing topic */}

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/usestate" element={<UseState/>}/>
      <Route path="/useeffect" element={<UseEffect/>}/>
      <Route path="/singleform" element={<SingleForm/>}/>

      
    </Routes>
    </>
  );
}


export default App;
