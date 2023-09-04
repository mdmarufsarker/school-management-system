import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./db/routes";

function App() {
  return (
    <div className="font-body">
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
