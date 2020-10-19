import React from 'react';
import PropTypes from 'prop-types';
import './SidebarOption.css'
const SidebarOption = ({optionText,Icon}) => {
    return (
        <div className="sidebarOption" >
            {Icon&&<Icon className="sidebarOption__icon"/>}
            {Icon?<h4>{optionText}</h4>:<p>{optionText}</p>}
        </div>
    );
};

SidebarOption.propTypes = {
    optionText: PropTypes.string.isRequired
};

export default SidebarOption;