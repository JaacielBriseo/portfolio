import { Carousel } from 'react-responsive-carousel';
import { projectsData } from '../../helpers/projectsData';
import { Navbar } from '../components/Navbar';

export const ProjectsPage = () => {
  return (
    <div className="animate__animated animate__fadeIn sm:ml-11">
      <h1 className="text-custom m-4 text-2xl font-Playfair text-center">
        PROJECTS
      </h1>
      <hr />
      <div className="text-ffa m-14 bg-20if rounded-xl ">
        <p className="font-Poppins">
          Here I've compiled few projects I've made with a link to the
          repositories and demos
        </p>
      </div>
      <div className="flex justify-center ">
        <Carousel
          stopOnHover
          width={300}
          showIndicators={false}
          showStatus={false}
          showArrows={true}
          showThumbs={false}
          autoFocus
          autoPlay
          interval={3000}
          infiniteLoop
        >
          {projectsData.map(({ link, demo, img, desc }) => {
            return (
              <div key={link} className="text-sm">
                <img src={img} alt="imgproject" className="w-full rounded-md" />
                <p className="text-cartext m-1 font-Poppins">
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
