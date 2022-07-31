import Cookies from "js-cookie";
import { useRouter } from "next/router";
// import { ToastContainer, toast } from "react-toastify";

export default function Dashboard() {
  const router = useRouter();
  const onLogout = async () => {
    Cookies.remove("token");
    router.push("/");
  };

  const name = "Fredo Maurtino";
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div>
              <h1 className="">HALO {name}</h1>
              <h3>Selamat, Anda berhasil Login</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="d-flex justify-content-end">
          <button
            className="d-flex justify-content-end btn btn-primary"
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
