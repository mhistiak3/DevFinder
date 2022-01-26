import { MdLocationPin, MdOutlineCodeOff } from "react-icons/md";
import { FaTwitter, FaGithub } from "react-icons/fa";
import moment from "moment";
const UserBox = ({ user }) => {
  return (
    <div className="userBox">
      {user.id ? (
        <>
          <div className="profile">
            <img src={user.avatar_url} alt="" />
            <div className="usernameOthers">
              <h2>{user.name}</h2>
              <h4>{user.login}</h4>

              <span>
                Joined on {moment(user.created_at).format("Do MMM YYYY")}
              </span>
            </div>
          </div>
          <p className="description">{user.bio}</p>
          <div className="githubInfo">
            <div>
              <span>Repos</span>
              <span className="number">{user.public_repos}</span>
            </div>
            <div>
              <span>Followers</span>
              <span className="number">{user.followers}</span>
            </div>
            <div>
              <span>Following</span>
              <span className="number">{user.following}</span>
            </div>
          </div>
          <div className="contactDetails">
            <a href="/">
              <MdLocationPin />
              {user.location ? user.location : "Not Available"}
            </a>
            <a href="/">
              <FaTwitter />
              {user.twitter_username ? user.twitter_username : "Not Available"}
            </a>
            <a href="/">
              <MdOutlineCodeOff />
              {user.blog ? user.blog : "Not Available"}
            </a>
            <a href={user.html_url}>
              <FaGithub />
              GitHub
            </a>
          </div>
        </>
      ) : (
        <h2>{user.message}</h2>
      )}
    </div>
  );
};

export default UserBox;
