import "./App.css";
import Calc from "./Pages/Calc.jsx";
import Menu from "./Components/Menu.jsx";
import Currency from "./Pages/CurrencyConv.jsx";
import TrigoFunc from "./Pages/TrigoFunc.jsx";
import UnitConv from "./Pages/UnitConv.jsx";
import DicountCalc from "./Pages/DiscountCalc.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="h-[100vh] w-full flex justify-center items-center bg-cover bg-[url(/wood.jpg)]">
          <Menu />
          <Calc />
        </div>
      ),
    },
    {
      path: "/calculator",
      element: (
        <div className="h-[100vh] w-full flex justify-center items-center bg-cover bg-[url(/wood.jpg)]">
          <Menu />
          <Calc />
        </div>
      ),
    },
    {
      path: "/currency-converter",
      element: (
        <div className="h-[100vh] w-full flex justify-center items-center bg-cover bg-[url(/wood.jpg)]">
          <Menu />
          <Currency />
        </div>
      ),
    },
    {
      path: "/unit-converter",
      element: (
        <div className="h-[100vh] w-full flex justify-center items-center bg-cover bg-[url(/wood.jpg)]">
          <Menu />
          <UnitConv />
        </div>
      ),
    },
    {
      path: "/discount-calculator",
      element: (
        <div className="h-[100vh] w-full flex justify-center items-center bg-cover bg-[url(/wood.jpg)]">
          <Menu />
          <DicountCalc />
        </div>
      ),
    },
    {
      path: "/trigonometric-functions",
      element: (
        <div className="h-[100vh] w-full flex justify-center items-center bg-cover bg-[url(/wood.jpg)]">
          <Menu />
          <TrigoFunc />
        </div>
      ),
    },
    {},
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
