function Title({ locked }) {
  return (
    <h1 className="title">
      {locked ? <span>Please buy pro for more than 5</span> : "Fancy Counter"}
    </h1>
  );
}

export default Title;
