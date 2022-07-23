<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Button from "components/atoms/button.svelte";
  import Icon from "components/atoms/icon.svelte";

  const dispatch = createEventDispatcher();

  export let src: string;
  export let title: string;

  function handleClose() {
    dispatch("close");
  }
</script>

<div class="backdrop" on:click|self={handleClose}>
  <div class="top-container">
    <div class="top-container-inner">
      <Button on:click={handleClose} type="transparent">
        <Icon name="close" />
      </Button>
    </div>
  </div>
  <div class="image-container" on:click|self={handleClose}>
    <img {src} alt={title} class="image" />
  </div>
</div>

<style lang="scss">
  @use "../../styles/mixins.scss" as *;

  .backdrop {
    background: rgba(0, 0, 0, 0.8);
    bottom: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 10;
  }

  .top-container {
    background: rgba(0, 0, 0, 0.4);
  }

  .top-container-inner {
    @include centered;
    display: flex;
    justify-content: flex-end;
    padding: 0.4rem 0;
  }

  .image-container {
    @include centered;
    align-items: center;
    display: flex;
    flex: 1;
  }

  .image {
    height: auto;
    width: 100%;
  }
</style>
