import { projects } from "../data";
import SectionTitle from "./SectionTitle";
import ProjectCart from "./ProjectCart";
const Project = () => {
  return (
    <div className=" py-20 align-element" id="projects">
      <SectionTitle text="web creating" />
      <div className=" py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectCart key={project.id} {...project} />;
        })}
      </div>
    </div>
  );
};
export default Project;
