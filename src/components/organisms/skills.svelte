<script lang="ts">
  import { skills } from "constants/index";
  import i18next from "utils/i18next";
  import Section from "components/molecules/section.svelte";
  import Techniques from "components/molecules/techniques.svelte";

  const { frontend, backend, tool } = skills;
</script>

<Section
  id="skills"
  subtitle={i18next.t("skills.subtitle")}
  title={i18next.t("skills.title")}
  align="right"
>
  <div class="groups">
    <div class="group">
      <span class="group-title">{i18next.t("skills.frontend")}</span>
      <Techniques items={frontend} />
    </div>
    <div class="group">
      <span class="group-title">{i18next.t("skills.backend")}</span>
      <Techniques items={backend} />
    </div>
    <div class="group">
      <span class="group-title">{i18next.t("skills.tool")}</span>
      <Techniques items={tool} />
    </div>
  </div>
</Section>

<style lang="scss">
  @use "../../styles/mixins.scss" as *;

  .groups {
    align-items: flex-end;
    display: flex;
    flex-direction: column;
  }

  .group {
    margin: 2.4rem 0;
    max-width: 90%;
    padding-bottom: 1.2rem;
  }

  .group-title {
    color: var(--white);
    display: block;
    font-weight: 600;
    margin-bottom: 2.4rem;
    opacity: 0.8;
  }
</style>
