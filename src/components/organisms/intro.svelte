<script lang="ts">
  import i18next from "utils/i18next";
  import Icon from "components/atoms/icon.svelte";
</script>

<section class="section">
  <div class="inner">
    <div class="greeting">
      <h2 class="title">{@html i18next.t("intro.title")}</h2>
      <h3 class="description">
        <span>{@html i18next.t("intro.description.line1")}</span>
        <span>{@html i18next.t("intro.description.line2")}</span>
      </h3>
    </div>
  </div>
  <div class="bottom">
    <a href="#projects" class="show-work">
      <Icon name="chevron-down" size={3} />
      {i18next.t("intro.showWork")}
    </a>
    <img
      src="/drawings/person-laptop.svg"
      alt="Person laptop"
      class="person-laptop"
    />
  </div>
</section>

<style lang="scss">
  @use "../../styles/mixins.scss" as *;

  .section {
    animation: gradient 15s ease infinite;
    background: linear-gradient(-45deg, #0b132b, var(--blue-400));
    background-size: 400% 400%;
    height: 80rem;
    max-height: 90vh;
    position: relative;
    width: 100%;
  }

  .inner {
    @include centered;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding-top: 10rem;
  }

  .greeting {
    height: 20rem;
    margin-bottom: 15rem;
  }

  .title {
    animation: slide-in 0.3s forwards;
    color: var(--white);
    font-family: var(--font-secondary);
    font-size: 3.8rem;
    font-weight: 700;

    @include respond-to-tablet {
      font-size: 4.5rem;
    }
  }

  .title :global(strong) {
    color: var(--cyan-400);
  }

  .description {
    animation: slide-in 0.6s forwards;
    display: flex;
    flex-direction: column;
  }

  .description span {
    color: var(--white);
    font-family: var(--font-secondary);
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3.4rem;

    @include respond-to-tablet {
      font-size: 3rem;
      line-height: 4.4rem;
    }
  }

  .description span :global(strong) {
    color: var(--cyan-400);
  }

  .bottom {
    @include centered;
    bottom: 0;
    left: 0;
    padding-bottom: 1.8rem;
    position: absolute;
    right: 0;
  }

  .show-work {
    align-items: center;
    background: transparent;
    border: none;
    color: var(--white);
    cursor: pointer;
    display: flex;
    font-family: var(--font-secondary);
    font-size: 1.4rem;
    font-weight: 600;
    gap: 0.8rem;
    opacity: 0.8;
    padding: 0;
    text-decoration: none;

    @include respond-to-tablet {
      font-size: 1.6rem;
    }
  }

  .person-laptop {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    bottom: -10rem;
    display: none;
    height: 40rem;
    margin: 0 auto;
    position: absolute;
    right: 1.4rem;

    @include respond-to-tablet {
      display: block;
    }
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes slide-in {
    0% {
      margin-top: 1rem;
      opacity: 0;
    }
    100% {
      margin-top: 0;
      opacity: 1;
    }
  }
</style>
