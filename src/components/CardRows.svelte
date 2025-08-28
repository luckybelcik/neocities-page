<script lang="ts">
    let { classes, children } = $props<{ classes?: string | undefined, children?: any }>();
</script>

<div class="gap-5 row-span-2 flex flex-col {classes}">
    {@render children?.()}
</div>