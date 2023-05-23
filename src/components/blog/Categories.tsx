export const Categories = ({ categories }: { categories: string[] }) => {
  return (
    <>
      {categories.map((category) => (
        <li className="mr-2" key={category}>
          <a
            href="#"
            className="inline-block text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm font-medium text-center dark:text-gray-400  dark:hover:bg-gray-800 dark:hover:text-gray-300"
          >
            {category}
          </a>
        </li>
      ))}
    </>
  );
};
