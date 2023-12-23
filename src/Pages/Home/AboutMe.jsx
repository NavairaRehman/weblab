export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading" style={{color:"white"}}>About Me</h1>
          <p className="hero--section-description" style={{ textAlign : 'justify', padding : '20px', fontSize:'20px'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            officiis sit debitis omnis harum sed veniam quasi dicta accusamus
            recusandae? Voluptatem, reprehenderit alias? Eligendi aperiam
            tempora numquam sint odit optio.
          </p>
          <p className="hero--section-description" style={{ padding: '20px', textAlign: 'justify', fontSize:'20px'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            officiis sit debitis omnis harum sed veniam quasi dicta accusamus
            recusandae?
          </p>
        </div>
      </div>
    </section>
  );
}
