<script lang="ts">
    let {
        svgContent,
        size = "w-6 h-6",
        color = "fill-current"
    } = $props<{ svgContent?: string | undefined, size?: string | undefined, color?: string | undefined }>();
</script>

<div class="{size} {color}">
    {@html svgContent}
</div>

<style>
    div :global(svg) {
        width: 100%;
        height: 100%;
        fill: currentColor !important;
    }
</style>