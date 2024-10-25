import { Link } from "react-router-dom";
import logor from "../assets/images/logor.png";

function Footer() {
  return (
    <div className="bg-neutral-800 w-full text-slate-300 h-24">
      <div className="flex justify-between p-6">
        <Link to="/">
          <img src={logor} alt="" className="w-12 rounded-full" />
        </Link>

        <p className="text-4xl text-center">This is Footer</p>
        <p className="text-4xl text-center">This is Footer</p>
        <p className="text-4xl text-center">This is Footer</p>
      </div>
    </div>
  );
}
export default Footer;
