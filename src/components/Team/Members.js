import React from 'react';
import { Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';


function Members({ member, darkMode }) {
    return (
        <div>
                <Image src={member.img} centered/>
                <h4 style={{
               color: darkMode ? "#ffffff" : "#474646",
               textAlign: 'center' 
            }}>
                {member.name}
            </h4>
            <p style={{
               color: darkMode ? "#ffffff" : "#474646",
               textAlign: 'center'
               
            }}
               >
                   {member.title}
            </p>     
        </div>
    )
}

Members.propTypes = {
    teamMembers: PropTypes.object.isRequired,
    darkMode: PropTypes.bool
};

export default Members
