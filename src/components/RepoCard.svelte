<script lang="ts">
    import BasicInnerCard from "./BasicInnerCard.svelte";
    import Shield from "./Shield.svelte";

    let { title, description, repoName, useNpmVersioning, tomlPath } = $props<{ title: string, description: string, repoName: string, useNpmVersioning?: boolean | undefined, tomlPath?: string | undefined }>();

    let versionShield = $state('');
    let shouldDisplayVersion = $state(false);

    if (useNpmVersioning) {
        versionShield = `github/package-json/v/luckybelcik/${repoName}?`;
        shouldDisplayVersion = true;
    } else if (tomlPath) {
        versionShield = `badge/dynamic/toml?url=${tomlPath}&query=$.package.version&label=version&`;
        shouldDisplayVersion = true;
    }
</script>

<BasicInnerCard title={title} subtitle={repoName} titleLink="https://github.com/luckybelcik/{repoName}" description={description} >
    <div class="flex flex-wrap gap-2">
        <Shield altText="GitHub commit activity" shieldLink="github/commit-activity/m/luckybelcik/{repoName}?" color="green"/>
        <Shield altText="Github last commit" shieldLink="github/last-commit/luckybelcik/{repoName}?" color="green"/>
        <Shield altText="GitHub top language" shieldLink="github/languages/top/luckybelcik/{repoName}?" color="info"/>
        <Shield altText="GitHub language count" shieldLink="github/languages/count/luckybelcik/{repoName}?" color="info"/>
        {#if shouldDisplayVersion == true}
            <Shield altText="Project version" shieldLink={versionShield} />
        {/if}
    </div>
</BasicInnerCard>