import { createContext, useEffect, useState } from "react";
import { getUserInfo } from "../services/profile-service";
import Loading from "../../shared/pages/Loading/Loading";
import { User } from "../models/User";

export type UserInfoContextType = {
  user: User | null
};

const UserInfoContext = createContext<UserInfoContextType>({user: null});

type Props = {
  children: JSX.Element | JSX.Element[];
};

export function UserInfoProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);
  const [userIsLoading, setUserIsLoading] = useState(true);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  async function fetchUserInfo() {
    const response = await getUserInfo();

    setTimeout(() => {
      setUser(response.data);
      setUserIsLoading(false);
    }, 1000);
  }

  return (
    <UserInfoContext.Provider value={{ user }}>
      {userIsLoading ? <Loading /> : children}
    </UserInfoContext.Provider>
  );
}

export default UserInfoContext;
