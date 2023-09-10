export interface IRadioButton
  extends IRadioButtonStyle,
    IRadioButtonContainerStyle,
    IBoxRadioButtonStyle {
  type?: "default" | "box" | "round-box";
  value: string;
  onChange: (() => void) | ((e: Event) => void);
  inputLabel?: string;
  id: string;
  name: string;
}

export interface IRadioButtonStyle {
  checked: boolean;
  disabled?: boolean;
}

export interface IRadioButtonContainerStyle {
  $margin?: string;
}

export interface IBoxRadioButtonStyle extends IRadioButtonStyle {
  $width?: string;
  $height?: string;
  $borderRadius?: string;
}
