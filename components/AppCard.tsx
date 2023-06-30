import { urlFor } from "../sanity";

type Props = {
  project: any;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="h-20 w-20 xl:h-32 xl:w-32">
      <img
        className="h-20 w-20 cursor-pointer rounded-full shadow-xl transition duration-500 hover:shadow-white/20 xl:h-32 xl:w-32"
        src={urlFor(project?.image).url()}
        alt={`${project?.title} logo`}
      />
    </div>
  );
};

export default ProjectCard;
