import Service from './Service';

const services = [
  {
    title: 'Graphic Design',
    image: 'bg-graphic-design',
    color: 'text-primary-100',
    description:
      'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.',
  },
  {
    title: 'Photography',
    image: 'bg-photography',
    color: 'text-primary-200',
    description:
      'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.',
  },
];

const Services = () => (
  <section className="sm:grid sm:grid-cols-[repeat(2,_1fr)] ">
    {services.map((service, index) => (
      <Service
        key={index}
        title={service.title}
        description={service.description}
        backgroundImage={service.image}
        color={service.color}
      />
    ))}
  </section>
);

export default Services;
