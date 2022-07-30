import Image from "next/image";
import profilePic from "../public/image/draw2.svg";
import { setLogin } from "../services/auth";
import { useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";
import "react-toastify/dist/ReactToastify.css";
import { redirect } from "next/dist/server/api-utils";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onSubmit = async () => {
    const data = {
      email: email,
      password: password,
    };
    // console.log(data);
    if (!email || !password) {
      toast.error("Email dan Password wajib diisi!!!");
    } else {
      const response = await setLogin(data);
      // console.log(response.status);
      if (response.error) {
        // toast.error(response.message);
        toast.error("Email dan Password tidak sesuai!!!");
      } else {
        // toast.success(response.message);
        toast.success("Login berhasil!!!");
        console.log(response.data);
        const { token } = response.data;
        const tokenBase64 = btoa(token);
        Cookies.set("token", tokenBase64, { expires: 1 });
        router.push("/Home");
      }
    }
  };
  return (
    <>
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
                    className="form-control form-control-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="form-label">Email address</label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="form-label">Password</label>
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label"> Remember me </label>
                  </div>
                  <a href="#!">Forgot password?</a>
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                  onClick={onSubmit}
                >
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
      <ToastContainer />
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  const { token } = req.cookies;
  if (token) {
    return {
      redirect: {
        destination: "/Home",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
