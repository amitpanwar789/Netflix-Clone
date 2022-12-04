import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import Navbar from "../HomeScreen/Navbar";
import "./ProfileScreen.css";
import { auth } from "../../firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Navbar></Navbar>
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="nav__avatar"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <h3>Plans (Current Plan: premiun)</h3>
            <div className="profileScreen__planDetails">
              <p>Renewal date: 04/03/2023</p>
              <div>
                <div className="plan">
                  <div>
                    <h4>Netflix Standard </h4> <h6>1080p</h6>
                  </div>
                  <button>Subscibe</button>
                </div>
                <div className="plan">
                  <div>
                    <h4>Netflix Basic</h4>
                    <h6>720p</h6>
                  </div>
                  <button>Subscibe</button>
                </div>
                <div  className="plan">
                  <div>
                    <h4>Netflix Premium</h4>
                    <h6>4K + HDR</h6>
                  </div>
                  <button id="curPlan" className="curPlan">Current Package</button>
                </div>
              </div>
            </div>
            <div className="profileScreen_plans">
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signout"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
