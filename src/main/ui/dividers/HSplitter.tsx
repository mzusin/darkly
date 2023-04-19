import React from 'react';

export interface IHSplitter {
    classes?: string;
}

export const HSplitter = (props: IHSplitter) => {

    const { classes } = props;

    return (
        <section className={ `w-full h-1.5 ${ classes || '' }` }>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                    <pattern id="svg-stripes-pattern-8711" width="100%" height="3" x="0" y="0" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
                        <rect width="100%" height="1" fill="#475669"/>
                        <rect width="100%" height="2" y="4" fill="rgba(0, 0, 0, 0)"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#svg-stripes-pattern-8711)"/>
            </svg>
        </section>
    )
};