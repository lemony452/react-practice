import Link from "next/link";
import classes from "./page.module.css";
import Image from "next/image";

export default async function Home() {
  const res = await fetch("http://localhost:9999/posts", { cache: "no-store" });
  const posts = await res.json();

  return (
    <main>
      <h1>Hello, Home Page!</h1>
      <ul className={classes["posts-list"]}>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
        <Image src="/cat.jpeg" alt="cat image" width={100} height={100}></Image>
      </ul>
    </main>
  );
}
