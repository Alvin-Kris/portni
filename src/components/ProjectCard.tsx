type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  onClick?: () => void;
};

const ProjectCard = ({
  title,
  description,
  image,
  onClick,
}: ProjectCardProps) => {
  return (
    <div className="bg-gray-800 shadow-md rounded-xl overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Project Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Project Info */}
      <div className="p-5">
        <h3 className="text-xl font-bold hover:text-indigo-400 transition duration-300 text-white line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-400 mt-2 mb-4 line-clamp-3">{description}</p>
        <button
          onClick={onClick}
          className="inline-block px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          View Project
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
