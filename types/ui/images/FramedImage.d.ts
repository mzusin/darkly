import React from 'react';
export interface IFramedImage {
    children?: React.ReactNode;
    classes?: string;
    width?: string | number;
    height?: string | number;
}
export declare const FramedImage: (props: IFramedImage) => JSX.Element;
