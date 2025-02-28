import React from "react";
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";

function CustomRadioButtons({ options, selectedValue, onChange }) {
  return (
    <FormControl component="fieldset">
      <RadioGroup value={selectedValue} onChange={onChange}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio sx={{ color: "blue", "&.Mui-checked": { color: "blue" } }} />}
            label={<span style={{ fontSize: "18px", fontWeight: "bold" }}>{option.label}</span>}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default CustomRadioButtons;
