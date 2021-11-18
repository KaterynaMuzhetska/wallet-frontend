import { Button } from "@material-ui/core";
import { useFormikContext } from "formik";
import "./styles.js";

const ButtonWrapper = ({ children, ...otherProps }) => {
  const { submitForm } = useFormikContext();
  const handleSubmit = () => {
    submitForm();
  };

  const configButton = {
    variant: "contained",
    color: "primary",
    fullWidth: true,
    onClick: handleSubmit,
  };

  return (
    <Button {...configButton} {...otherProps}>
      {children}
    </Button>
  );
};

export default ButtonWrapper;
