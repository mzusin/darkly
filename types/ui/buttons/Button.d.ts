import React from 'react';
export declare enum EButtonType {
    Primary = 1,
    OutlinePrimary = 2,
    Secondary = 3,
    OutlineSecondary = 4
}
interface IButton {
    children?: React.ReactNode;
    classes?: string;
    type?: EButtonType;
}
export declare const Button: (props: IButton) => JSX.Element;
export {};
