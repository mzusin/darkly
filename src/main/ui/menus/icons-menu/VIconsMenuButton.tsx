import React from 'react';

export interface IVIconsMenuButton {
    children?: React.ReactNode;
    classes?: string;
    title?: string;
    selected?: boolean;
}

export const VIconsMenuButton = (props: IVIconsMenuButton) => {
    const { children, classes, title, selected } = props;

    return (
        <button
            type="button"
            title={ title }
            className={ `cursor-pointer p-4 mb-1 transition-colors hover:bg-slate-900 rounded ${ selected ? 'bg-slate-900' : '' } ${ classes || '' }` }>
            { children }
        </button>
    )
};
