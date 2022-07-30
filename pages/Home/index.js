import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function Dashboard() {
  const Router = useRouter();
  const onLogout = async () => {
    Cookies.remove("token");
    Router.push("/");
  };
  return (
    <>
      <div className="container-fluid">Selamat, Anda berhasil Login</div>
      <button className="btn btn-primary" onClick={onLogout}>
        Logout
      </button>
    </>
  );
}
