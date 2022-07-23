<script lang="ts">
  export let type: "text" | "email" | "textarea" = "text";
  export let name: string;
  export let label: string;
  export let required: boolean = false;
</script>

<label class="label" for={name}>
  {label}
  {#if required}
    <span> *</span>
  {/if}

  {#if type === "text" || type === "email"}
    <input class="input" {type} {name} {required} />
  {:else}
    <textarea class="textarea" rows={10} {required} />
  {/if}
</label>

<style lang="scss">
  @use "../../styles/mixins.scss" as *;

  .label {
    color: var(--grey-400);
    font-size: 1.4rem;
    margin-bottom: 1.8rem;
    width: 100%;

    @include respond-to-tablet {
      font-size: 1.6rem;
    }
  }

  .input,
  .textarea {
    background: var(--blue-300);
    border-radius: 0.4rem;
    border: none;
    color: var(--white);
    display: block;
    font-size: 1.4rem;
    margin-top: 0.8rem;
    padding: 0.8rem 1.2rem;
    width: 100%;

    @include respond-to-tablet {
      font-size: 1.5rem;
    }

    &:focus {
      outline: 0.1rem solid var(--cyan-400);
    }
  }
</style>
