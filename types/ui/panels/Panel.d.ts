import React from 'react';
export interface IPanel {
    children?: React.ReactNode;
    classes?: string;
    slideOnMobile?: boolean;
}
export declare const Panel: (props: IPanel) => JSX.Element;
