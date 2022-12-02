import { forwardRef, InputHTMLAttributes } from "react";
import { ValidationValue } from "react-hook-form";
import { InputContainer, InputContent, InputStyle, OpcionalText, WarningText } from "./styled";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  opcionalText?: string;
  value?: string
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, value, opcionalText, className, ...rest }, ref) => {
    return (
      <InputContainer className={className}>
        <InputContent hasError={!!error}>
          <InputStyle ref={ref} value={value} {...rest} />
          {opcionalText && <OpcionalText>{opcionalText}</OpcionalText>}
        </InputContent>        
        {error && <WarningText>{error}</WarningText>}
      </InputContainer>
    )
  }
) 
