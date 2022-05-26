import Navbar from "../../header/navbar/Navbar";
import "./UserProfile.scss";
import img from "./modal-header.png";
function UserProfile({ userInfo }) {
  return (
    <div>
      <Navbar />
      <div className="userProfile-container">
        <div className="userProfile-container__profile-info">
          <div className="profile-info">
            <div className="profile-info__img-container">
              <div className="profile-info__img">
                <img src="https://source.unsplash.com/random" alt="" />
              </div>
              <div className="profile-degree">
                <h1>Oltin kitobxon</h1>
                <p>186 ta kitob o’qigan</p>
              </div>
            </div>
            <div className="profile-info__user-form">
              <h1>
                {userInfo.firstname} {userInfo.lastname}
              </h1>
              <h2>
                Tavallud: <p>{userInfo.phone}</p>
              </h2>
              <h2>
                Manzil: <p>{userInfo.email}</p>
              </h2>
              <h2>
                Bio: <p>Front end developer</p>
              </h2>
            </div>
          </div>
          {/* <div className="user-info-backgound">
          <img src={img} alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
