import React from 'react'

class User extends React.Component {

    render(){
        return(
            <div>
            {[this.props.userDetails].map((userDetail) => { 
                return(
                <div>
                    <h2>{userDetail.name}
                    </h2>
                    <img src={userDetail.avatar_url} alt="user profile"/>
                    <p>GitHub Username: {userDetail.login}</p>
                    <p>Location: {userDetail.location}</p>
                    <p>Following: {userDetail.following}</p>
                    <p>Followers: {userDetail.followers}</p>
                 </div>
            )
            })}
            </div>
        )
    }
}
export default User