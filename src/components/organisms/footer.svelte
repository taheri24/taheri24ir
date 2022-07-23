<script lang="ts">
  import Icon from "components/atoms/icon.svelte";
  import Link from "components/atoms/link.svelte";
</script>

<div class="footer">
  <span class="text">
    <Icon name="astro" />
    <Link href="https://github.com/silweb-dev/silweb.dev" external>
      Built with Astro
    </Link>
  </span>
</div>

<style lang="scss">
  @use "../../styles/mixins.scss" as *;

  .footer {
    background: var(--blue-500);
    color: var(--white);
    padding: 2.4rem;
    text-align: center;
  }

  .text {
    display: flex;
    gap: 0.8rem;
    justify-content: center;
  }
</style>
