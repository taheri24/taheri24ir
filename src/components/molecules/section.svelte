<script lang="ts">
  export let id: string;
  export let subtitle: string;
  export let title: string;
  export let align: "left" | "center" | "right" = "left";
</script>

<section class="section" {id}>
  <div
    class="inner"
    class:left={align === "left"}
    class:center={align === "center"}
    class:right={align === "right"}
  >
    <div class="header">
      <h4 class="subtitle">{subtitle}</h4>
      <h3 class="title">{title}</h3>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</section>

<style lang="scss">
  @use "../../styles/mixins.scss" as *;

  .section {
    background-color: var(--blue-400);
    min-height: 60rem;
    width: 100%;

    @include respond-to-tablet {
      min-height: 80rem;
    }
  }

  .inner {
    @include centered;
    display: flex;
    flex-direction: column;
    height: 100%;

    &.left {
      justify-content: flex-start;
      text-align: left;
    }

    &.center {
      justify-content: center;
      text-align: center;
    }

    &.right {
      justify-content: flex-end;
      text-align: right;
    }
  }

  .header {
    padding-top: 10rem;
    display: flex;
    flex-direction: column;

    .left & {
      align-items: flex-start;
    }

    .center & {
      align-items: center;
    }

    .right & {
      align-items: flex-end;
    }
  }

  .subtitle {
    color: var(--white);
    font-size: 1.6rem;
    margin-bottom: 1rem;
    opacity: 0.7;
    text-transform: uppercase;

    @include respond-to-tablet {
      font-size: 1.8rem;
    }
  }

  .title {
    color: var(--white);
    font-family: var(--font-secondary);
    font-size: 2.3rem;
    line-height: 3.2rem;
    margin-top: 0;
    max-width: 30rem;

    @include respond-to-tablet {
      font-size: 2.5rem;
    }
  }

  .content {
    padding-bottom: 10rem;
  }
</style>
