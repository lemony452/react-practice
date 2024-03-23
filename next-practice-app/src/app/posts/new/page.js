"use client";

import { useRouter } from "next/navigation";

export default function NewPost() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title: e.target.title.value,
      content: e.target.content.value,
    };

    const res = await fetch("http://localhost:9999/posts", {
      method: "POST",
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
        <input type="text" name="title" id="title" required></input>
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <textarea name="content" id="content" required></textarea>
      </p>
      <button>Submit</button>
    </form>
  );
}
