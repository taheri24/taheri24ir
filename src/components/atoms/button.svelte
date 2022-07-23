<script lang="ts">
  type ButtonType = "default" | "transparent";

  export let type: ButtonType = "default";
  export let submit: boolean = false;
</script>

<button
  type={submit ? "submit" : "button"}
  class="button"
  class:transparent={type === "transparent"}
  on:click
>
  <slot />
</button>

<style lang="scss">
  @use "../../styles/mixins.scss" as *;

  .button {
    background: var(--blue-300);
    border-radius: 0.4rem;
    border: none;
    color: var(--white);
    cursor: pointer;
    font-size: 1.4rem;
    padding: 1.2rem;
    transition: 0.3s ease;

    @include respond-to-tablet {
      font-size: 1.5rem;
    }

    &:hover {
      background: var(--cyan-400);
    }

    &.transparent {
      background: transparent;
    }
  }
</style>
