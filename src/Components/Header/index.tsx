
import { X } from '@phosphor-icons/react'
import avatarImg from '../../assets/avatarImg.svg'
import { AvatarName, AvatarStatus, FooterHeader, HeaderContainer, HeaderContent } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <nav>
          <img src={avatarImg} alt="" />
         <p>
         <AvatarName> Cecilia Sassaki</AvatarName>
          <AvatarStatus>Online</AvatarStatus>
         </p>
        </nav>
        <X />
      </HeaderContent>
      <FooterHeader>Hoje 11:30</FooterHeader>
    </HeaderContainer>
  )
}