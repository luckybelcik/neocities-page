<script lang="ts">
    import { slide } from "svelte/transition";

    let { classes, title, titleWeight, titleSize, children } = $props<{ classes?: string | undefined, title?: string | undefined, titleWeight?: string | undefined, titleSize?: string | undefined, children?: any }>();

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
    <div class="absolute inset-0 bg-transparent cursor-pointer z-10"
        onclick={() => toggleContent()}
        onkeydown={(e) => handleKey(e)}
        tabindex="0"
        role="button">
    </div>
    <div class="text-center text-{titleSize}xl font-{titleWeight}">
        {title}
    </div>
    {#if children && isOpen}
    <div transition:slide={{ duration: transitionDuration }}>
        <div class="mt-5">
            {@render children?.()}
        </div>
    </div>
    {/if}
</div>