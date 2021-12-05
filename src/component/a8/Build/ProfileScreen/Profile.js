import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {getCurrentProfile,updateCurrentProfile} from "../../../../services/profileService";



const Profile = () => {
    const profile = useSelector(state => {
        console.log(state);
        console.log("state");
        return state.profile.profile});
    // const [localProfile, setLocalProfile] = useState(profile);

    const dispatch = useDispatch();
    useEffect(() =>getCurrentProfile(dispatch),[])

    const EditProfileClickHandler = (event) => {
        // setLocalProfile({...profile, firstName: event.target.firstName})
        //
        // }
        // const save=()=>{
        //     dispatch({type:'update-profile',
        //         profile: localProfile
        //     })
        }

        return (
            <div>
                <h3>Profile</h3>

                <img className=" card-image" src={'../../../image/banner.jpg'} alt={""}/>
                <img className="profile-image rounded-circle " src={'../../../image/jose.jpg'} alt={""}/>

                <div className="d-flex justify-content-end mt-2">
                    <Link to="/a8/twitter/editProfile">
                        <button className="btn btn-sm btn-outline-secondary rounded-pill ps-3 pe-3 text-white fw-bold"
                                onClick={EditProfileClickHandler}>
                            Edit profile
                        </button>
                    </Link>
                </div>


                <div className="text-white fw-bold">
                    {profile.firstName} {profile.lastName}
                </div>

                <div className="wd-fs-smaller wd-text-secondary-light">
                    @{profile.handle}
                </div>

                <div className="mt-2 text-white">
                    {profile.bio}
                </div>

                <div className="mt-2 wd-fs-smaller">
                <span className="">
                    <i className="fas fa-map-marker-alt text-secondary fa-fw"></i>
                    {profile.location}
                </span>

                    <span className="ms-3">
                    <i className="fa fa-lightbulb text-secondary fa-fw"></i>
                    Born {new Date(profile.dateOfBirth).toDateString()}
                </span>
                    <span className="ms-3">
                    <i className="far fa-calendar-alt text-secondary fa-fw"></i>
                    Joined {profile.dateJoined}
                </span>
                </div>
                <div className="wd-follow">
                    <span className="text-white col-3">
                    {profile.followingCount}
                </span> Following
                </div>
                <div className="wd-follow">
                    <span className="text-white col-3">
                    {profile.followerCount}
                </span> Follower
                </div>


            </div>
        );
    };

export default Profile;