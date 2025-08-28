<script lang="ts">
    import { type Snippet } from 'svelte';
    
    let { title, description, subtitle, titleLink, icon, top, children } = $props<{ title?: string | undefined, subtitle?: string | undefined, titleLink?: string | undefined, description?: string | undefined, icon?: string | undefined, top?: Snippet, children?: Snippet }>();
</script>

<div class="p-2 pt-1 bg-base-200 rounded-lg flex items-start">
    <div class="flex-grow">
        {#if icon}
            <img src="{icon}" alt="icon" class="float-left h-18 mb-1 ml-0 m-2 w-auto rounded-lg"/>
        {/if}
        <div class="flex flex-row items-center gap-1">
            <div class="flex flex-row items-baseline gap-1">
                <a class="text-xl font-semibold opacity-90 hover:text-accent transition-colors"  href={titleLink}>{title}</a>
                {#if subtitle}
                    <div class="text-sm opacity-40">({subtitle})</div>
                {/if}
            </div>
            <div class="float-right ml-auto">
                {@render top?.()}
            </div>
        </div>
        <div class="text-m opacity-70">{description}</div>
        <div class="mt-2">
            {@render children?.()}
        </div>
    </div>
</div>