import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
      <img src="/images/logo-01.svg" alt="Logo"  height="29" />
    </Link>
  );
}
