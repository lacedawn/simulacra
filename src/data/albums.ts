import { AlbumSchema, type Album } from "@/lib/schemas";
import { z } from "zod";

const rawAlbums = [
    {
        title: "Adrenaline",
        artist: "Deftones",
        spotifyUrl: "https://open.spotify.com/album/4cT0ODkZJm7C0b16xL3R6c",
        cover: "https://tse2.mm.bing.net/th?q=Deftones+Adrenaline+album+cover&w=400&h=400&c=7&rs=1&p=0",
    },
    {
        title: "Gore",
        artist: "Deftones",
        spotifyUrl: "https://open.spotify.com/album/3KBIF2f7dCxKAdR65k7FFh",
        cover: "https://tse2.mm.bing.net/th?q=Deftones+Gore+album+cover&w=400&h=400&c=7&rs=1&p=0",
    },
    {
        title: "Loveless",
        artist: "My Bloody Valentine",
        spotifyUrl: "https://open.spotify.com/album/3USQKOw0se5pBNbEgpehgY",
        cover: "https://tse2.mm.bing.net/th?q=My+Bloody+Valentine+Loveless+album+cover&w=400&h=400&c=7&rs=1&p=0",
    },
    {
        title: "Deathconsciousness",
        artist: "Have a Nice Life",
        spotifyUrl: "https://open.spotify.com/album/00eiw4KOJR4mCTvJKxhCnJ",
        cover: "https://tse2.mm.bing.net/th?q=Have+a+Nice+Life+Deathconsciousness+album+cover&w=400&h=400&c=7&rs=1&p=0",
    },
    {
        title: "A Thousand Things I Could Tell You",
        artist: "Xxtarlit⚸",
        spotifyUrl: "https://open.spotify.com/search/A%20Thousand%20Things%20I%20Could%20Tell%20You%20Xxtarlit",
        cover: "https://tse2.mm.bing.net/th?q=Xxtarlit+A+Thousand+Things+I+Could+Tell+You+album+cover&w=400&h=400&c=7&rs=1&p=0",
    },
    {
        title: "Among My Swan",
        artist: "Mazzy Star",
        spotifyUrl: "https://open.spotify.com/search/Among%20My%20Swan%20Mazzy%20Star",
        cover: "https://tse2.mm.bing.net/th?q=Mazzy+Star+Among+My+Swan+album+cover&w=400&h=400&c=7&rs=1&p=0",
    },
    {
        title: "Distressor",
        artist: "Whirr",
        spotifyUrl: "https://open.spotify.com/album/4M0NtxhGj4o7J1J2I8g0vD",
        cover: "https://tse2.mm.bing.net/th?q=Whirr+Distressor+album+cover&w=400&h=400&c=7&rs=1&p=0",
    },
    {
        title: "Giles Corey",
        artist: "Giles Corey",
        spotifyUrl: "https://open.spotify.com/album/4YZxbPrLuMwLZre7JhmdUR",
        cover: "https://tse2.mm.bing.net/th?q=Giles+Corey+Giles+Corey+album+cover&w=400&h=400&c=7&rs=1&p=0",
    },
    {
        title: "we had good times together, don't forget that",
        artist: "Sewerslvt",
        spotifyUrl: "https://open.spotify.com/search/we%20had%20good%20times%20together%20Sewerslvt",
        cover: "https://tse2.mm.bing.net/th?q=Sewerslvt+we+had+good+times+together+album+cover&w=400&h=400&c=7&rs=1&p=0",
    },
    {
        title: "Fake It Flowers",
        artist: "beabadoobee",
        spotifyUrl: "https://open.spotify.com/album/6d1BhnjY8FfJb7e9Z0Qy6U",
        cover: "https://tse2.mm.bing.net/th?q=beabadoobee+Fake+It+Flowers+album+cover&w=400&h=400&c=7&rs=1&p=0",
    },
];

// Provide compile-time guarantees that the array matches our type bounds exactly
export const albums = rawAlbums satisfies Album[];
