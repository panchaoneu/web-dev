import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";

const EditProfile = ()=> {
    const userProfile = useSelector((state)=>state.profile.profile);

    let [localFirstName, setFirstName]=useState(userProfile.firstName);
    let [localLastName, setLastName] = useState(userProfile.lastName);
    let [localBio, setBio] = useState(userProfile.bio);
    let [localLocation, setLocation] = useState(userProfile.location);
    let [localWebsite, setWebsite] = useState(userProfile.website);
    let [localDateOfBirth, setDateOfBirth] = useState(userProfile.dateOfBirth);

    const dispatch= useDispatch();
    // const saveEditClickHandler= () => {
    //     dispatch({
    //         type:'save-edit',
    //         firstName: firstName,
    //         lastName: lastName,
    //         bio:bio,
    //         location: location,
    //         website: website,
    //         dateOfBirth:dateOfBirth
    //         });
    //     dispatch({
    //         type: 'no-edit'
    //     });
    // }

    const saveEditClickHandler=()=>{
        const action={
            type:'save-edit',
            firstName: localFirstName,
            lastName: localLastName,
            bio:localBio,
            location: localLocation,
            website: localWebsite,
            dateOfBirth:localDateOfBirth
        };
        dispatch(action);
    }

    const exitEditClickHandler =() => {
        dispatch({
            type: 'exit-edit'
        });
        // dispatch({type: 'no-edit'});
    }

        return(
            <>
            <div className="d-flex">
                <Link to="/a7/twitter/profile">
                <i className="fas fa-times text-white p-3"
                   onClick={exitEditClickHandler}></i> </Link>
                <div className="text-white fw-bold ms-3 d-flex flex-grow-1 align-items-center">
                    Edit Profile
                </div>

                <Link to="/a7/twitter/profile" className="btn btn-sm bg-white text-black rounded-pill ps-3 p3-3 fw-bold"
                    onClick={saveEditClickHandler}>
                    Save
                </Link>

            </div>

                <div className="position-relative">
                        <img className=" card-image"  src={'../../../image/banner.jpg'} alt={""}/>
                        <img className="profile-image rounded-circle " src={'../../../image/jose.jpg'} alt={""}/>
                        <div className="ms-3 mt-3">
                        <form className="form-floating">
                            <input
                                className="form-control bg-black border-1 border-secondary text-white"
                                id="inputFirstName"
                                type="text"
                                placeholder="First"
                                onChange={(event)=>setFirstName(event.target.value)}
                                value={localFirstName}/>
                                <label htmlFor="inputFirstName">First Name</label>
                        </form>

                        <form className="form-floating mt-4">
                            <input
                                className="form-control bg-black border-1 border-secondary text-white"
                                id="inputLastName"
                                type="text"
                                placeholder="Last"
                                onChange={(event)=>setLastName(event.target.value)}
                                value={localLastName}/>
                                <label htmlFor="inputLastName">Last Name</label>
                        </form>

                        <form className="form-floating mt-4">
                            <textarea
                                className="form-control bg-black border-1 border-secondary text-white"
                                id="inputBio"
                                type="text"
                                placeholder="About me"
                                value = {localBio}
                                onChange = {(event)=>setBio(event.target.value)}></textarea>
                            <label htmlFor="inputBio">Bio</label>
                        </form>

                        <form className="form-floating mt-4">
                            <input
                                className="form-control bg-black border-1 border-secondary text-white"
                                id="inputLocation"
                                type="text"
                                placeholder="City, ST"
                                value ={localLocation}
                                onChange={(event)=>setLocation(event.target.value)}/>
                                <label htmlFor="inputLocation">Location</label>
                        </form>

                        <form className="form-floating mt-4">
                            <input
                                className="form-control bg-black border-1 border-secondary text-white"
                                id="inputWebsite"
                                type="url"
                                placeholder="mywebsite@domain.com"
                                value={localWebsite}
                                onChange={(event)=>setWebsite(event.target.value)}/>
                                <label htmlFor="inputWebsite">Website</label>
                        </form>

                        <form className="form-floating mt-4">
                            <input
                                className="form-control bg-black border-1 border-secondary text-white"
                                id="inputDateOfBirth"
                                type="date"
                                placeholder="2000-01-01"
                                value={localDateOfBirth}
                                onChange={(event) => setDateOfBirth(event.target.value)}/>
                                <label htmlFor="inputDateOfBirth">Birth date</label>
                        </form>
                    </div>
                </div>

            </>
        )
    }


export default EditProfile;