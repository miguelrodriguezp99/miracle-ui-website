import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import { components } from "./lib/utils";
import Demo from "./pages/test/Testing";
import Introduction from "./pages/introduction/Introduction";
import Installation from "./pages/installation/Installation";
import About from "./pages/about/About";
import Layout from "./layout/Layout";
import HomeLayout from "./layout/HomeLayout";

function App() {
  const componentArray = Object.values(components);

  return (
    <>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<Layout />}>
          {componentArray.map((component, index) => (
            <Route
              key={index}
              path={`/components/${component.title}`}
              element={<component.page />}
            />
          ))}
          <Route path="/demo" element={<Demo />} />
          <Route path="/docs/" element={<Introduction />} />
          <Route path="/docs/introduction" element={<Introduction />} />
          <Route path="/docs/installation" element={<Installation />} />
          <Route path="/docs/about" element={<About />} />
          <Route path="/docs/*" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
