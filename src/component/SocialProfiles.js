import React from "react";
import SOCIAL_PROFILES from "../data/socialProfiles";


const SocialProfile = (props) => {
    const {link,image } = props.SocialProfile;
		return (
             <span style ={{margin : 10}}>
			    <a href = {link}>
				  <img src={image} alt="Social Connections" style ={{width:35, height:35}} />
				</a>
			 </span>
		)
}

const SocialProfiles = () => {
		 return(
			 <div>
			    <h3>Connect me!</h3>
				<div>
				 {
					 SOCIAL_PROFILES.map((SOCIAL_PROFILE)=>{
                         return (
							 <SocialProfile key ={SOCIAL_PROFILE.id} SocialProfile ={SOCIAL_PROFILE} />
						 )
					 })
				 }
				</div>
			 </div>
		 )
}

export default SocialProfiles;

