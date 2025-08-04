import "./Heading.css";

function Heading(props) {
  return (
    <>
      <h2>{props.header}</h2>
      <p className="heading_article">{props.article}</p>
    </>
  );
}

export default Heading;
