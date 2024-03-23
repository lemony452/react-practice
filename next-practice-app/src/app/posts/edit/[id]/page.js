"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function EditPost() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const titleRef = useRef();
  const contentRef = useRef();

  const [postData, setPostData] = useState({});

  useEffect(() => {
    const getData = async (id) => {
      const res = await fetch(`http://localhost:9999/posts/${id}`);
      const data = await res.json();
      console.log(data);
      setPostData(data);
    };

    getData(id);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title: e.target.title.value,
      content: e.target.content.value,
    };

    const res = await fetch(`http://localhost:9999/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const newData = await res.json();
    console.log(newData);
    router.push(`/posts/${newData.id}`);
    router.refresh();
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="title">Title</label>
        <input
          defaultValue={postData?.title}
          ref={titleRef}
          type="text"
          name="title"
          id="title"
          required
        ></input>
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <textarea
          defaultValue={postData?.content}
          ref={contentRef}
          name="content"
          id="content"
          required
        ></textarea>
      </p>
      <button>Submit</button>
    </form>
  );
}
