import React, { useEffect } from 'react';
import { closeMobileMenu, toggleMobileMenu } from '../../../domain/mobile-menu-provider';

interface IHamburgerButton {
    classes?: string;
}

export const HamburgerButton = (props: IHamburgerButton) => {
    const { classes } = props;

    useEffect(() => {
        document.addEventListener('click', closeMobileMenu);

        return () => {
            document.removeEventListener('click', closeMobileMenu);
        };
    }, []);

    return (
        <button
            type="button"
            onClick={ toggleMobileMenu }
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