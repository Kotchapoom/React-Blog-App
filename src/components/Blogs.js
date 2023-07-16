import blogs from "../data/blogs";
import "./Blogs.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Blog() {
  const [search, setSearch] = useState("");
  const [filterBlog, setFilterBlog] = useState([]);

  useEffect(() => {
    //กรองข้อมูลบทความ
    const result = blogs.filter((item) =>
      item.title
        .toUpperCase()
        .toLowerCase()
        .includes(search.toLowerCase())
        
    );
    setFilterBlog(result);
  }, [search]);

  return (
    <div className="blogs-container">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <article className="blogs-grid">
        {filterBlog.map((item) => (
          <Link to={`/blog/${item.id}`} key={item.id}>
            <div className="card">
            <img src={item.image} alt={item.title} className="blogs-img" />
              <div className="overlay">
                <h2>{item.title}</h2>
                <p>{item.content.substring(0, 300)}</p>
              </div>
            </div>
          </Link>
        ))}
      </article>
      <footer>
        <div></div>
      </footer>
    </div>
  );
}
