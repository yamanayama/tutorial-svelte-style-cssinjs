<script>
  import AppLabel from "../atoms/AppLabel.svelte";
  import AppItemOptionIcon from "./AppItemOptionIcon.svelte";

  export let type = "";
</script>

<AppItemOptionIcon {type} />
<AppLabel>
  <slot />
</AppLabel>
