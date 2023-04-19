import React from 'react';

interface INumberTextBox {
    children?: React.ReactNode;
    classes?: string;
    width?: string|number;
}

export const NumberTextBox = (props: INumberTextBox) => {
    const { children, classes, width } = props;

    const style = {
        width,
    };

    return (
        <section className={ `flex items-center justify-between ${ classes || '' }` } >
            <div>
                { children }
            </div>
            <div>
                <input
                    style={ style }
                    type="text"
                    className="bg-slate-900 transition border-2 border-slate-700 hover:border-slate-600 focus:border-slate-600 active:border-slate-600 outline-none rounded px-2 py-1 text-sm"
                />
            </div>
        </section>
    )
};