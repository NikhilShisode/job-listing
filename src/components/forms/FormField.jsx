import React from "react";
import { useFormikContext } from "formik";

import TextField from "@material-ui/core/TextField";

function AppFormField({ name, width, ...otherProps }) {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();

  return (
    <>
      <TextField
        label={name}
        error={touched[name] && errors[name] ? true : false}
        helperText={touched[name] && errors[name]}
        onBlur={() => setFieldTouched(name)}
        fullWidth
        margin="normal"
        onChange={(e) => setFieldValue(name, e.target.value)}
        value={values[name]}
        name={name}
        {...otherProps}
        variant="outlined"
      />
    </>
  );
}

export default AppFormField;
