import BorderedLink from './BorderedLink';
import transformImage from '../images/mobile/image-transform.jpg';
import standOutImage from '../images/desktop/image-stand-out.jpg';

const About = () => (
  <section id="about">
    <section className="md:flex md:flex-row-reverse">
      <img src={transformImage} alt="transform" className="md:w-1/2" />
      <div className="md:w-1/2">
        <div className="text-center md:text-left w-3/4 sm:w-1/2 mx-auto my-20 md:mt-40">
          <h2 className="font-serif text-5xl text-neutral-500 mb-4">
            Transform your brand
          </h2>
          <p className="text-neutral-300 mb-4">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <BorderedLink link="#learn-more" text="learn more" color="yellow" />
        </div>
      </div>
    </section>
    <section className="md:flex">
      <img src={standOutImage} alt="transform" className="md:w-1/2" />
      <div className="md:w-1/2">
        <div className="text-center md:text-left w-3/4 sm:w-1/2 mx-auto my-20 md:mt-40">
          <h2 className="font-serif text-4xl text-neutral-500 mb-4">
            Stand out to the right audience
          </h2>
          <p className="text-neutral-300 mb-4">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <BorderedLink link="#learn-more" text="learn more" color="red" />
        </div>
      </div>
    </section>
  </section>
);

export default About;
