import CardOptionButtons from "./CardOptionButtons";

interface ItemButton {
  title: string;
  content: string;
  icon?: JSX.Element
}

interface CardProps {
  titlePage: string;
  itemButtons: ItemButton[];
}

export default function Card({ titlePage, itemButtons }: CardProps) {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {titlePage}
        </h5>
      </a>
      <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      {itemButtons.length > 0 ? (
          itemButtons.map(({ title, content, icon }) => (
            <CardOptionButtons key={title} title={title} content={content} icon={icon} />
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400">&nbsp;Sin opciones que mostrar</p>
        )}
      </div>
    </div>
  );
}
