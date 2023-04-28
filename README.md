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

3. Import CSS file:

  ```tsx
  import 'darkly/dist/darkly.min.css';
  ```

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

  ```ts
  export interface IColorPicker {
      color: string;
      setColor?: Function;
      children?: React.ReactNode;
      classes?: string;
  }
  ```

  ```tsx
  <ColorPicker classes="m-4" color={ color } setColor={ setColor }>
      Color
  </ColorPicker>
  ```

- Numbers TextBox

  ```ts
  export interface INumberTextBox {
      children?: React.ReactNode;
      classes?: string;
      width?: string|number;
  
      min?: number | string;
      max?: number | string;
      step?: number | string;
      decimalPlaces?: number;
      removeRegex?: RegExp;
  
      value?: number | string;
      setValue?: Function;
  }
  ```

  ```tsx
  <NumberTextBox classes="m-4" width="100px" value={ size } setValue={ setSize }>
      Size
  </NumberTextBox>
  ```

## Images
- Framed Image

  ```ts
  export interface IFramedImage {
      children?: React.ReactNode;
      classes?: string;
      width?: string|number;
      height?: string|number;
  }
  ```

  ```tsx
  <FramedImage width={ '500px' } height={ '270px' } classes="mx-auto">...</FramedImage>
  ```

## Menus
- Vertical Icons Menu

  ```ts
  export interface IVIconsMenu {
      children?: React.ReactNode;
      classes?: string;
  }
  
  export interface IVIconsMenuButton {
    children?: React.ReactNode;
    classes?: string;
    title?: string;
    selected?: boolean;
  }
  
  export interface IVIconsMenuLogo {
    href?: string;
    children?: React.ReactNode;
    classes?: string;
    title?: string;
  }
  ```
  
  ```tsx
  <VIconsMenu>
  
      <div className="flex">
          <HamburgerButton />
  
          <VIconsMenuLogo href="/">
              <svg>...</svg>
          </VIconsMenuLogo>
      </div>
  
      <HSplitter classes="mb-4" />
  
      <VIconsMenuButton title="Image Size" selected={ true }>
        <svg>...</svg>
      </VIconsMenuButton>
    
      ...
  
  </VIconsMenu>
  ```

- Mobile Menu

  ```ts
  export interface ICloseMobileMenuButton {
      classes?: string;
  }
  
  export interface IHamburgerButton {
    classes?: string;
  }
  ```

## Panels

- Panel

  ```ts
  export interface IPanel {
      children?: React.ReactNode;
      classes?: string;
      slideOnMobile?: boolean;
  }
  
  export interface IPanelTitle {
    classes?: string;
    children?: React.ReactNode;
  }
  ```

  ```tsx
  <Panel slideOnMobile={ true }>
      <PanelTitle>
          Stripes
          <CloseMobileMenuButton />
      </PanelTitle>
      <HSplitter />
  
      ...
  </Panel>
  ```
  
## SideBars
- SideBar

  ```ts
  export interface ISideBar {
      children?: React.ReactNode;
      classes?: string;
  }
  ```
  
  ```tsx
  <SideBar>...</SideBar>
  ```













































































































































