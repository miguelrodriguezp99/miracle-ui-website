import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import { components } from "./lib/utils";
import { Accordion } from "./pages/components/accordion/Accordion";

function App() {
  const componentArray = Object.values(components);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {componentArray.map((component, index) => (
          <Route
            key={index}
            path={`/components/${component.title}`}
            element={<Accordion />}
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
