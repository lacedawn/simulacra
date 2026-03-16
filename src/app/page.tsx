import Image from "next/image";
import { DiscordCopyBtn } from "@/components/discord-copy-btn";

export default function Home() {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-xl text-accent mb-0 font-medium lowercase">welcome</h1>

      <div className="grid grid-cols-1 md:grid-cols-profile-layout gap-4 sm:gap-8 items-start">

        {/* Left Column (Profile & Links) */}
        <div className="flex flex-col gap-4 sm:gap-8">
          <div className="w-profile sm:w-full max-w-[250px] md:max-w-full mx-auto md:mx-0 border border-border bg-box p-1 mb-2 sm:mb-0">
            <Image
              src="/simulacra/upscale/maryy.png"
              alt="Oléna's profile picture"
              width={250}
              height={333}
              className="w-full h-auto block"
              priority
            />
          </div>

          <div className="bg-box border border-border p-4 sm:p-6 flex flex-col gap-3 sm:gap-4">
            <h2 className="text-base sm:text-lg font-medium lowercase mb-0">links</h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm sm:text-base">
              <a href="https://x.com/0l3naa" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-hover hover:underline underline-offset-4 w-fit">twitter</a>
              <a href="https://www.instagram.com/0lacedawn" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-hover hover:underline underline-offset-4 w-fit">instagram</a>
              <a href="https://www.reddit.com/user/Puzzleheaded-Taro492/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-hover hover:underline underline-offset-4 w-fit">reddit</a>
              <DiscordCopyBtn handle="lacedawn" />
            </div>
          </div>
        </div>

        {/* Right Column (About & Activity) */}
        <div className="flex flex-col gap-4 sm:gap-8">
          <div className="bg-box border border-border p-4 sm:p-6">
            <h2 className="text-base sm:text-lg font-medium lowercase mb-3 sm:mb-4">about me</h2>
            <p className="text-foreground leading-relaxed sm:leading-body text-sm sm:text-base text-justify sm:text-left">
              thank you for visiting. im lena, a 17 years old high school student from iraq. im interested in philosophy, technology and sociology. one of my favorite hobbies is reading, currently im interested a lot in post-structuralist French philosophy and in particular the works of gilles deleuze and felix guattari. not as interested in novels but white nights has a soft spot in my heart
            </p>
          </div>

          <aside className="bg-box border border-border p-4 sm:p-6">
            <h3 className="text-xs sm:text-sm text-muted font-normal lowercase mb-2">
              <span className="text-accent" aria-hidden="true">♡</span> currently playing
            </h3>
            <div className="flex flex-col gap-1">
              <a
                href="https://open.spotify.com/track/3EMPK4I0EE0tONfmI1dZ5Z?si=e73e6581b2b043c2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover hover:underline underline-offset-2 block font-medium text-sm sm:text-base"
              >
                Confession, do you still adore me?
              </a>
              <p className="text-xs sm:text-sm text-muted m-0">Sayako & Lucy Bedroque</p>
            </div>
          </aside>
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-6 mb-4 text-accent opacity-60">
        <span className="w-16 h-px bg-accent"></span>
        <span className="text-xs" aria-hidden="true">♡</span>
        <span className="w-16 h-px bg-accent"></span>
      </div>

      <div className="mt-2 mb-2 flex justify-center">
        <figure className="max-w-container-md text-center flex flex-col items-center">
          <blockquote className="font-serif font-normal text-body-lg text-foreground opacity-90 leading-relaxed italic mb-6">
            <p>Death is not an event of life. Death is not lived through.</p>
            <p className="mt-4">If by eternity is understood not endless temporal duration but timelessness, then he lives eternally who lives in the present.</p>
            <p className="mt-4">Our life is endless in the way that our visual field is without limit.</p>
          </blockquote>
          <figcaption className="text-sm text-accent font-mono uppercase tracking-widest flex flex-col items-center gap-2 mt-2">
            Ludwig Wittgenstein
            <cite className="opacity-80 text-caption text-muted tracking-normal normal-case font-serif italic">
              Tractatus Logico-Philosophicus 6.4311
            </cite>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
