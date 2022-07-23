<script lang="ts">
  import { Technique } from "models/technique";
  import i18next from "utils/i18next";
  import Icon from "components/atoms/icon.svelte";

  export let items: Technique[];
</script>

<div class="techniques">
  {#each items as item}
    <div class="technique">
      <Icon name={item} size={4.8} />
      <span>{i18next.t(`techniques.${item}`)}</span>
    </div>
  {/each}
</div>

<style lang="scss">
  .techniques {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 4.8rem
  }

  .technique {
    align-items: center;
    color: var(--white);
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    opacity: 0.6;
    transition: 0.3s ease;
    width: 7.5rem;

    &:hover {
      color: var(--cyan-400);
    }
  }
</style>
