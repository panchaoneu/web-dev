import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";

const EditProfile = ()=> {
    const userProfile = useSelector((state)=>state.profile.profile);

    const [firstName, setFirstName]=useState(userProfile.firstName);
    const [lastName, setLastName] = useState(userProfile.lastName);
    const [bio, setBio] = useState(userProfile.bio);
    const [location, setLocation] = useState(userProfile.location);
    const [website, setWebsite] = useState(userProfile.website);
    const [dateOfBirth, setDateOfBirth] = useState(userProfile.dateOfBirth);


    const dispatch= useDispatch();
    const SaveEditClickHandler= () => {
        dispatch({
            type:'save-edit',
            firstName: firstName,
            lastName: lastName,
            bio:bio,
            location: location,
            website: website,
            dateOfBirth:dateOfBirth
            }
        );
        dispatch({
            type: 'no-edit'
        });
    }

    const ExitEditClickHandler =() => {
        dispatch({
            type: 'exit-edit'
        });
        dispatch({type: 'no-edit'});
    }

        return(
            <>
            <div className="d-flex">
                <i className="fas fa-times text-white p-3" onClick={ExitEditClickHandler}></i>
                <div className="text-white fw-bold ms-3 d-flex flex-grow-1 align-items-center">
                    Edit Profile
                </div>
                <button className="fas fa-times text-white p-3">
                    onClick={SaveEditClickHandler}
                    Save
                </button>
            </div>

                <div className="position-relative">
                    <img className="rounded-circle ms-3" src="../../../../../public/image/jose.JPG"/>
                    <div className="ms-3 mt-3">
                        <form className="form-floating">
                            <input
                                className="form-control bg-black border-1 border-secondary text-white"
                                id="inputFirstName"
                                type="text"
                                placeholder="First"
                                value={firstName}
                                onChange={(event)=>setFirstName(event.target.value)}/>
                                <label htmlFor="inputFirstName">First Name</label>
                        </form>

                        <form className="form-floating mt-4">
                            <input
                                className="form-control bg-black border-1 border-secondary text-white"
                                id="inputLastName"
                                type="text"
                                placeholder="Last"
                                value={lastName}
                                onChange={(event)=>setLastName(event.target.value)}/>
                                <label htmlFor="inputLastName">Last Name</label>
                        </form>

                        <form className="form-floating mt-4">
                            <textarea
                                className="form-control bg-black border-1 border-secondary text-white"
                                id="inputBio"
                                type="text"
                                placeholder="About me"
                                value = {bio}
                                onChange = {(event)=>setBio(event.target.value)}></textarea>
                            <label htmlFor="inputBio">Bio</label>
                        </form>

                        <form className="form-floating mt-4">
                            <input
                                className="form-control bg-black border-1 border-secondary text-white"
                                id="inputLocation"
                                type="text"
                                placeholder="City, ST"
                                value ={location}
                                onChange={(event)=>setLocation(event.target.value)}/>
                                <label htmlFor="inputLocation">Location</label>
                        </form>

                        <form className="form-floating mt-4">
                            <input
                                className="form-control bg-black border-1 border-secondary text-white"
                                id="inputWebsite"
                                type="url"
                                placeholder="mywebsite@domain.com"
                                value={website}
                                onChange={(event)=>setWebsite(event.target.value)}/>
                                <label htmlFor="inputWebsite">Website</label>
                        </form>

                        <form className="form-floating mt-4">
                            <input
                                className="form-control bg-black border-1 border-secondary text-white"
                                id="inputDateOfBirth"
                                type="date"
                                placeholder="01/01/2000"
                                value={dateOfBirth}
                                onChange={(event) => setDateOfBirth(event.target.value)}/>
                                <label htmlFor="inputDateOfBirth">Birth date</label>
                        </form>
                    </div>
                </div>

            </>
        )
    }


export default EditProfile;