import { Controller } from "react-hook-form";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "../css/InputDate.css";
import Box from "@mui/material/Box";

export default function InputDate(props) {
  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1, width: "100%" },
      }}
    >
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Controller
          name={props.nombreCampo}
          control={props.control}
          render={({ field: { ref, ...restField } }) => (
            <DatePicker
              disableFuture
              className={"inputDate"}
              {...restField}
              slotProps={{
                textField: {
                  error: props.error,
                  helperText: props.helperText,
                },
              }}
            />
          )}
        />
      </LocalizationProvider>
    </Box>
  );
}