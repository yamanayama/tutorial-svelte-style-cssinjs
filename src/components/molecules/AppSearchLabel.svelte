<script>
  import AppIcon from "../atoms/AppIcon.svelte";

  export let type = "none";

  let attr = {
    none: {
      caption: ""
    },
    place: {
      caption: "エリア"
    },
    image: {
      caption: "イメージ"
    },
    home: {
      caption: "タイプ"
    },
    guest: {
      caption: "人数"
    },
    budget: {
      caption: "予算"
    }
  };
</script>

<style>

</style>

<AppIcon {type} />
<label>{attr[type].caption}</label>
