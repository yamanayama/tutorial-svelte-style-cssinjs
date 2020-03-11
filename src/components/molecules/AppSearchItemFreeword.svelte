<script>
/** @jsx jsx */
  import AppIcon from "../atoms/AppIcon.svelte";
  import AppInput from "../atoms/AppInput.svelte";

  import { css,keyframes } from "emotion";
  import Color from "../../apps/style/Color.js";
  import { mq } from "../../apps/style/Base.js";

  export let value = "";

  //jsx使えない
  // const list = css({
  //   backgroundColor: '#000',
  //   color: '#fff',
  //   fontSize: 14,
  // })}
</script>

<style>

</style>
<div>
  <AppIcon type="search" />
  <AppInput {value} placeholder="○○名から探す" />
</div>
