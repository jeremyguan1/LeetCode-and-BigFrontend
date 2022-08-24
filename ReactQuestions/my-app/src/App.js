import "./App.css";
import ReactCounterApp from "./ReactCounterApp/ReactCounterApp";
import UseTimeout1 from "./UseTimeout/UseTimeout1.js";
import UseIsFirstRender from "./UseIsFirstRender/UseIsFirstRender";
import UseHover from "./Hover/UseHover";
import InfinityScroll from "./InfinityScroll/InfinityScroll";

function App() {
  const [ref, isHovered] = UseHover();
  return (
    <div className="App">
      {/* <ReactCounterApp /> */}
      {/* <UseTimeout1></UseTimeout1> */}
      {/* <UseIsFirstRender></UseIsFirstRender> */}
      {/* <div ref={ref}>{isHovered ? "hovered" : "not hovered"}</div> */}
      <InfinityScroll />
    </div>
  );
}

export default App;
