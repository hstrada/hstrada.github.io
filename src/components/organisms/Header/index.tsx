import { FaGlobeAmericas } from 'react-icons/fa';
import { useTranslation } from '../../../core/hooks/useTranslate';
import { Profile } from '../Profile';

export const Header = () => {
  const { changeCountry } = useTranslation();
  return (
    <header className="px-6 pt-6 flex flex-row justify-between">
      <Profile />
      <div className="flex flex-row space-x-4">
        <a onClick={changeCountry}>
          <FaGlobeAmericas />
        </a>
      </div>
    </header>
  );
};
