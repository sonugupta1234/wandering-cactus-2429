import "./App.css";
import { Homepage } from "./Pages/Homepage";
import Mens from "./Pages/Mens";
import MobileAccessories from "./Pages/MobileAccessories";
import Womens from "./Pages/Womens";
import MainRoutes from "./Pages/MainRoutes";
import ShoppingPage from "./Pages/Shopping/ShoppingPage";
function App() {
  return (
    <div className="App">
      <Homepage />
      {/* <Mens /> */}
      {/* <Womens /> */}
      {/* <MobileAccessories /> */}
       <MainRoutes />
{/* <ShoppingPage/> */}
    </div>
  );
}

export default App;
