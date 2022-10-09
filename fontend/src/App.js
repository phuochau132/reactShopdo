import { Routes, Route } from "react-router-dom";

import './App.css';
import { privateRouter } from './router'
import { Header, Footer } from './Component'
import { SlideFixed } from './Component'



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {privateRouter.map((item, index) => {
          const Page = item.element
          return <Route key={index} path={item.path} element={<Page />} />
        })}
      </Routes>
      <SlideFixed />
      <Footer />
    </div>
  );
}

export default App;
