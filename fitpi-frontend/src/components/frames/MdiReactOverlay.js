import React from 'react';

const style = {
    color: 'white',
    opacity: '.3',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

const MdiReactOverlay = ({icon}) => (
    <div style={style}>
        {icon}
    </div>
);

export default MdiReactOverlay;
