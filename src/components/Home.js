import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero text="Showcasing React" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
          <h2>My React Project</h2>
             
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
