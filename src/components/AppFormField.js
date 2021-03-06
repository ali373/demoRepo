import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../components/AppTextInput";
import ErrorMessage from "../components/ErrorMessage";

function AppFormField({ name, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        placeholderStyle={{alignSelf:"flex-start"}}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
