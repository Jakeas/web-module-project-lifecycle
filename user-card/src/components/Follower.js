import React from 'react'

class Follower extends React.Component {

    render(){
        return(
            <div>
            {this.props.followerDetails.map((detail) => {
               return (
               <div> 
                   <h2>{detail.login}
                   </h2> 
                    <img src={detail.avatar_url} alt="follower profile"/>
               </div>
            )
            })}
            </div>
        )
    }
}
export default Follower