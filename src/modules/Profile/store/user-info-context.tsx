import { createContext, useEffect, useState } from "react";
import { getUserInfo } from "../services/profile-service";
import Loading from "../../shared/pages/Loading/Loading";
import { User } from "../models/User";

export type UserInfoContextType = {
  user: User | null;
  searchUser: () => Promise<void>;
};

const UserInfoContext = createContext<UserInfoContextType>({
  user: null,
  searchUser: async () => {},
});

type Props = {
  children: JSX.Element | JSX.Element[];
};

export function UserInfoProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);
  const [userIsLoading, setUserIsLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();
    searchUser(abortController);

    return () => abortController.abort();
  }, []);

  async function searchUser(abortController?: AbortController) {
    setUserIsLoading(true);
    const response = await getUserInfo(abortController);

    setTimeout(() => {
      setUser(response.data);
      setUserIsLoading(false);
    }, 500);
  }

  return (
    <UserInfoContext.Provider value={{ user, searchUser }}>
      {userIsLoading ? <Loading /> : children}
    </UserInfoContext.Provider>
  );
}

export default UserInfoContext;
