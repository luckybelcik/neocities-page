<script lang="ts">
    import { onMount } from 'svelte';
    import "../app.css";
    import { fade } from 'svelte/transition';
    import OuterCard from '../components/OuterCard.svelte';
    import { page } from '$app/state';

    let pageState = $state("loading");

    let loadingMessage = $state("loading...")

    onMount(() => {
        loadingMessage = "press [enter] to proceed";
        pageState = "loaded";
        window.addEventListener('keyup', handleEnterKey);
    });

    function handleEnterKey(event: any) {
        if (event.key === 'Enter') {
            loadingMessage = "welcome!"
            setTimeout(() => {
                pageState = "display";
                window.removeEventListener('keyup', handleEnterKey);
            }, 1)
        }
    }
</script>

{#if pageState != "display"}
  <div class="loading-overlay bg-black flex justify-center items-center flex-col" transition:fade={{duration: 1000}}>
    <div class="h-80">
        <img alt="lckblck logotype" src={"logotype.webp"}/>
    </div>
    <div class="font-mono opacity-50">
        {loadingMessage}
    </div>
  </div>
{/if}

<div class="w-full h-screen flex flex-col justify-center items-center">
    <div class="w-140">
        <OuterCard title="Welcome!" titleWeight="bold" titleSize=4 toggleable={false} classes="bg-base-200">
            <div class="flex flex-col justify-center gap-6">
                <div class="flex flex-col items-center gap-2">
                    Navigation
                    <div class="flex flex-row justify-center gap-3">
                        <a href="/home" class="text-center bg-base-content btn btn-ghost text-base-200">Home</a>
                        <a href="/home" class="text-center bg-base-content btn btn-ghost text-base-200">Home</a>
                    </div>
                </div>

                <div class="flex flex-col items-center gap-2">
                    Social Media & Contact
                    <div class="flex flex-row justify-center gap-3">
                        <a href="/home" class="text-center bg-base-content btn btn-ghost text-base-200">Discord</a>
                        <a href="/home" class="text-center bg-base-content btn btn-ghost text-base-200">Pinterest</a>
                    </div>
                </div>

                <div class="flex flex-col items-center gap-2">
                    Work Related
                    <div class="flex flex-row justify-center gap-3">
                        <a href="https://github.com/luckybelcik" class="text-center btn-ghost bg-white btn text-black">Github</a>
                        <a href="https://open.spotify.com/artist/3RoJSUCB7S4pRbhhupoLKc?si=284b813817904f53" class="text-center bg-[#1ED760] btn btn-ghost text-black">Spotify</a>
                    </div>
                </div>
            </div>
        </OuterCard>
    </div>
</div>