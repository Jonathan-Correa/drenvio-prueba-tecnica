import "./ProfilePicture.css";

type Props = {
  url: string;
};

const ProfilePicture = ({ url }: Props) => {
  return <img className="profile-picture" src={url} alt="Profile" />;
};

export default ProfilePicture;
