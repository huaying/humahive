import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="section"
      style={{ minHeight: "80vh", display: "flex", alignItems: "center" }}
    >
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h1
            className="display-1 mb-8"
            style={{ color: "var(--color-primary)" }}
          >
            404
          </h1>
          <h2 className="heading-1 mb-6">Page Not Found</h2>
          <p className="body-xl mb-12">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <Link href="/" className="btn btn-primary btn-lg">
            <ArrowLeft size={20} />
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
