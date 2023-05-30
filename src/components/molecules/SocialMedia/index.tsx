import Button from 'components/atoms/Button';
import {
  FaBehance,
  FaGithub,
  FaLinkedinIn,
  FaMediumM,
  FaMicrosoft
} from 'react-icons/fa';

export const SocialMedia = () => {
  return (
    <>
      <Button.Solid url="https://github.com/hstrada">
        <FaGithub />
      </Button.Solid>
      <Button.Outline url="https://www.linkedin.com/in/helenastrada/">
        <FaLinkedinIn />
      </Button.Outline>
      <Button.Outline url="https://www.behance.net/helenastrada">
        <FaBehance />
      </Button.Outline>
      <Button.Outline url="https://hstrada.medium.com/">
        <FaMediumM />
      </Button.Outline>
      <Button.Outline url="/blog">
        <FaMicrosoft />
      </Button.Outline>
    </>
  );
};
