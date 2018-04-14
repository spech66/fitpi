import React from 'react';
import MdiReactOverlay from './MdiReactOverlay';

const defaultBackgroundColour = '#666';
const defaultForegroundColour = '#fff';

const themeTomorrowNight = {
    'background': '#1d1f21',
    'foreground': '#c5c8c6',
    'red': '#cc6666',
    'orange': '#de935f',
    'yellow': '#f0c674',
    'green': '#b5bd68',
    'aqua': '#8abeb7',
    'blue': '#81a2be',
    'purple': '#b294bb',
    
    'invisible': '#00000000',
};

const style = {
    card: {
        minHeight: '200px',
        fontWeight: '600',
    },
    children: {
        zIndex: '10'
    }
};

const backgroundColour = (theme, colour) => theme[colour] || colour || defaultBackgroundColour;
const foregroundColour = (theme, colour) => theme[colour] || colour || defaultForegroundColour;

const SmashingFrame = ({children, settings}) => {
    let cardStyle = Object.assign({}, style.card, {
        backgroundColor: backgroundColour(themeTomorrowNight, settings.colour),
        color: foregroundColour(themeTomorrowNight, settings.foreground),
    });

    return (
        <div className={settings.colour !== 'invisible' ? 'card rounded-0' : 'card rounded-0 border-0'} style={cardStyle}>
            <div style={style.children}>{children}</div>
            {settings.icon ? <MdiReactOverlay icon={settings.icon} /> : null}
        </div>
    );
};

export default SmashingFrame;
