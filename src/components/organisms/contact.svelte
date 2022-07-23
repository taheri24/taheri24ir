<script lang="ts">
  import Button from "components/atoms/button.svelte";
  import Form from "components/molecules/form.svelte";
  import FormInput from "components/atoms/form-input.svelte";
  import i18next from "utils/i18next";
  import Section from "components/molecules/section.svelte";
</script>

<Section
  id="contact"
  subtitle={i18next.t("contact.subtitle")}
  title={i18next.t("contact.title")}
  align="center"
>
  <Form>
    <FormInput
      type="text"
      name="name"
      label={i18next.t("contact.form.name")}
      required
    />
    <FormInput
      type="email"
      name="email"
      label={i18next.t("contact.form.email")}
      required
    />
    <FormInput
      type="textarea"
      name="message"
      label={i18next.t("contact.form.message")}
      required
    />
    <Button submit>
      {i18next.t("contact.form.send")}
    </Button>
  </Form>
</Section>
