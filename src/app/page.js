import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function RowRadioButtonsGroup() {
  return (
    <>
      <div className="w-96">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        reiciendis, repudiandae harum soluta, voluptatibus eligendi sapiente
        sunt dolores, qui rem a consectetur asperiores. Excepturi ipsam nisi
        dolorum ex, iure quae?
      </div>

      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <div>so be it! No hubo Remedio 어쩔 도리가 없어</div>

      <FormControl className="p-10">
        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="other"
          />
        </RadioGroup>
      </FormControl>
    </>
  );
}
