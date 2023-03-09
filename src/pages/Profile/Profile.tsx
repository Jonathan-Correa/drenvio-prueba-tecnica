import Card from "../../components/Card/Card";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";

import "./Profile.css";
import { useContext } from "react";
import UserInfoContext from "../../modules/Profile/store/user-info-context";

const Profile = () => {
  const { user } = useContext(UserInfoContext);

  return (
    <>
      <div className="profile-card-container">
        <Card>
          <section className="profile-picture-container">
            <ProfilePicture url={user?.photo ?? ""} />
          </section>
          <section className="user-info">
            <h1 className="user-name">{user?.fullName}</h1>
            <p className="username text-grey">@{user?.username}</p>
            <h6>
              {user?.city}, {user?.state}, {user?.country}
            </h6>
            <button className="user-follow-button">Follow</button>
          </section>
        </Card>
        <Card className="user-detailed-info">
          <p className="user-name fullname">{user?.fullName}</p>
          <section>
            <p>
              <span className="text-grey">Birth Date:</span> {user?.dateOfBirth}{" "}
              /<span className="text-grey"> Joined:</span>{" "}
              {user?.registeredDate}
            </p>
            <p>
              <span className="text-grey">Location: </span>
              {user?.city}, {user?.state}, {user?.country}
            </p>
            <p>
              <span className="text-grey">Email: </span> {user?.email}
            </p>
            <p>
              <span className="text-grey">Phone:</span> {user?.phone} /{" "}
              <span className="text-grey">Cell:</span> {user?.cellphone}
            </p>
          </section>
        </Card>
      </div>
    </>
  );
};

export default Profile;
