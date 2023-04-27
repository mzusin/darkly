# ⋆⁺｡☆ Darkly ☆｡⁺⋆
Dark React Starter Template + UI Kit.

![Darkly Preview](https://github.com/mzusin/darkly/blob/main/img/preview.png?raw=true)

## Features
- Responsive
- Written in [TypeScript](https://www.typescriptlang.org/)
- Based on [Tailwind CSS framework](https://tailwindcss.com/)
- Uses [esbuild bundler](https://esbuild.github.io/)

## Usage

1. First install the module from npm:

    ```shell
    npm i darkly
    ```

2. Then copy one of the [templates](https://github.com/mzusin/darkly/tree/main/src/main/templates).

## Components

## Bars
- Top Bar
   ```ts
   export interface ITopBar {
       children?: React.ReactNode;
       classes?: string;
   }
   ```
 
   ```tsx
   <BottomBar classes="justify-end">...</BottomBar> 
   ```
- Bottom Bar
   ```ts
   export interface IBottomBar {
       children?: React.ReactNode;
       classes?: string;
   }
   ```
  
   ```tsx
   <TopBar classes="text-center justify-center">...</TopBar>
   ```
## Boxes
- Stretch Box

   ```ts
   export interface IStretchBox {
       children?: React.ReactNode;
       classes?: string;
   }
   ```

  ```tsx
  <StretchBox classes="flex justify-center items-center p-4">...</StretchBox>
  ```
## Buttons
- Button

  ```ts
  export enum EButtonType {
      Primary = 1,
      OutlinePrimary = 2,
      Secondary = 3,
      OutlineSecondary = 4,
  }
  
  export interface IButton {
      children?: React.ReactNode;
      classes?: string;
      type?: EButtonType;
  }
  ```

  ```tsx
  <Button type={ EButtonType.OutlineSecondary }>Reset</Button>
  ```
## Dividers
- Horizontal Splitter

## Form
- Buttons Group
- Icons Radio Buttons
- Color Picker
- Numbers TextBox

## Images
- Framed Image

## Menus
- Icons Menu
- Mobile Menu

## Panels
- Panel
- Panel Section
- Panel Title

## SideBars
- SideBar













































































































































