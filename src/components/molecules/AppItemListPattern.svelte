<script>
  import AppIcon from "../atoms/AppIcon.svelte";
  import AppLabel from "../atoms/AppLabel.svelte";

  export let type = "list";

  let attr = {
    list: {
      caption: "一覧で見る"
    },
    map: {
      caption: "地図で見る"
    }
  };
</script>

<span>
  <AppIcon {type} />
  <AppLabel>{attr[type].caption}</AppLabel>
</span>
