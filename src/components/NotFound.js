import notFound from "../images/notfound.svg"

export default function NotFound() {
  return (
    <div className="container">
      <h3>Page Not Found (Error 404)</h3>
      <img src={notFound} alt="notfound"/>
    </div>
  );
}
