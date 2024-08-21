import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import { components } from "./lib/utils";

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
            element={<component.page />}
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
