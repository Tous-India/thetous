// app/not-found.js
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="inner-div">
        <h1>404</h1>
        <h2>Oops! That page can&apos;t be found</h2>
        <Link href="/" className="white-button">
          Return Home
        </Link>
      </div>
    </div>
  );
}
