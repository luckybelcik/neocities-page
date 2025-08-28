<script lang="ts">
    let { classes, title, titleWeight, titleSize, children } = $props<{ classes?: string | undefined, title?: string | undefined, titleWeight?: string | undefined, titleSize?: string | undefined, children?: any }>();
</script>

<div class="{classes} p-5 rounded-3xl shadow-strong w-full">
    <div class="text-center text-{titleSize}xl font-{titleWeight} mb-5">{title}</div>
    {@render children?.()}
</div>