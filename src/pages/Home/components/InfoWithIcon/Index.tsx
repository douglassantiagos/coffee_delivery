import { ReactNode } from "react"
import { InfoContainer } from "./styled"

interface InfoWithIconProps {
  icon: ReactNode
  text: string
  iconBg: string
}

export function InfoWithIcon({ icon, text, iconBg }: InfoWithIconProps) {
  return (
    <InfoContainer iconBg={iconBg}>
      {icon}
      <span>{text}</span>
    </InfoContainer>
  )
}
