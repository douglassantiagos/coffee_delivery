import { CurrencyDollar } from 'phosphor-react'
import { ReactNode } from 'react'
import { InfoContainer } from './styled'

interface InfoTitleProps {
  icon: ReactNode
  title: string
  subtitle: string
}

export function InfoTitle({ icon, title, subtitle }: InfoTitleProps) {
  return (
    <InfoContainer>
      {icon}
      <div>
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
    </InfoContainer>
  )
}
