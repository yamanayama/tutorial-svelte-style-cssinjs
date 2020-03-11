<script>
  import AppSearchItemFreeword from "../../components/molecules/AppSearchItemFreeword.svelte";
  import AppSearchItemLabel from "../../components/molecules/AppSearchItemLabel.svelte";

  import { css,keyframes } from "emotion";
  import Color from "../../apps/style/Color.js";
  import { mq } from "../../apps/style/Base.js";

  export let searchFreeword = "";


  //キーフレームアニメーション
  const heightAnimation = keyframes `
     from {
        opacity:0;
    }
    to {
        opacity:1;
    }
  `;

  const searchBlock  = css `
    background: ${Color.PointColor};
    padding: 16px 8px;
    list-style-type: none;
    margin: 0 auto;
    position: relative;
    display: none;
    animation: ${heightAnimation} ease-in .3s;//animation-1n125wt　ハッシュ値


    //レスポンシブ
    ${mq[2]}{
      padding: 24px 16px;
      display: block;
    }
  `
   const list = css `
    background: ${Color.BaseColor};
    margin-bottom: 16px;
    border-radius: 4px;
  `

  const style = css({
    backgroundColor: 'red'
  });
</script>

<ul class={searchBlock}>
  <li class="u-fz-10 {list}" >
    <AppSearchItemFreeword value={searchFreeword} />
  </li>
  <AppSearchItemLabel type="place" value="" />
  <AppSearchItemLabel type="image" value="" />
  <AppSearchItemLabel type="home" value="" />
  <AppSearchItemLabel type="guest" value="" />
  <AppSearchItemLabel type="budget" value="" />
</ul>
