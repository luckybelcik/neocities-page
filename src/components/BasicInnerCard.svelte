<script lang="ts">
    import { type Snippet } from 'svelte';
    
    let { title, description, subtitle, titleLink, icon, iconSize, top, children, besideIcon } = $props<{ title?: string | undefined, subtitle?: string | undefined, titleLink?: string | undefined, description?: string | undefined, icon?: string | undefined, iconSize?: number | undefined, top?: Snippet, children?: Snippet, besideIcon?: Snippet }>();
    const computedIconSize = iconSize == undefined ? 18 : iconSize;
    const iconHeightStyle = `height: ${computedIconSize / 4}rem;`;
</script>

<div class="p-2 pt-1 bg-base-200 rounded-lg flex items-start">
    <div class="flex-grow">
        {#if icon}
            <div>
                <img src="{icon}" alt="icon" class="float-left mr-2 mt-1 w-auto rounded-lg" style="{iconHeightStyle}"/>
                {@render besideIcon?.()}
            </div>
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
        {#if children}
        <div class="mt-2">
            {@render children?.()}
        </div>
        {/if}
    </div>
</div>