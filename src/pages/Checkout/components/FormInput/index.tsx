import { useFormContext } from "react-hook-form";

import { FormInputContainer } from "./styled";
import { Input } from "../../../../components/Input";
import { ChangeEvent } from "react";

interface FormInputProps {
  setCepFilled: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export function FormInput({ setCepFilled }: FormInputProps) {  
  const { register, formState: { errors } } = useFormContext()

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCepFilled(event.target.value)
  }

  return (          
    <FormInputContainer>
      <Input
        placeholder="CEP"
        className="cep"
        {...register("cep")}
        onChangeCapture={handleChange}
        error={errors.cep?.message}
      />

      <Input
        placeholder="Rua"
        className="rua"
        {...register("rua")}
        error={errors.rua?.message}
      />

      <Input
        placeholder="Número"
        {...register("numero")}
        error={errors.numero?.message}
      />

      <Input
        placeholder="Complemento"
        className="complemento"
        {...register("complemento")}
        error={errors.complemento?.message}
        opcionalText="Opcional"
      />

      <Input
        placeholder="Bairro"
        {...register("bairro")}
        error={errors.bairro?.message}
      />

      <Input
        placeholder="Cidade"
        {...register("cidade")}
        error={errors.cidade?.message}
      />

      <Input 
        placeholder="UF" {...register("uf")} 
        error={errors.uf?.message} 
      />            
    </FormInputContainer>
  )
}
