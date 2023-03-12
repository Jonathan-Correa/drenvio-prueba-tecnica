import "./App.css";
import Header from "./components/Layout/Header/Header";
import Profile from "./modules/Profile/pages/Profile/Profile";
import { UserInfoProvider } from "./modules/Profile/store/user-info-context";

function App() {
  return (
    <>
      <Header />
      <UserInfoProvider>
        <Profile />
      </UserInfoProvider>
    </>
  );
}

export default App;
