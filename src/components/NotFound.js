import Hero from "./Hero";
import notfound from './404notfound.jpeg'
const NotFound = () => {
  return (
    <>
      <Hero text="404 Page Not Found" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
          <div className="col-md-6">
          <img
                  src={notfound}
                  alt="404 Page Not Found"
                  className="img-fluid shadow rounded"
                />
                  
              </div>
             
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
