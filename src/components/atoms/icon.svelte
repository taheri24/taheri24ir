<script lang="ts">
  import { Icon } from "models/icon";

  export let name: Icon;
  export let color = "var(--white)";
  export let size = 2.4;

  $: styles = {
    "background-color": color,
    "mask-image": `url(/icons/${name}.svg)`,
    "-webkit-mask-image": `url(/icons/${name}.svg)`,
    height: `${size}rem`,
    width: `${size}rem`,
  };

  $: cssStyles = Object.entries(styles)
    .map(([key, value]) => `${key}:${value}`)
    .join(";");
</script>

<i class="icon" style={cssStyles} />

<style>
  .icon {
    display: block;
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: contain;
  }
</style>
