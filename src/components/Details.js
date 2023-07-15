import { useParams } from "react-router-dom";
import { useEffect } from "react";
import blogs from "../data/blogs";
import { useState } from "react";
import "./Details.css"

export default function Deatails() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [author, setAthor] = useState("");

  useEffect(() => {
    ///ดึงข้อมูลบทความ
    const result = blogs.find((item) => item.id === parseInt(id));
    setTitle(result.title);
    setImage(result.image);
    setContent(result.content);
    setAthor(result.author);
    // eslint-disable-next-line
  },[]);

  return (
        <div className="detail-container">
            <h2 className="title">บทความ : {title}</h2>
            <img src={image} alt={title} className="blog-img"/>
            <div className="blog-detail">
                <strong>ผู้เขียน : {author}</strong>
                <p>{content}</p>
            </div>
        </div>
  );
}
