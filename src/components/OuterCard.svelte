<script lang="ts">
    import { slide } from "svelte/transition";
    import SvgIcon from "./SvgIcon.svelte";

    let { classes, title, titleWeight, titleSize, children, iconSvgString, toggleable = true } = $props<{ classes?: string | undefined, title?: string | undefined, titleWeight?: string | undefined, titleSize?: string | undefined, children?: any, iconSvgString?: string | undefined, toggleable?: boolean }>();

    let isOpen = $state(true);
    let isVisible = $state(true);

    const transitionDuration = 300;

    function toggleContent() {
        if (isOpen) {
            isOpen = false;

            setTimeout(() => {
                isVisible = false;
            }, transitionDuration); 
        } else {
            isVisible = true;

            setTimeout(() => {
                isOpen = true; 
            }, 50);
        }
    }

    function handleKey(event: any) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleContent();
        }
    }
</script>

<div class="{classes} relative p-5 rounded-3xl shadow-strong w-full">
    {#if toggleable}
    <div class="absolute inset-0 h-20 bg-transparent cursor-pointer select-none z-10"
        onclick={() => toggleContent()}
        onkeydown={(e) => handleKey(e)}
        tabindex="0"
        role="button">
    </div>
    {/if}

    <div class="flex flex-row gap-2 justify-center text-{titleSize}xl font-{titleWeight}">
        {title}
        {#if iconSvgString}
            <SvgIcon svgContent={iconSvgString} size="w-10 h-10"/>
        {/if}
    </div>

    {#if children && isOpen}
    <div transition:slide={{ duration: transitionDuration }}>
        <div class="mt-5">
            {@render children?.()}
        </div>
    </div>
    {/if}
</div>