import React, { useEffect, useState } from "react";
import axios from "axios";

function Books() {
  const [image, setImage] = useState(null);
  const [allImage, setAllImage] = useState([]);

  useEffect(() => {
    getImage();
  }, []);

  const submitImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("bookId", "667e5c27679a4572d2e70ee6"); //isko book id se replace kr dena 

    try {
      const result = await axios.post(
        "http://localhost:3000/image/upload-image",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      if (result.data.status === "ok") {
        getImage();
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const onInputChange = (e) => {
    setImage(e.target.files[0]);
  };

  const getImage = async () => {
    try {
      const result = await axios.get("http://localhost:3000/image/get-image");
      setAllImage(result.data.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <div>
      <form onSubmit={submitImage}>
        <input type="file" accept="image/*" onChange={onInputChange}></input>
        <button type="submit">Submit</button>
      </form>
      {allImage.length === 0
        ? "No images found"
        : allImage.map((data) => (
            <img
              key={data._id}
              src={`http://localhost:3000/uploads/${data.image}`}
              alt={data.image}
              height={100}
              width={100}
            />
          ))}
    </div>
  );
}

export default Books;
