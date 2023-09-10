import React, { useState } from "react";
import RadioButton from "~/components/RadioButton/_index";

const RadioTest = () => {
  const [checked, setChecked] = useState<boolean[]>(new Array(5).fill(false));

  const handleChecked = (index: number) => {
    const newArray = new Array(5).fill(false);
    newArray[index] = true;
    setChecked(newArray);
  };

  const makeRadioButtons = () => {
    return checked.map((c: boolean, index: number) => {
      return (
        <RadioButton
          key={index}
          type="round-box"
          checked={c}
          id={`${index}`}
          name={`check test`}
          onChange={() => handleChecked(index)}
          value={`${index}`}
          inputLabel={`테스트 ${index}`}
        />
      );
    });
  };

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.8",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Radio Button Test</h2>
      <div
        style={{
          background: "yellow",
          display: "flex",
          width: "800px",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          gap: "16px",
          padding: "16px",
        }}
      >
        {makeRadioButtons()}
      </div>
    </div>
  );
};

export default RadioTest;
