export default function ProjectCard({ title, index ,Link}) {
  // odd card number -> light grey, even card number -> dark grey
  const cardNumber = index + 1;
  const isOdd = cardNumber % 2 !== 0;

  const bgClass = isOdd ? "bg-gray-400" : "bg-gray-800";
  const textClass = isOdd ? "text-gray-900" : "text-gray-100";

  return (
    <a href={Link}>

    <div
      className={`${bgClass} ${textClass} h-40 flex items-center justify-center text-center px-4 shadow-md hover:opacity-90 transition-opacity cursor-pointer`}
      >
      <span className="uppercase tracking-wide text-sm font-medium">
        {title}
      </span>
    </div>
      </a>
  );
}
