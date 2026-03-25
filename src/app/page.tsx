export default function Home() {
  return (
    <article>
      <h1 id="welcome" style={{ marginTop: 0 }}>
        welcome
      </h1>

      <h2 id="about-me" style={{ marginTop: "24px" }}>
        about me
      </h2>

      <p>
        thank you for visiting. im lena, a 17 years old high school student from iraq. im
        interested in philosophy, technology and sociology. one of my favorite hobbies is
        reading, currently im interested a lot in post-structuralist French philosophy and in
        particular the works of gilles deleuze and felix guattari. not as interested in novels
        but white nights has a soft spot in my heart
      </p>

      <figure style={{ margin: "22px 0 0", textAlign: "left" }}>
        <blockquote style={{ margin: 0, fontStyle: "italic", paddingLeft: "16px", borderLeft: "3px solid #000" }}>
          <p>Death is not an event of life. Death is not lived through.</p>
          <p style={{ marginTop: 14 }}>
            If by eternity is understood not endless temporal duration but timelessness, then he
            lives eternally who lives in the present.
          </p>
          <p style={{ marginTop: 14 }}>Our life is endless in the way that our visual field is without limit.</p>
        </blockquote>

        <figcaption className="mono" style={{ marginTop: 12 }}>
          Ludwig Wittgenstein
          <div
            style={{
              fontStyle: "italic",
            }}
          >
            Tractatus Logico-Philosophicus 6.4311
          </div>
        </figcaption>
      </figure>
    </article>
  );
}

