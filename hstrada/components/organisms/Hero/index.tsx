import Button from '../../atoms/Button'

import { FaGithub, FaBehance, FaMediumM, FaLinkedinIn } from 'react-icons/fa'

export const Hero = () => {
  return (
    <div className="max-w-screen-lg h-full flex justify-center items-start flex-col mx-auto bg-hero bg-no-repeat bg-center bg-auto">
      <span className="text-gray-700 text-xl pb-1 font-light font-sans">
        Helena Strada
      </span>
      <h1 className="text-7xl leading-tight font-bold max-w-screen-lg font-sans">
        Software Engineer <br /> @ BackEnd
      </h1>
      <p className="pt-8 max-w-screen-sm text-gray-700 text-base font-light font-display leading-[2]">
        Atuo como engenheira de software e sou apaixonada por livros e
        tecnologia. Principais interesses em arquitetura de software, código
        limpo e sempre estou buscando algo para aprimorar e/ou aprender.
      </p>
      <div className="pt-8 space-x-4">
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
      </div>
    </div>
  )
}
