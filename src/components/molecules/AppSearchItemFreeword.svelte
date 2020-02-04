<script>
  import AppIcon from "../atoms/AppIcon.svelte";
  import AppInput from "../atoms/AppInput.svelte";

  export let value = "";
</script>

<style>

</style>

<AppIcon type="search" />
<AppInput {value} placeholder="○○名から探す" />
