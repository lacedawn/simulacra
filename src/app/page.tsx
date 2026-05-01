import Image from "next/image";
import { DiscordCopyBtn } from "@/components/discord-copy-btn";

export default function Home() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-[0.85rem] text-muted mb-0 font-serif font-light italic lowercase tracking-wide">welcome</h1>

      <div className="grid grid-cols-1 md:grid-cols-[minmax(300px,50%)_1fr] gap-8 md:gap-10 items-start">

        {/* Left Column (Profile) */}
        <div className="flex flex-col w-full">
          <Image
            src="/simulacra/pics/cindyy.jpg"
            alt="Cindy Sherman – Untitled Film Still #21, 1978"
            width={800}
            height={800}
            className="w-full h-auto block grayscale object-cover"
            style={{ border: '1px solid #c9c3bb' }}
            priority
          />
        </div>

        {/* Right Column (About) */}
        <div className="flex flex-col">
          <p className="text-foreground leading-relaxed text-base text-left font-normal m-0">
            thank you for visiting. i am Lena, a 17 year old high school student from Iraq. i am interested in philosophy, technology and sociology. one of my favorite hobbies is reading, currently i am interested a lot in post-structuralist French philosophy and in particular the works of Gilles Deleuze and Félix Guattari. not as interested in novels but white nights has a soft spot in my heart.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center text-sm text-muted opacity-60 font-serif lowercase mt-10">
        <a href="https://x.com/lacedawnn" target="_blank" rel="noopener noreferrer" className="hover:underline">twitter</a>
        <span className="mx-3 opacity-40">·</span>
        <a href="https://www.instagram.com/0lacedawn" target="_blank" rel="noopener noreferrer" className="hover:underline">instagram</a>
        <span className="mx-3 opacity-40">·</span>
        <a href="https://www.reddit.com/user/Puzzleheaded-Taro492/" target="_blank" rel="noopener noreferrer" className="hover:underline">reddit</a>
        <span className="mx-3 opacity-40">·</span>
        <DiscordCopyBtn handle="lacedawnn" />
      </div>
    </section>
  );
}
