<script lang="ts">
  import Icon from "components/atoms/icon.svelte";

  export let href: string;
  export let external = false;
</script>

<a class="link" {href} target={external ? "_blank" : "_self"}>
  <slot />
  {#if external}
    <Icon name="external" size={1} />
  {/if}
</a>

<style lang="scss">
  @use "../../styles/mixins.scss" as *;

  .link {
    color: var(--white);
    display: flex;
    gap: 0.4rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
</style>
