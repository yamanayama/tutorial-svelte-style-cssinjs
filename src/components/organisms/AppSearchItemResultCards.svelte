<script>
  import AppSearchItem from "./AppSearchItem.svelte";
  import AppLabel from "../atoms/AppLabel.svelte";
  export let items = [];
</script>

{#each items as item (item.id)}
  <AppSearchItem {...item} />
{:else}
  <AppLabel>検索結果なし</AppLabel>
{/each}

