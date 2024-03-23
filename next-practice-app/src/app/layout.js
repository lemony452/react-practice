import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Next Practice App",
  description: "Next Practice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <nav style={{ backgroundColor: "pink" }}>
          <Link href="/">This is Nav</Link>
          <ul>
            <li>
              <Link href="/posts/new">New</Link>
            </li>
            <li>
              <Link href="/user">User</Link>
            </li>
          </ul>
        </nav>
        {children}
        <footer style={{ backgroundColor: "orange" }}>
          <h1>This is Footer</h1>
        </footer>
      </body>
    </html>
  );
}
