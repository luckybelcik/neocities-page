<script lang="ts">
    import BasicInnerCard from "./InnerCard.svelte";
    import SvgIcon from "./SvgIcon.svelte";
    import YoutubeIcon from '$lib/icons/youtube-icon.svg?raw';
    import AppleMusicIcon from '$lib/icons/apple-music-icon.svg?raw';
    import SpotifyIcon from '$lib/icons/spotify-icon.svg?raw';

    let { title, description, iconLink, spotifyLink, appleMusicLink, youtubeLink } = $props<{ title?: string | undefined, description?: string | undefined, iconLink?: string | undefined, spotifyLink?: string | undefined, appleMusicLink?: string | undefined, youtubeLink?: string | undefined }>();
    const displayYoutube = youtubeLink != undefined;
    const displayAppleMusic = appleMusicLink != undefined;
    const displaySpotify = spotifyLink != undefined;
</script>

<BasicInnerCard
    title={title}
    titleLink={spotifyLink}
    description={description}
    icon={iconLink}
    iconSize={20}>
    {#snippet besideIcon()}
    <div class="">
        {#if displayYoutube}
        <a href={youtubeLink} target="_blank" aria-label="Listen on YouTube">
            <button class="btn btn-circle btn-ghost btn-sm text-sm mt-1" aria-label="Listen on YouTube">
                <SvgIcon svgContent={YoutubeIcon} size="h-10"/>
            </button>
        </a>
        {/if}

        {#if displayAppleMusic}
        <a href={appleMusicLink} target="_blank" aria-label="Listen on Apple Music">
            <button class="btn btn-circle btn-ghost btn-sm text-sm mt-1" aria-label="Listen on Apple Music">
                <SvgIcon svgContent={AppleMusicIcon} size="h-10"/>
            </button>
        </a>
        {/if}

        {#if displaySpotify}
        <a href={spotifyLink} target="_blank" aria-label="Listen on Spotify">
            <button class="btn btn-circle btn-ghost btn-sm text-sm mt-1" aria-label="Listen on Spotify">
                <SvgIcon svgContent={SpotifyIcon} size="h-10"/>
            </button>
        </a>
        {/if}
    </div>
    {/snippet}
</BasicInnerCard>