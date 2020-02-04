<script>
  import AppSearchLabel from "../../components/molecules/AppSearchLabel.svelte";
  import AppSearchValue from "../../components/molecules/AppSearchValue.svelte";

  export let type = "none";
  export let value = "";
</script>

<style>
  .category {
    border-style: solid;
    border-width: 0.5px;
  }

  .box {
    margin: 0 0 0 auto;
  }
</style>

<p class="category">
  <span>
    <AppSearchLabel {type} />
  </span>
  <span class="box">
    <AppSearchValue {value} />
  </span>
</p>
