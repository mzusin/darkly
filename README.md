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

  ```ts
  export interface IHSplitter {
      classes?: string;
  }
  ```
  
  ```tsx
  <HSplitter classes="mb-4" />
  ```

## Form
- Buttons Group

  ```ts
  export interface IButtonsGroup {
      children?: React.ReactNode;
      classes?: string;
  }

  export interface IButtonsGroupButton {
      children?: React.ReactNode;
      classes?: string;
      title?: string;
      selected?: boolean;
      onClick?: Function;
  }
  ```

  ```tsx
  <ButtonsGroup>
      <ButtonsGroupButton selected={ myValue === 0 } onClick={ () => {
          setMyValue(0);
      }}>My Value 1</ButtonsGroupButton>
  
      <ButtonsGroupButton selected={ myValue === 1 } onClick={ () => {
          setMyValue(1);
      }}>My Value 2</ButtonsGroupButton>
  
      <ButtonsGroupButton selected={ myValue === 2 } onClick={ () => {
          setMyValue(2);
      }}>My Value 3</ButtonsGroupButton>
  </ButtonsGroup>
  ```  

- Icons Radio Buttons

  ```ts
  export interface IIconRadioButtonGroup {
      children?: React.ReactNode;
      classes?: string;
  }
  
  export interface IIconRadioButton {
    groupName: string;
    children?: React.ReactNode;
    classes?: string;
    title?: string;
    checked?: boolean;
    onChange?: Function;
  }
  ```

  ```tsx
  <IconRadioButtonGroup>
      <IconRadioButton
          groupName="my-group"
          title="My Title 1"
          checked={ myValue === 0 }
          onChange={ () => {
              setValue(0);
          }}>
          My Radio 1
      </IconRadioButton>
  
      <IconRadioButton
          groupName="my-group"
          title="My Title 2"
          checked={ myValue === 1 }
          onChange={ () => {
            setValue(1);
          }}>
        My Radio 2
      </IconRadioButton>
  
  </IconRadioButtonGroup>
  ```
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













































































































































