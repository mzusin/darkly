import React from 'react';
interface IPanel {
    children?: React.ReactNode;
    classes?: string;
    slideOnMobile?: boolean;
}
declare const Panel: (props: IPanel) => JSX.Element;
export default Panel;
