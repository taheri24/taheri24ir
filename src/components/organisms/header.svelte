<script lang="ts">
  import i18next from "utils/i18next";
  import LanguageToggle from "components/molecules/language-toggle.svelte";
  import Nav from "components/molecules/nav.svelte";
</script>

<header class="header">
  <a class="title-container" href="#intro">
    <h1 class="title">
      {i18next.t("site.title")}
    </h1>
  </a>
  <div class="nav-container">
    <Nav />
    <LanguageToggle />
  </div>
</header>

<style lang="scss">
  @use "../../styles/mixins.scss" as *;

  .header {
    @include centered;
    display: flex;
    left: 0;
    position: absolute;
    right: 0;
    top: 0.8rem;
    z-index: 1;
  }

  .title-container {
    text-decoration: none;
  }

  .title {
    color: var(--cyan-400);
    font-size: 2.8rem;
  }

  .nav-container {
    align-items: center;
    display: flex;
    flex: 1;
    gap: 4.8rem;
    justify-content: flex-end;
  }
</style>
