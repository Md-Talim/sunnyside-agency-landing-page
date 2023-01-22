const Link = (props) => (
  <li className='text-lg text-neutral-300 sm:text-neutral-100'>
    <a href={props.name.toLowerCase()}>{props.name}</a>
  </li>
);

export default Link;
