import '../index.css';

export default function Div({ radious, position }) {
  const style = {
    width: radious * 2 + 'px',
    height: radious * 2 + 'px',
    top: position[1] - radious + 'px',
    left: position[0] - radious + 'px'

  };
  
  return <div className="rounded-full border border-black fixed" style={ style }></div>;
}
