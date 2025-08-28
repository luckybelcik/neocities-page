<script lang="ts">
    let { shieldLink, altText, color } = $props<{ shieldLink: string, altText: string, color?: string }>();

    let computedColor = "ffb86c"

    if (color) {
        switch (color) {
            case "":
            case "default":
                break;
            
            case "green":
            case "success":
                computedColor="51fa7b";
                break;
            
            case "red":
            case "err":
            case "error":
                computedColor="ff5555";
                break;

            case "blue":
            case "info":
                computedColor="8be9fd";
                break;

            case "yellow":
            case "warning":
            case "warn":
                computedColor="f1fa8c";
                break;
        }
    }

    const link = "https://img.shields.io/" + shieldLink + "style=flat-square&color=%23" + computedColor;
</script>

<img class="rounded-sm" alt={altText} src={link}>