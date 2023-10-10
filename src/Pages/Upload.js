import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { BarLoader } from "react-spinners";
import { BASE_URL } from "./helper";

const Upload = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [video, setVideo] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const addUserData = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("image", img);
    formData.append("video", video);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const res = await axios.post(`${BASE_URL}/upload`, formData, config);

    if (res.status === 200) {
      setLoading(false);
      setTimeout(() => {
        toast.success("Uploaded successfully!");
      }, 5000);
      console.log([res.data]);
      navigate("/dashboard", { state: res.data });
    } else {
      setLoading(false);
      toast.error("Upload Unsuccessful!");
    }
  };
  return (
    <>
      <section className="upload-section">
        <h1 className="main_heading">Upload Form</h1>
        <form className="form">
          <div>
            <label>Title *</label>
            <input
              type="text"
              max="50"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Description *</label>
            <textarea
              rows="5"
              cols="200"
              required
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label>Upload Thumbnail *</label>
            <input
              type="file"
              name="image"
              required
              accept="image/jpg, image/png"
              onChange={(e) => setImg(e.target.files[0])}
            />
          </div>
          <div>
            <label>Upload Video * </label>
            <input
              type="file"
              required
              accept="video/mpg,video/avi,video/mp4"
              onChange={(e) => setVideo(e.target.files[0])}
            />
          </div>
          <button className="btn" onClick={addUserData}>
            Submit
          </button>
        </form>
      </section>
      <ToastContainer />
      {loading && (
        <div>
          <h1
            style={{
              color: "#f06595",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            Uploading....
          </h1>
          <BarLoader
            textalign={"center"}
            color={"#36D7B7"}
            loading={loading}
            height={4}
            width={100}
            radius={4}
          />
        </div>
      )}
    </>
  );
};

export default Upload;
