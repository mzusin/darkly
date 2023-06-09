import React, { CSSProperties } from 'react';

export interface IVIconsMenuButton {
    children?: React.ReactNode;
    classes?: string;
    style?: CSSProperties;
    title?: string;
    selected?: boolean;
    onClick?: Function;
}

export const VIconsMenuButton = (props: IVIconsMenuButton) => {
    const { children, classes, title, selected, onClick, style } = props;

    const onClickHandler = () => {
        if(typeof onClick !== 'function') return;
        onClick();
    };

    return (
        <button
            type="button"
            title={ title }
            onClick={ onClickHandler }
            style={ style }
            className={ `cursor-pointer p-4 mb-1 transition-colors hover:bg-slate-900 rounded ${ selected ? 'bg-slate-900' : '' } ${ classes || '' }` }>
            { children }
        </button>
    )
};
