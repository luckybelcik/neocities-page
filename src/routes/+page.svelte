<script lang="ts">
    import { onMount } from 'svelte';
    import "../app.css";
    import { fade } from 'svelte/transition';
    import OuterCard from '../components/OuterCard.svelte';
    import { staticDataStore } from '$lib/staticDataStore';
    import SvgIcon from '../components/SvgIcon.svelte';
    import DiscordIcon from '$lib/icons/discord-icon.svg?raw';
    import GithubIcon from '$lib/icons/github-icon.svg?raw';

    let pageState = $state("loading");
    let loadingMessage = $state("loading...")
    let fadeDuration = $state(1000);

    if ($staticDataStore.introPlayed) {
        pageState = "display";
        fadeDuration = 0;
    }

    onMount(() => {
        console.log("meow");
        if ($staticDataStore.introPlayed) {
            pageState = "display";
        } else {
            loadingMessage = "press [enter] to proceed";
            pageState = "loaded";
            window.addEventListener('keyup', handleEnterKey);
        }
    });

    function handleEnterKey(event: any) {
        if (event.key === 'Enter') {
            loadingMessage = "welcome!"
            setTimeout(() => {
                pageState = "display";
                window.removeEventListener('keyup', handleEnterKey);
                $staticDataStore.introPlayed = true;
            }, 1)
        }
    }
</script>

{#if pageState != "display"}
  <div class="loading-overlay bg-black flex justify-center items-center flex-col" transition:fade={{duration: fadeDuration}}>
    <div class="h-80">
        <img alt="lckblck logotype" src={"logotype.webp"}/>
    </div>
    <div class="font-mono opacity-50">
        {loadingMessage}
    </div>
  </div>
{/if}

<div class="absolute background-container-front"></div>
<div class="absolute background-container-middle"></div>
<div class="absolute background-container-back"></div>
<div class="absolute background-container-backdrop"></div>
<div class="absolute background-container-inversion"></div>

<div class="w-full h-screen flex flex-col justify-center items-center">
    <div class="w-140">
        <OuterCard title="Welcome!" titleWeight="bold" titleSize=4 toggleable={false} classes="bg-base-200">
            <div class="flex flex-col justify-center gap-6">
                <div class="flex flex-col items-center gap-2 bg-base-100 p-2 rounded-lg">
                    <div class="text-xl">Navigation</div>
                    <div class="flex flex-row justify-center gap-3">
                        <a href="/home" class="text-center bg-base-content btn btn-ghost text-base-200">Home</a>
                        <a href="/gallery" class="text-center bg-base-content btn btn-ghost text-base-200">Gallery</a>
                        <a href="/tracks" class="text-center bg-base-content btn btn-ghost text-base-200">Tracks</a>
                    </div>
                </div>

                <div class="flex flex-col items-center gap-2 bg-base-100 p-2 rounded-lg">
                    <div class="text-xl">Social Media & Contact</div>
                    <div class="flex flex-row justify-center gap-3">
                        <a href="https://discord.com/users/700617166223048786" class="text-center bg-[#5865F2] btn btn-ghost text-white"><SvgIcon svgContent={DiscordIcon} />Discord</a>
                        <a href="/home" class="text-center bg-[#E60023] btn btn-ghost text-white">Pinterest</a>
                        <a href="/home" class="text-center bg-[#FF0000] btn btn-ghost text-white">Youtube</a>
                    </div>
                </div>

                <div class="flex flex-col items-center gap-2 bg-base-100 p-2 rounded-lg">
                    <div class="text-xl">Work Related</div>
                    <div class="flex flex-row justify-center gap-3">
                        <a href="https://github.com/luckybelcik" class="text-center btn-ghost bg-white btn text-black"><SvgIcon svgContent={GithubIcon} />Github</a>
                        <a href="https://open.spotify.com/artist/3RoJSUCB7S4pRbhhupoLKc?si=284b813817904f53" class="text-center bg-[#1ED760] btn btn-ghost text-black">Spotify</a>
                    </div>
                </div>
            </div>
        </OuterCard>
    </div>
</div>