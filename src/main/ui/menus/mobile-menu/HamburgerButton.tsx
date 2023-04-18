import React from 'react';

interface IHamburgerButton {
    classes?: string;
}

const HamburgerButton = (props: IHamburgerButton) => {
    const { classes } = props;

    return (
        <button
            type="button"
            className={ `block xl:hidden justify-center items-center w-full px-4 py-3 ${ classes || '' }` }>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round"
                 strokeLinejoin="round" strokeWidth="1.5"
                 width="24" height="24"
                 viewBox="0 0 24 24">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <path d="M4 6h16M4 12h16M4 18h16"/>
            </svg>

        </button>
    )
};

export default HamburgerButton;