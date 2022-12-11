import React from 'react'
import {useParams} from 'react-router-dom';

function Profile() {
    const params = useParams();
    return (
        <div>Profile : {params.id} params: {params.name}</div>
    )
}

export default Profile