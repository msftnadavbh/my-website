import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <section
        className="not-found__terminal"
        aria-labelledby="not-found-title"
      >
        <div className="window-title" aria-hidden="true">
          <span>● ● ●</span>
          <p>nadav@workstation:~</p>
        </div>
        <p className="path-line">bash: /requested/path</p>
        <h1 id="not-found-title">No such file or directory.</h1>
        <p>The path may have moved, or you found a symlink to nowhere.</p>
        <Link className="button button--accent" href="/">
          cd ~
        </Link>
      </section>
    </main>
  );
}
