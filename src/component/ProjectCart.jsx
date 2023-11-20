import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
const ProjectCart = ({ url, img, github, title, text }) => {
  return (
    <article className=" bg-white rounded-lg shadow-md hover:shadow-xl duration-200">
      <img
        src={img}
        alt={title}
        className=" w-full rounded-t-lg object-cover h-64"
      />
      <div className=" capitalize p-8 ">
        <h2 className=" text-xl tracking-wide font-medium ">{title}</h2>
        <p className=" mt-4 text-xs text-slate-600 leading-loose ">{text}</p>
        <div className=" mt-4 flex">
          <a href={url}>
            <TbWorldWww className=" h-8 w-8 text-slate-500 hover:text-black" />
          </a>
          <a href={github}>
            <FaGithubSquare className=" h-8 w-8 text-slate-500 hover:text-black" />
          </a>
        </div>
      </div>
    </article>
  );
};
export default ProjectCart;
