const Button = (props) => (
  <button className="bg-yellow sm:bg-neutral-100 hover:bg-blue-400 font-serif py-4 px-8 rounded-full uppercase">
    {props.value}
  </button>
);

export default Button;
