import Button from 'components/atoms/Button'
import { FaBehance, FaGithub, FaLinkedinIn, FaMediumM } from 'react-icons/fa'

export const SocialMedia = () => {
  return (
    <>
      <Button.Solid>
        <FaGithub />
      </Button.Solid>
      <Button.Outline>
        <FaLinkedinIn />
      </Button.Outline>
      <Button.Outline>
        <FaBehance />
      </Button.Outline>
      <Button.Outline>
        <FaMediumM />
      </Button.Outline>
    </>
  )
}
