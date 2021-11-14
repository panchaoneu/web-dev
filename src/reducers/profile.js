import owner from './data/profile.json';

const initialState = {
    profile: owner
};

const profile = (state = initialState,action) => {
    switch(action.type){
        case 'update-profile':
            return(
                {
                    profile: action.profile,
                    firstName:action.firstName,
                    lastName:action.lastName,
                    bio:action.bio,
                    location:action.website,
                    dateOfBirth:action.dateOfBirth
                });
        case 'exit-edit':
            return(state);
        default:
            return(state);
    }
};



export default profile;