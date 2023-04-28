import React, { CSSProperties } from 'react';

export interface IButtonsGroupButton {
    children?: React.ReactNode;
    classes?: string;
    style?: CSSProperties;
    title?: string;
    selected?: boolean;
    onClick?: Function;
}

export const ButtonsGroupButton = (props: IButtonsGroupButton) => {
    const { children, classes, title, selected, onClick, style } = props;

    const selectedClasses = selected ? 'bg-sky-800' : 'bg-slate-900';

    return (
        <button
            type="button"
            title={ title }
            style={ style }
            onClick={ () => {
                if(typeof onClick !== 'function') return;
                onClick();
            }}
            className={ `flex justify-center items-center w-16 h-12 cursor-pointer transition-colors rounded ${ selectedClasses } ${ classes || '' }` } >
            { children }
        </button>
    )
};