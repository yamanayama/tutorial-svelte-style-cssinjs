<script>
  import AppIcon from "../atoms/AppIcon.svelte";

  import { css } from "emotion";
  import Color from "../../apps/style/Color.js";

  export let type = "none";

  let attr = {
    none: {
      caption: "",
      fontColor: "red"
    },
    place: {
      caption: "エリア",
      fontColor: "orange"
    },
    image: {
      caption: "イメージ",
      fontColor: "blue"
    },
    home: {
      caption: "タイプ",
      fontColor: "green"
    },
    guest: {
      caption: "人数",
      fontColor: "yellow"
    },
    budget: {
      caption: "予算",
      fontColor: "blue"
    }
  };



</script>

<style>

</style>

<AppIcon {type} />
<label>{attr[type].caption}</label>
