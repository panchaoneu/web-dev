const PROFILE_API = 'http://localhost:4000/api/profile';

export const getCurrentProfile=(dispatch)=>
    fetch(PROFILE_API)
         .then(response=>response.json())
         .then(profile=>
               dispatch({
                       type:'get-current-profile',
                       profile
    }));

export const updateCurrentProfile=(dispatch,profile)=>
{
    console.log(profile);
    console.log("high");
    return fetch(PROFILE_API, {
    method:'PUT',
    body: JSON.stringify(profile),
    headers: {
        'content-type': 'application/json'
    }

    })
        .then(response=>response.json())
        .then(profile=>
            dispatch({
                type:'update-current-profile',
                profile
            })
);}