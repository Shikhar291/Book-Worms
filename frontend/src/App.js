import logo from './logo.svg';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import Admin from './components/admin';
import AdminProfile from './components/admin/profile';
import Main from './components/main';
import User from './components/user';
import AddNovel from './components/user/addNovel';
import BrowseNovel from './components/main/browseNovels';
import NovelDetail from './components/main/novelDetails';
import ManageNovel from './components/user/manageNovel';


function App() {
  return (

      <BrowserRouter>
      
      <Routes>

        <Route element={<Admin></Admin>} path="admin">
        <Route element={<AdminProfile></AdminProfile>} path="profile"> </Route>
        </Route>

        <Route element={<Main></Main>} path="main">
          <Route element={<BrowseNovel/>} path="browsenovel"></Route>
          <Route element={<NovelDetail></NovelDetail>} path="noveldetail/:id"></Route>
        </Route>

        <Route element={<User></User>} path="user">
        <Route element={<AddNovel></AddNovel>} path="addnovel"></Route>
        <Route element={<ManageNovel></ManageNovel>} path="managenovel"></Route>
        </Route>

      </Routes>

      </BrowserRouter>
  );
}

export default App;
