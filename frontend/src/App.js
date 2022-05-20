import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/admin";
import AdminProfile from "./components/admin/profile";
import Main from "./components/main";
import User from "./components/user";
import AddNovel from "./components/user/addNovel";
import BrowseNovel from "./components/main/browseNovels";
import NovelDetail from "./components/main/novelDetails";
import ManageNovel from "./components/user/manageNovel";
import Chat from "./components/user/chat";
import Signup from "./components/main/signup";
import AddQuery from "./components/user/addQuery";
import BrowseQuery from "./components/main/browseQuery";
import Login from "./components/main/login";
import BuyNovel from "./components/main/buyNovel";
import RentNovel from "./components/main/rentNovel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Admin></Admin>} path="admin">
          <Route element={<AdminProfile></AdminProfile>} path="profile">
            {" "}
          </Route>
        </Route>

        <Route element={<Main></Main>} path="main">
          <Route
            element={<BrowseQuery></BrowseQuery>}
            path="browsequery"
          ></Route>
          <Route element={<BrowseNovel />} path="browsenovel"></Route>
          <Route element={<NovelDetail />} path="noveldetail/:id"></Route>
          <Route element={<BuyNovel/>} path="buy" />
          <Route element={<RentNovel/>} path="rent" />
          <Route element={<Login />} path="login"></Route>
          <Route element={<Signup />} path="signup"></Route>
        </Route>

        <Route element={<User></User>} path="user">
          <Route element={<AddQuery></AddQuery>} path="addquery"></Route>
          <Route element={<Chat></Chat>} path="chat/:userid"></Route>
          <Route element={<AddNovel></AddNovel>} path="addnovel"></Route>
          <Route
            element={<ManageNovel></ManageNovel>}
            path="managenovel"
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
