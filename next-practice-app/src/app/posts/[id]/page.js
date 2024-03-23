import Link from "next/link";
import DeleteForm from "./delete";

export default async function PostPage(props) {
  const id = props.params.id; // 동적 라우팅 params값 가져오기

  const res = await fetch(`http://localhost:9999/posts/${id}`, {
    cache: "no-store",
  });
  const post = await res.json();

  return (
    <section>
      <h1>글 제목 : {post.title}</h1>
      <p>{post.content}</p>
      <Link href={`/posts/edit/${id}`}>Go Edit</Link>
      <DeleteForm id={id} />
    </section>
  );
}
