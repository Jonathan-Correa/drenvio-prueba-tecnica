import "./Profile.css";
import { useContext } from "react";
import Card from "../../../../components/Card/Card";
import UserInfoContext from "../../store/user-info-context";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import Button from "../../../../components/Button/Button";

const Profile = () => {
  const { user, searchUser } = useContext(UserInfoContext);
  const searchNextProfile = () => searchUser();

  return (
    <>
      <div className="next-profile-button-container">
        <Button onClick={searchNextProfile}>Next Profile</Button>
      </div>
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
            <Button>Follow</Button>
          </section>
        </Card>
        <Card className="user-detailed-info">
          <p className="user-name fullname">{user?.fullName}</p>
          <p className="info-title">Information</p>
          <section>
            <p>
              <span className="text-grey">Birth Date:</span> {user?.dateOfBirth}{" "}
              /<span className="text-grey"> Joined:</span>{" "}
              {user?.registeredDate}
            </p>
            <hr />
            <p>
              <span className="text-grey">Location: </span>
              {user?.city}, {user?.state}, {user?.country}
            </p>
            <hr />
            <p className="info-title">Contact</p>
            <p>
              <span className="text-grey">Email: </span> {user?.email}
            </p>
            <hr />
            <p>
              <span className="text-grey">Phone:</span> {user?.phone} /{" "}
              <span className="text-grey">Cell:</span> {user?.cellphone}
            </p>
            <hr />
          </section>
        </Card>
      </div>
    </>
  );
};

export default Profile;
