<script>
  import AppIcon from "../atoms/AppIcon.svelte";
  import AppLabel from "../atoms/AppLabel.svelte";

  export let isList = true;

  function toggle() {
    isList = !isList;
  }
</script>

<style>
  .is-active {
    background-color: black;
    color: white;
  }
</style>

<span class:is-active={isList} on:click={toggle}>
  <AppIcon type="list" />
  <AppLabel>一覧で見る</AppLabel>
</span>
<span class:is-active={!isList} on:click={toggle}>
  <AppIcon type="map" />
  <AppLabel>地図で見る</AppLabel>
</span>
