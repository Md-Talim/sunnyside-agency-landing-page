import Card from './Card';
import thomas from '../images/image-thomas.jpg';
import emily from '../images/image-emily.jpg';
import jennie from '../images/image-jennie.jpg';

const clients = [
  {
    id: 1,
    name: 'emily r.',
    image: emily,
    work: 'marketing director',
    testimonial:
      'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
  },
  {
    id: 2,
    name: 'thomas s.',
    image: thomas,
    work: 'chief operating officer',
    testimonial:
      'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
  },
  {
    id: 3,
    name: 'jennie f.',
    image: jennie,
    work: 'business owner',
    testimonial:
      'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
  },
];

const Testimonials = () => (
  <section className='text-center lg:px-10 lg:my-28'>
    <h3 className='font-serif text-neutral-200 uppercase tracking-widest my-14 font-black'>client testimonials</h3>
    <div className='lg:flex'>
      {clients.map((client) => (
        <Card
          key={client.id}
          name={client.name}
          image={client.image}
          work={client.work}
          testimonial={client.testimonial}
        />
      ))}
    </div>
  </section>
);

export default Testimonials;
