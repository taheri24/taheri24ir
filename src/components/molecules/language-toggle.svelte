<script lang="ts">
  import i18next from "utils/i18next";
</script>

<style lang="scss">
  @use "../../styles/mixins.scss" as *;

  .toggle {
    background: var(--blue-400);
    border-radius: 1.5rem;
    display: flex;
    overflow: hidden;
  }

  .toggle-item {
    background: var(--blue-400);
    color: var(--white);
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.6rem 0.8rem;
    text-align: center;
    text-decoration: none;

    &:hover {
      opacity: 0.8;
    }

    &.selected {
      background: var(--cyan-400);
    }
  }
</style>
