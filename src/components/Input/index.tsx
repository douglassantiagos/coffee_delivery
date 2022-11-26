import { forwardRef, InputHTMLAttributes } from "react";
import { InputContainer, InputContent, InputStyle, OpcionalText, WarningText } from "./styled";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  opcionalText?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, opcionalText, className, ...rest }, ref) => {
    return (
      <InputContainer className={className}>
        <InputContent hasError={!!error}>
          <InputStyle ref={ref} {...rest} />
          {opcionalText && <OpcionalText>{opcionalText}</OpcionalText>}
        </InputContent>        
        {error && <WarningText>{error}</WarningText>}
      </InputContainer>
    )
  }
) 
