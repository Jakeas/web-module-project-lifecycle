import React from 'react'

class Follower extends React.Component {

    render(){
        return(
            <div>
            {this.props.followerDetails.map((detail) => {
               return (
               <div className="followContainer"> 
                    <div className="username">
                        <h3>{detail.login}
                        </h3>
                    </div>
                    <div className="imgContainer">
                        <img width="300px" src={detail.avatar_url} alt="follower profile"/>
                    </div>
               </div>
            )
            })}
            </div>
        )
    }
}
export default Follower