import React from 'react';
import { closeMobileMenu } from '../../../domain/mobile-menu-provider';

export interface ICloseMobileMenuButton {
    classes?: string;
}

export const CloseMobileMenuButton = (props: ICloseMobileMenuButton) => {

    const { classes } = props;

    return (
        <button
            type="button"
            onClick={ closeMobileMenu }
            className={ `xl:hidden absolute right-3 top-3 cursor-pointer ${ classes || '' }` }>

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                 viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round"
                 strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M18 6l-12 12"></path>
                <path d="M6 6l12 12"></path>
            </svg>
        </button>
    )
};