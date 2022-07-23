<script lang="ts">
  import i18next from "utils/i18next";
</script>

<nav class="nav">
  <ul>
    <li>
      <a href="#projects">{i18next.t("site.navigation.portfolio")}</a>
    </li>
    <li>
      <a href="#skills">{i18next.t("site.navigation.skills")}</a>
    </li>
    <li>
      <a href="#contact">{i18next.t("site.navigation.contact")}</a>
    </li>
  </ul>
</nav>

<style lang="scss">
  @use "../../styles/mixins.scss" as *;

  .nav {
    display: none;

    @include respond-to-tablet {
      display: block;
    }
  }

  .nav ul {
    display: flex;
    font-size: 1.7rem;
    gap: 4.8rem;
    list-style-type: none;
    padding: 0;
  }

  .nav ul li a {
    color: var(--grey-400);
    font-weight: 600;
    text-decoration: none;
  }
</style>
