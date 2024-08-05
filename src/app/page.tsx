import myData from '../../example.json';
import Link from 'next/link'

export default function Home() {
  const postList = myData.posts.map((post) =>
    <li key={post.title}>
      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  );

  return (
    <main className="">
      <div className="">
        <p className="">
          My Blog
        </p>
        <ul>{postList}</ul>
      </div>
      <div>
        <Link href="/login">Login</Link>
      </div>
    </main>
  );
}
