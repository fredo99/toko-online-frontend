import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";

export default function Dashboard() {
  const router = useRouter();
  const onLogout = async () => {
    Cookies.remove("token");
    router.push("/");
  };
  return (
    <>
      <div className="container-fluid">Selamat, Anda berhasil Login</div>
      <button className="btn btn-primary" onClick={onLogout}>
        Logout
      </button>
      <ToastContainer />
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
