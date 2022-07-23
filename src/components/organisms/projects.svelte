<script lang="ts">
  import { formatNumber } from "utils/format";
  import { Project as ProjectModel } from "models/project";
  import i18next from "utils/i18next";
  import Icon from "components/atoms/icon.svelte";
  import Lightbox from "components/molecules/lightbox.svelte";
  import Project from "components/molecules/project.svelte";
  import Section from "components/molecules/section.svelte";

  export let projects: ProjectModel[];

  let lightboxVisible = false;

  let tick = 0;
  setInterval(() => {
    if (lightboxVisible) return;
    tick += 1;
    if (tick >= 100) next();
  }, 100);

  let currentIndex = 0;
  $: currentProject = projects[currentIndex];

  function previous() {
    if (currentIndex <= 0) {
      currentIndex = projects.length - 1;
    } else {
      currentIndex -= 1;
    }
    tick = 0;
  }

  function next() {
    if (currentIndex >= projects.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex += 1;
    }
    tick = 0;
  }
</script>

<Section
  id="projects"
  subtitle={i18next.t("projects.subtitle")}
  title={i18next.t("projects.title")}
>
  <div class="controls">
    <button class="control-button" title={i18next.t("projects.previous")} on:click={previous}>
      <Icon name="arrow-left" size={2} />
    </button>
    <div class="progress">
      <span class="progress-current">{formatNumber(currentIndex + 1, 2)}</span>
      <span class="progress-separator">/</span>
      <span class="progress-total">{formatNumber(projects.length, 2)}</span>
    </div>
    <button class="control-button" title={i18next.t("projects.next")} on:click={next}>
      <Icon name="arrow-right" size={2} />
      <div class="time-indicator" style={`width: ${tick}%`} />
    </button>
  </div>
  <Project
    project={currentProject}
    on:lightbox={() => (lightboxVisible = true)}
  />
</Section>

{#if lightboxVisible}
  <Lightbox
    src={`/previews/${currentProject.previewFull}`}
    title={currentProject.title}
    on:close={() => (lightboxVisible = false)}
  />
{/if}

<style lang="scss">
  @use "../../styles/mixins.scss" as *;

  .controls {
    align-items: center;
    display: flex;
    margin-bottom: 4.8rem;
  }

  .control-button {
    align-items: center;
    background: var(--blue-300);
    border-radius: 0.4rem;
    border: none;
    cursor: pointer;
    display: flex;
    height: 4rem;
    justify-content: center;
    overflow: hidden;
    position: relative;
    transition: 0.3s ease;
    width: 4rem;

    &:hover {
      background: var(--cyan-400);
    }
  }

  .time-indicator {
    background: var(--cyan-400);
    bottom: 0;
    height: 0.2rem;
    left: 0;
    position: absolute;
    right: 0;
  }

  .progress {
    color: var(--white);
    display: flex;
    font-size: 2rem;
    justify-content: center;
    width: 10rem;
  }

  .progress-total {
    opacity: 0.8;
  }
</style>
