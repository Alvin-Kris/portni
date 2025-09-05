type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const ProjectCard = ({ title, description, image, link }: ProjectCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Project Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Project Info */}
      <div className="p-5">
        <h3 className="text-xl font-bold hover:text-indigo-400 transition duration-300">
          {title}
        </h3>
        <p className="text-gray-400 mt-2 mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
