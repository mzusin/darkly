import React from 'react';
interface IPanel {
    children?: React.ReactNode;
    classes?: string;
    slideOnMobile?: boolean;
}
export declare const Panel: (props: IPanel) => JSX.Element;
export {};
