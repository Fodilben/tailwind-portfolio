import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className=" py-20 bg-white" id="about">
      <div className=" align-element grid md:grid-cols-2 items-center gap-16 ">
        <img src={aboutSvg} className=" w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className=" text-slate-600 leading-loose ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
            corrupti maiores dolores tempore consequatur distinctio magnam
            aliquam, quos minima, cumque ipsum placeat earum quidem et velit est
            eius, reiciendis obcaecati.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
