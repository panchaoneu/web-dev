import owner from './data/profile.json';

const initialState = {
    profile: owner
};

const profile = (state = initialState,action) => {
    switch(action.type){
        case 'getCurrentProfile':
            return({
                profile: action.profile
            })
            break;
        case 'update-current-profile':
            return({
                profile: action.profile
            })

        case 'save-edit':
            return(
                {
                    profile: {
                        firstName:action.firstName,
                        lastName:action.lastName,
                        bio:action.bio,
                        location:action.location,
                        website:action.website,
                        dateOfBirth:action.dateOfBirth
                    }

                });
        case 'exit-edit':
            return(state);
        case 'no-edit':
            return(state);
        default:
            return(state);
    }
};

export default profile;