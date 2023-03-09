import { User } from "../models/User";

type UserInfoResponse = {
  error: boolean;
  message: string;
  data: User | null;
};

export const getUserInfo = async function (): Promise<UserInfoResponse> {
  const response = await fetch("https://randomuser.me/api/");
  const json = await response.json();

  if (json.error != null) {
    return { error: true, message: "something went wrong!", data: null };
  }

  const userRawInfo = json.results[0];

  const user = new User(
    userRawInfo.name.first,
    userRawInfo.name.last,
    userRawInfo.dob.date,
    userRawInfo.registered.date,
    userRawInfo.cell,
    userRawInfo.phone,
    userRawInfo.location.city,
    userRawInfo.location.state,
    userRawInfo.location.country,
    userRawInfo.email,
    userRawInfo.login.username,
    userRawInfo.picture.large
  );

  return { data: user, message: "success", error: false };
};
