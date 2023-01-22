import '../styles/BorderedLink.css';

const BorderedLink = (props) => (
  <a
    href={props.link}
    className={`uppercase font-serif font-black ${props.color}`}
  >
    {props.text}
  </a>
);

export default BorderedLink;
