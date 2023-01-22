const Service = (props) => {
  return (
    <div
      style={{
        height: '90vh',
        backgroundPositionX: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'grid',
        placeItems: 'end',
      }}
      className={`${props.backgroundImage} ${props.color}`}
    >
      <div className="text-center w-3/4 md:w-1/2 mx-auto mb-20">
        <h2 className="font-serif text-4xl mb-10">{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Service;
