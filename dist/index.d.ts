declare module 'darkly' {
    /// <reference types="react" />

    export interface IBottomBar {
        children?: React.ReactNode;
        classes?: string;
    }
    export const BottomBar: (props: IBottomBar) => JSX.Element;

    export interface ITopBar {
        children?: React.ReactNode;
        classes?: string;
    }
    export const TopBar: (props: ITopBar) => JSX.Element;

    export interface IStretchBox {
        children?: React.ReactNode;
        classes?: string;
    }
    export const StretchBox: (props: IStretchBox) => JSX.Element;

    export enum EButtonType {
        Primary = 1,
        OutlinePrimary = 2,
        Secondary = 3,
        OutlineSecondary = 4
    }
    export interface IButton {
        children?: React.ReactNode;
        classes?: string;
        type?: EButtonType;
    }
    export const Button: (props: IButton) => JSX.Element;

    export interface IHSplitter {
        classes?: string;
    }
    export const HSplitter: (props: IHSplitter) => JSX.Element;

    export interface IButtonsGroup {
        children?: React.ReactNode;
        classes?: string;
    }
    export const ButtonsGroup: (props: IButtonsGroup) => JSX.Element;

    export interface IButtonsGroupButton {
        children?: React.ReactNode;
        classes?: string;
        title?: string;
        selected?: boolean;
        onClick?: Function;
    }
    export const ButtonsGroupButton: (props: IButtonsGroupButton) => JSX.Element;

    export interface IIconRadioButton {
        groupName: string;
        children?: React.ReactNode;
        classes?: string;
        title?: string;
        checked?: boolean;
        onChange?: Function;
    }
    export const IconRadioButton: (props: IIconRadioButton) => JSX.Element;

    export interface IIconRadioButtonGroup {
        children?: React.ReactNode;
        classes?: string;
    }
    export const IconRadioButtonGroup: (props: IIconRadioButtonGroup) => JSX.Element;

    export interface IColorPicker {
        color: string;
        setColor?: Function;
        children?: React.ReactNode;
        classes?: string;
    }
    export const ColorPicker: (props: IColorPicker) => JSX.Element;

    export interface INumberTextBox {
        children?: React.ReactNode;
        classes?: string;
        width?: string | number;
        min?: number | string;
        max?: number | string;
        step?: number | string;
        decimalPlaces?: number;
        removeRegex?: RegExp;
        value?: number | string;
        setValue?: Function;
    }
    export const NumberTextBox: (props: INumberTextBox) => JSX.Element;

    export interface IFramedImage {
        children?: React.ReactNode;
        classes?: string;
        width?: string | number;
        height?: string | number;
    }
    export const FramedImage: (props: IFramedImage) => JSX.Element;

    export interface IVIconsMenu {
        children?: React.ReactNode;
        classes?: string;
    }
    export const VIconsMenu: (props: IVIconsMenu) => JSX.Element;

    export interface IVIconsMenuButton {
        children?: React.ReactNode;
        classes?: string;
        title?: string;
        selected?: boolean;
    }
    export const VIconsMenuButton: (props: IVIconsMenuButton) => JSX.Element;

    export interface IVIconsMenuLogo {
        href?: string;
        children?: React.ReactNode;
        classes?: string;
        title?: string;
    }
    export const VIconsMenuLogo: (props: IVIconsMenuLogo) => JSX.Element;

    export interface ICloseMobileMenuButton {
        classes?: string;
    }
    export const CloseMobileMenuButton: (props: ICloseMobileMenuButton) => JSX.Element;

    export interface IHamburgerButton {
        classes?: string;
    }
    export const HamburgerButton: (props: IHamburgerButton) => JSX.Element;

    export interface IPanel {
        children?: React.ReactNode;
        classes?: string;
        slideOnMobile?: boolean;
    }
    export const Panel: (props: IPanel) => JSX.Element;

    export const PanelSection: () => JSX.Element;

    export interface IPanelTitle {
        classes?: string;
        children?: React.ReactNode;
    }
    export const PanelTitle: (props: IPanelTitle) => JSX.Element;

    export interface ISideBar {
        children?: React.ReactNode;
        classes?: string;
    }

    export const SideBar: (props: ISideBar) => JSX.Element;
}