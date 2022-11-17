import { Carousel } from 'react-responsive-carousel';
import { projectsData } from '../../helpers/projectsData';
import { Navbar } from '../components/Navbar';

export const ProjectsPage = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <h1 className="text-custom m-4 text-2xl font-Playfair text-center">
        PROJECTS
      </h1>
      <hr />
      <div className="text-ffa m-10 bg-20if rounded-xl ">
        <p className="font-Poppins ">
          Here I've compiled few projects I've made with a link to the
          repositories and demos
        </p>
      </div>
      <div className="w-full flex flex-col justify-center content-center">
        <Carousel
          stopOnHover
          width={320}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          showArrows={false}
          autoFocus
          autoPlay
          interval={8000}
        >
          {projectsData.map(({ link, demo, img, desc }) => {
            return (
              <div key={link} className="m-4">
                <img src={img} alt="imgproject" />
                <p className="text-cartext text-sm m-1  font-Poppins">
                  Description : {desc}
                </p>
                <p>
                  <a href={demo} className="text-ffa underline font-Poppins">
                    Demo
                  </a>
                </p>
                <p>
                  <a href={link} className="text-ffa underline font-Poppins">
                    Repositorio
                  </a>
                </p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
