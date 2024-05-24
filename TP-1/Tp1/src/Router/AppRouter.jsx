import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import Menu from "../Components/Menu";
import HeroDetails from "../Pages/HeroDetails";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/DC" element={<MainPage publisher={"DC Comics"}/>}></Route>
        <Route path="/Marvel" element={<MainPage publisher={"Marvel Comics"}/>}></Route>
        <Route path="/:heroe" element={<HeroDetails/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;