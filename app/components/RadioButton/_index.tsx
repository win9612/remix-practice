import {
  SBoxRadioButton,
  SRadioButton,
  SRadioButtonContainer,
  SRadioButtonLabel,
} from "./RadioButton.styled";
import type { IRadioButton } from "./RadioButton.type";
import {
  useEffect,
  type ChangeEventHandler,
  type MouseEventHandler,
} from "react";

/**
 * 라디오 버튼
 * @param type "default" | "box" (option)
 * @param checked 체크 여부
 * @param id
 * @param name
 * @param onChange 클릭 이벤트
 * @param value
 * @param disabled 비활성화 여부 (option)
 * @param inputLabel 체크박스 이름 (option)
 * @param $margin (option)
 * @param $width (option, only type="box")
 * @param $height (option, only type="box")
 * @returns
 */
const RadioButton = ({
  type = "default",
  checked,
  id,
  name,
  onChange,
  value,
  disabled,
  inputLabel,
  $margin,
  $width,
  $height,
}: IRadioButton) => {
  useEffect(() => {
    console.log(value + " " + checked);
  }, []);

  return (
    <SRadioButtonContainer $margin={$margin}>
      {type === "default" ? (
        <>
          <SRadioButton checked={checked} disabled={disabled}>
            <input
              type="radio"
              defaultChecked={checked}
              defaultValue={value}
              id={id}
              name={name}
              onChange={onChange as ChangeEventHandler<HTMLInputElement>}
              disabled={disabled}
            />
            <span onClick={onChange as MouseEventHandler<HTMLSpanElement>}>
              <span></span>
            </span>
          </SRadioButton>
          {inputLabel && (
            <SRadioButtonLabel checked={checked} disabled={disabled}>
              {inputLabel}
            </SRadioButtonLabel>
          )}
        </>
      ) : (
        <SBoxRadioButton
          checked={checked}
          disabled={disabled}
          $width={$width}
          $height={$height}
          $borderRadius={type === "round-box" ? "20px" : "0px"}
        >
          {inputLabel && <span>{inputLabel}</span>}
          <input
            type="radio"
            defaultChecked={checked}
            defaultValue={value}
            id={id}
            name={name}
            onChange={onChange as ChangeEventHandler<HTMLInputElement>}
            disabled={disabled}
          />
        </SBoxRadioButton>
      )}
    </SRadioButtonContainer>
  );
};

export default RadioButton;
