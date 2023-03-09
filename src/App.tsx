import "./App.css";
import Header from "./components/Layout/Header/Header";
import { UserInfoProvider } from "./modules/Profile/store/user-info-context";
import Profile from "./pages/Profile/Profile";

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
