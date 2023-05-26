import { Profile } from 'components/organisms/Profile';

export const PostHeader = () => {
  return (
    <header className="px-6">
      <div className="max-w-screen-lg mx-auto mt-8 flex flex-row justify-between">
        <Profile />
        <h3 className="font-sans">foco, persistência e consistência.</h3>
      </div>
    </header>
  );
};
