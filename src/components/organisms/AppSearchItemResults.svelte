<script>
  import AppItemListPattern from "../../components/molecules/AppItemListPattern.svelte";

  let items = [
    {
      id: Math.random(),
      name: "テスト1"
    },
    {
      id: Math.random(),
      name: "テスト2"
    },
    {
      id: Math.random(),
      name: "テスト3"
    }
  ];
</script>

<style>
  .box {
    height: 50px;
    border-style: dashed;
  }
</style>

<AppItemListPattern />

{#each items as item (item.id)}
  <div class="box">{item.name}</div>
{/each}
