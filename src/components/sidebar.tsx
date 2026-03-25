import { getPosts } from "@/lib/markdown";

function formatProfileImageSrc() {
  // Next.js basePath is configured to `/simulacra`, so we hardcode it here for
  // plain `<a href="...">` links and `<img src="...">`.
  return "/simulacra/upscale/maryy.png";
}

export default async function Sidebar() {
  const posts = await getPosts("blog");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <img
        src={formatProfileImageSrc()}
        alt="Profile picture"
        width={160}
        height={220}
        loading="eager"
        style={{ width: "100%", height: "auto", display: "block" }}
      />

      <section>
        <h2 id="socials" style={{ margin: 0, fontSize: "1.2em" }}>
          socials
        </h2>
        <ul style={{ marginTop: "12px", paddingLeft: "20px" }}>
          <li style={{ marginBottom: "4px" }}>
            <a href="https://x.com/0l3naa" target="_blank" rel="noopener noreferrer">twitter</a>
          </li>
          <li style={{ marginBottom: "4px" }}>
            <a href="https://www.instagram.com/0lacedawn" target="_blank" rel="noopener noreferrer">instagram</a>
          </li>
          <li style={{ marginBottom: "4px" }}>
            <a href="https://www.reddit.com/user/Puzzleheaded-Taro492/" target="_blank" rel="noopener noreferrer">reddit</a>
          </li>
        </ul>
      </section>

      <section>
        <h2 id="currently-playing" style={{ margin: 0, fontSize: "1.2em" }}>
          currently playing
        </h2>

        <p className="mono" style={{ marginTop: "10px", marginBottom: "4px" }}>
          <a
            href="https://open.spotify.com/track/3EMPK4I0EE0tONfmI1dZ5Z?si=e73e6581b2b043c2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Confession, do you still adore me?
          </a>
        </p>
        <p style={{ marginTop: 0 }}>Sayako &amp; Lucy Bedroque</p>
      </section>

      <section>
        <h2 id="recent-blog-posts" style={{ margin: 0, fontSize: "1.2em" }}>
          Recent Blog Posts
        </h2>

        {posts.length === 0 ? (
          <p>No posts found.</p>
        ) : (
          <ul style={{ marginTop: "12px", paddingLeft: "20px" }}>
            {posts.slice(0, 8).map((post) => (
              <li key={post.slug} style={{ marginBottom: "4px" }}>
                <a href={`/simulacra/blog/${post.slug}`}>{post.title}</a>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

