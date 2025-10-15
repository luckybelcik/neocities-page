<script lang="ts">
    import BasicInnerCard from "./InnerCard.svelte";
    import Shield from "./Shield.svelte";

    let { title, description, inviteLink, icon } = $props<{ title?: string | undefined, description?: string | undefined, inviteLink?: string | undefined, icon?: string | undefined }>();
    const afterIcons = icon.split('/icons/')[1];
    const guildId = afterIcons.split('/')[0];
</script>

<BasicInnerCard title={title} titleLink={inviteLink} description={description} icon={icon}>
    {#snippet top()}
        <a href={inviteLink} target="_blank">
          <button class="btn btn-success btn-sm text-sm mt-1">Join</button>
        </a>
    {/snippet}
    <Shield altText="Discord" shieldLink="discord/{guildId}?" color="green" />
</BasicInnerCard>