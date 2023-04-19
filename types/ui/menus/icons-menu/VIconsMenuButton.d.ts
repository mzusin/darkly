import React from 'react';
export interface IVIconsMenuButton {
    children?: React.ReactNode;
    classes?: string;
    title?: string;
    selected?: boolean;
}
export declare const VIconsMenuButton: (props: IVIconsMenuButton) => JSX.Element;
