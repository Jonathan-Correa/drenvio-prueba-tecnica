import Header from "../../components/Layout/Header/Header";
import Card from "../../components/Card/Card";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";

import "./Profile.css";

const Profile = () => {
  return (
    <>
      <Header />
      <div className="profile-card-container">
        <Card>
          <section className="profile-picture-container">
            <ProfilePicture />
          </section>
          <section className="user-info">
            <h1 className="user-name">Jonathan Correa</h1>
            <p className="username text-grey">@orangeladybug242</p>
            <h6>City, State, Country</h6>
            <button className="user-follow-button">Follow</button>
          </section>
        </Card>
        <Card className="user-detailed-info">
          <p className="user-name fullname">Dr. Jonathan Correa</p>
          <section>
            <p>
              <span className="text-grey">Birth Date:</span> 18-09-2001 /
              <span className="text-grey"> Joined:</span> 08-03-2023
            </p>
            <p>City, State, Country / jdcorrea918@gmail.com</p>
            <p><span className="text-grey">Phone:</span> (446)-419-2918</p>
            <p><span className="text-grey">Cell:</span> (936)-634-1630</p>
          </section>

          {/* <UserInfoLine title="Email" text="ahmet.karadas@example.com" />
          <UserInfoLine title="Gender" text="Male" />
          <UserInfoLine title="Phone" text="(446)-419-2918" />
          <UserInfoLine title="Cell" text="(936)-634-1630" />
          <UserInfoLine title="Age" text="73" /> */}
        </Card>
      </div>
    </>
  );
};

export default Profile;
