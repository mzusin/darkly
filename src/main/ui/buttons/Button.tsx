import React, { CSSProperties } from 'react';

export enum EButtonType {
    Primary = 1,
    OutlinePrimary = 2,
    Secondary = 3,
    OutlineSecondary = 4,
}

export interface IButton {
    children?: React.ReactNode;
    classes?: string;
    style?: CSSProperties;
    type?: EButtonType;
    onClick?: Function;
}

const getButtonClasses = (type?: EButtonType) => {

    const btn = `cursor-pointer mx-2 rounded-full px-8 py-1.5 transition-colors flex items-center justify-center`;

    switch(type){

        case EButtonType.OutlinePrimary: {
            return `${ btn } border-2 border-sky-800 hover:bg-sky-800`;
        }

        case EButtonType.Secondary: {
            return `${ btn } bg-slate-600 hover:bg-slate-500`;
        }

        case EButtonType.OutlineSecondary: {
            return `${ btn } border-2 border-slate-600 hover:bg-slate-600`;
        }

        default: {
            return `${ btn } bg-sky-800 hover:bg-sky-700`;
        }
    }
};

export const Button = (props: IButton) => {
    const { children, classes, type, onClick, style } = props;

    const onClickHandler = () => {
        if(typeof onClick !== 'function') return;
        onClick();
    };

    return (
        <button
            type="button"
            onClick={ onClickHandler }
            style={ style }
            className={ `${ getButtonClasses(type) } ${ classes || '' }` }>
            { children }
        </button>
    )
};