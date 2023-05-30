import { SocialMedia } from 'components/molecules/SocialMedia';
import Image from 'next/image';
import { Profile } from '../Profile';

export const Footer = () => {
  return (
    <footer className="px-6 pb-6 mt-48 flex flex-row items-end justify-between">
      <div>
        <Profile />
      </div>

      <div className="space-x-4">
        <SocialMedia />
      </div>
    </footer>
  );
};
