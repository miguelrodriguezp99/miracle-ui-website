type Props = {
  title: string[];
};

const ContentAside = ({ title }: Props) => {
  return (
    <div className="hidden bg-red-100 text-sm xl:block top-0 left-0 h-fit text-pblack dark:text-pwhite">
      <div className="fixed">
        <p>On this page</p>
        <div className="flex flex-col">
          {title.map((item, index) => (
            <a
              href={`#${item}`}
              key={index}
              className="pt-2 text-pblack/60 hover:text-pblack dark:text-pwhite/60 dark:hover:text-pwhite cursor-pointer transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentAside;
