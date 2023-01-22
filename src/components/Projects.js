import cone from '../images/desktop/image-gallery-cone.jpg';
import milkBottles from '../images/desktop/image-gallery-milkbottles.jpg';
import orange from '../images/desktop/image-gallery-orange.jpg';
import sugarCubes from '../images/desktop/image-gallery-sugar-cubes.jpg';

const Projects = () => (
  <section className='grid grid-cols-2 lg:grid-cols-4 gap-0'>
    <img src={milkBottles} alt="cone" />
    <img src={orange} alt="cone" />
    <img src={cone} alt="cone" />
    <img src={sugarCubes} alt="cone" />
  </section>
);

export default Projects;
