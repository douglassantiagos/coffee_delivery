import { forwardRef, InputHTMLAttributes, ReactNode } from "react"
import { ContentLabel, PaymentContainer } from "./styled"

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

export const PaymentMethodInput = forwardRef<HTMLInputElement, PaymentMethodInputProps>(
  ({ icon, label, id, ...rest }, ref) => {
    return (
      <PaymentContainer>
        <input id={id} type="radio" name="paymentMethod" ref={ref} {...rest} />
        <label htmlFor={id}>
          <ContentLabel>
            {icon}
            {label}
          </ContentLabel>
        </label> 
      </PaymentContainer>
    )
  }
) 

