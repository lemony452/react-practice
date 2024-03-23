"use client";

import { useParams, useRouter } from "next/navigation";

export default function DeleteForm({ id }) {
  // const params = useParams();
  const router = useRouter();
  // const id = params.id;

  const handleDelete = (e) => {
    e.preventDefault();

    if (id) {
      fetch(`http://localhost:9999/posts/${id}`, {
        method: "DELETE",
      });
      router.push("/");
      router.refresh();
    }
  };
  return (
    <form onSubmit={handleDelete}>
      <button>Delete</button>
    </form>
  );
}
