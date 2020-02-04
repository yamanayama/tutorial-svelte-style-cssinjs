<script>
  import AppSearchItemFreeword from "../../components/molecules/AppSearchItemFreeword.svelte";
  import AppSearchItemLabel from "../../components/molecules/AppSearchItemLabel.svelte";

  export let searchFreeword = "";
</script>

<style>
  .category {
    border-style: solid;
  }
</style>

<p class="category">
  <AppSearchItemFreeword value={searchFreeword} />
</p>
<p class="category">
  <AppSearchItemLabel type="place" value="" />
  <AppSearchItemLabel type="image" value="" />
  <AppSearchItemLabel type="home" value="" />
  <AppSearchItemLabel type="guest" value="" />
  <AppSearchItemLabel type="budget" value="" />
</p>
