<script>
  import AppSearchLabel from "../../components/molecules/AppSearchLabel.svelte";
  import AppSearchValue from "../../components/molecules/AppSearchValue.svelte";
  import { css } from "emotion";
  import Color from "../../apps/style/Color.js";
  import "../../apps/style/style.css";

  export let type = "none";
  export let value = "";

  const list = css `
    background: ${Color.BaseColor};
    padding .5rem 1rem;
    display: flex;
    align-items: center;
    border-radius: 4px;

    &:not(:last-child){
      margin-bottom: 16px;
    }
  `
  const icon = css `
    display: flex;
    align-items: center;
    margin-right: 1rem;

  `
//iconコンポーネントにinputBackgroundが指定されていたらcolorがその値になる
//指定されていなかったらフォールバックとしてpapayawhipが適用される

</script>

<li class={list}>
  <div class="u-fz-12">
    <span class={icon}>
      <AppSearchLabel {type} />
    </span>
    <span class={icon}>
      <AppSearchValue {value} />
    </span>
  </div>
</li>
