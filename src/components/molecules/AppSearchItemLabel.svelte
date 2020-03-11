<script>
  import AppSearchLabel from "../../components/molecules/AppSearchLabel.svelte";
  import AppSearchValue from "../../components/molecules/AppSearchValue.svelte";
  import { css } from "emotion";
  import Color from "../../apps/style/Color.js";

  export let type = "none";
  export let value = "";

  export const list = css `
    background: ${Color.BaseColor};
    padding .5rem 1rem;
    display: flex;
    align-items: center;
    border-radius: 4px;

    &:not(:last-child){
      margin-bottom: 16px;
    }
  `
  export const icon = css `
    display: flex;
    align-items: center;
    margin-right: 1rem;
  `

</script>

<li class={list}>
  <span class={icon}>
    <AppSearchLabel {type} />
  </span>
  <span class={icon}>
    <AppSearchValue {value} />
  </span>
</li>
