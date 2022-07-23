import Image from "next/image";
import profilePic from "../public/image/draw2.svg";

export default function Home() {
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <Image src={profilePic} className="img-fluid" alt="Phone image" />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example13"
                  className="form-control form-control-lg"
                />
                <label className="form-label">Email address</label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example23"
                  className="form-control form-control-lg"
                />
                <label className="form-label">Password</label>
              </div>

              <div className="d-flex justify-content-around align-items-center mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                  />
                  <label className="form-check-label"> Remember me </label>
                </div>
                <a href="#!">Forgot password?</a>
              </div>
              <button className="btn btn-primary btn-lg btn-block">
                Sign in
              </button>
              {/* <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>
                <a
                  className="btn btn-primary btn-lg btn-block"
                  // style= {{ background-color: '#3b5998' }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-facebook-f me-2"></i>Continue with
                  Facebook
                </a>
                <a
                  className="btn btn-primary btn-lg btn-block"
                  // style="background-color: #55acee"
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-twitter me-2"></i>Continue with Twitter
                </a> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
