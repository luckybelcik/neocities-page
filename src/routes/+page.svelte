<svelte:head>
  <title>LCKBLCK</title>
</svelte:head>

<script lang="ts">
    import { onMount } from "svelte";
    import BasicCard from "../components/OuterCard.svelte";
    import BasicInnerCard from "../components/InnerCard.svelte";
    import CardRows from "../components/CardRows.svelte";
    import RepoCard from "../components/RepoCard.svelte";
    import Shield from "../components/Shield.svelte";
    import { quotes } from "$lib/quotes";
    import DiscordCard from "../components/DiscordCard.svelte";
    import SongCard from "../components/SongCard.svelte";

    function getRandomQuote(): string {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
    }

    let currentQuote: string = ""; 

    onMount(() => {
        currentQuote = getRandomQuote();
    });
</script>

<div class="relative">
    <div class="absolute background-container-front"></div>
    <div class="absolute background-container-middle"></div>
    <div class="absolute background-container-back"></div>
    <div class="absolute background-container-backdrop"></div>
    <div class="absolute background-container-inversion"></div>

    <div class="flex flex-col">
        <div class="bg-base-100 h-[70vh] shadow-strong">
            <div id="random-quote" class="text-center p-5">{currentQuote}</div>
        </div>

        <div class="h-full flex m-5 gap-5">
            <CardRows classes="w-[30%]">
                <BasicCard title="Discord Servers" titleSize=3 classes="bg-base-100">
                    <ul class="list gap-2">
                        <DiscordCard
                            title="Evil Development"
                            inviteLink="https://discord.gg/HQgt45ByAN"
                            description="The discord server for swagengine, Redbud, and the game I'm making using them. Join for teasers and announcements!"
                            icon="https://cdn.discordapp.com/icons/1379475362077085707/563db5a77f8fd8f080b93001ce58f1f5.webp?size=128"
                        />

                        <DiscordCard
                            title="White Walls Fanclub"
                            inviteLink="https://discord.gg/db4YcPrz8h"
                            description="The White Walls in my Room fanclub! Breakcore and satire Hip-Hop, what could be better? Join now now now!!!"
                            icon="https://cdn.discordapp.com/icons/1256961240870162544/ee3c269d6ccd79c3f170ba321348f037.webp?size=1024"
                        />
                    </ul>
                </BasicCard>
            </CardRows>

            <CardRows classes="w-[40%]">
                <BasicCard title="Main Content" titleWeight="bold" titleSize=4 classes="bg-base-100">

                </BasicCard>
            </CardRows>

            <CardRows classes="w-[30%]">
                <BasicCard title="Github Repos" titleSize=3 classes="bg-base-100">
                    <ul class="list gap-2">
                        <RepoCard title="Redbud" description="The webtools for swagengine - my game engine. Acts as a sort of visual editor for adding game elements, including items, entities, and even UI elements." repoName="swagengine-webapp" useNpmVersioning={true}/>
                        <RepoCard title="Swagengine" description="ECS-driven data-oriented 2D game engine written in Rust. Uses a system <-> component, as well as a task and event approach to allow parallelization of most processes." repoName="swagengine" tomlPath="https://raw.githubusercontent.com/luckybelcik/swagengine/refs/heads/master/Cargo.toml"/>
                        <RepoCard title="Neocities Page (this)" description="Linktree-like self-representation website for Neocities. Open-source; take the page and make it yours!" repoName="neocities-page" useNpmVersioning={true}/>
                    </ul>
                </BasicCard>

                <BasicCard title="Best Tracks" titleSize=3 classes="bg-base-100">
                    <ul class="list gap-2">
                    <SongCard
                        title="Mr. Evil"
                        description="The tale of Mr. Evil"
                        iconLink="https://i.scdn.co/image/ab67616d0000b273e587f8b10976e615f1123a6b?format=webp&width=800&height=800"
                        youtubeLink="https://youtu.be/n4bs0idXjdc?si=HrMHIEcF3CHPoEgg"
                        appleMusicLink="https://music.apple.com/us/song/mr-evil-feat-my-alter-ego/1755221292"
                        spotifyLink="https://open.spotify.com/track/1kq2Z2ahF8nJlthdKXnS7H?si=3cc12e67ed7f4041"
                    />

                    <SongCard
                        title="EVIL RAGE BEAT OF DEATH"
                        description="I got no clue what a rage track looks like"
                        iconLink="https://i.scdn.co/image/ab67616d0000b273b40c316bb5df8b069ad59150?format=webp&width=800&height=800"
                        youtubeLink="https://youtu.be/gTm3slYp5uE?si=fCKBFxUvyGnkXW1g"
                        appleMusicLink="https://music.apple.com/us/song/evil-rage-beat-of-death-feat-young-d-r-667/1827726955"
                        spotifyLink="https://open.spotify.com/track/0D97p3VpZecLO7ulKuH4B8?si=ba3572d9b2424acd"
                    />

                    <SongCard
                        title="exploding fetus syndrome"
                        description="Wouldn't wanna be sick with that tbh"
                        iconLink="https://i.scdn.co/image/ab67616d0000b2732986fe887e69614e7aa9a604?format=webp&width=800&height=800"
                        youtubeLink="https://youtu.be/unOSF-D4Wxk?si=XJUn2RHSIzdQBtvn"
                        spotifyLink="https://open.spotify.com/track/6HuUyZt0C0N5RDAR31ijmQ?si=f8d07153f3b0444c"
                    />
                    </ul>
                </BasicCard>
            </CardRows>
        </div>
    </div>
</div>