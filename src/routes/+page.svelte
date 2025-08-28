<script>
    import BasicCard from "../components/BasicCard.svelte";
    import BasicInnerCard from "../components/BasicInnerCard.svelte";
    import CardRows from "../components/CardRows.svelte";
    import RepoCard from "../components/RepoCard.svelte";
    import Shield from "../components/Shield.svelte";

</script>

<div class="relative">
    <div class="absolute background-container-front"></div>
    <div class="absolute background-container-middle"></div>
    <div class="absolute background-container-back"></div>
    <div class="absolute background-container-backdrop"></div>

    <div class="flex flex-col">
        <div class="bg-black h-[70vh] shadow-strong">
            yo
        </div>

        <div class="h-full flex m-5 gap-5">
            <CardRows classes="w-[30%]">
                <BasicCard title="Discord Servers" titleSize=3 classes="bg-base-100">
                    <BasicInnerCard title="Evil Development"
                        titleLink="https://discord.gg/HQgt45ByAN"
                        description="The discord server for swagengine, Redbud, and the game I'm making using them. Join for teasers and announcements!"
                        icon="https://cdn.discordapp.com/icons/1379475362077085707/563db5a77f8fd8f080b93001ce58f1f5.webp?size=128"
                    >
                        {#snippet top()}
                            <a href="https://discord.gg/HQgt45ByAN" target="_blank">
                              <button class="btn btn-success btn-sm text-sm mt-1">Join</button>
                            </a>
                        {/snippet}

                        <Shield altText="Discord" shieldLink="discord/1379475362077085707?" color="green" />
                    </BasicInnerCard>
                </BasicCard>
            </CardRows>

            <CardRows classes="w-[40%]">
                <BasicCard title="Main Content" titleWeight="bold" titleSize=4 classes="bg-base-100">

                </BasicCard>
            </CardRows>

            <CardRows classes="w-[30%]">
                <BasicCard title="Github Repos" titleSize=3 classes="bg-base-100">
                    <ul class="list gap-2">
                        <RepoCard title="Redbud" description="The webtools for swagengine - my game engine. Acts as a sort of visual editor for adding game elements, including items, entities, and even UI elements." repoName="swagengine-webapp" useNpmVersioning={true}/>
                        <RepoCard title="Swagengine" description="ECS-driven data-oriented 2D game engine written in Rust. Uses a system <-> component, as well as a task and event approach to allow parallelization of most processes." repoName="swagengine" tomlPath="https://raw.githubusercontent.com/luckybelcik/swagengine/refs/heads/master/Cargo.toml"/>
                        <RepoCard title="Neocities Page (this)" description="Linktree-like self-representation website for Neocities. Open-source; take the page and make it yours!" repoName="neocities-page" useNpmVersioning={true}/>
                    </ul>
                </BasicCard>

                <BasicCard title="Miscellaneous" titleWeight="normal" titleSize=3 classes="bg-base-100">

                </BasicCard>
            </CardRows>
        </div>
    </div>
</div>