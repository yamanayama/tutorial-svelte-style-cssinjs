<script>
  import AppLabel from "../atoms/AppLabel.svelte";
  import AppIcon from "../atoms/AppIcon.svelte";
  import AppItemOption from "../molecules/AppItemOption.svelte";
  import AppStarRating from "../molecules/AppStarRating.svelte";
  import Carousel from "@beyonk/svelte-carousel";

  export let name = "";
  export let rating = "0";
  export let itemStyle = "";
  export let images = [];
  export let description = "";
  export let capacity = "";
  export let station = "";
  export let isFavorite = false;

  function clickIcon() {
    isFavorite = !isFavorite;
  }
</script>

<style>
  .box {
    border-style: dashed;
  }

  .slide-content {
    width: 246px;
  }
</style>

<div class="box">
  <AppLabel>{name}</AppLabel>
  <AppIcon
    type={isFavorite ? 'favorite' : 'unfavorite'}
    on:clickIcon={clickIcon} />
  <AppStarRating {rating} />
  <AppLabel>{itemStyle}</AppLabel>
  <Carousel loop={false}>
    {#each images as image}
      <div class="slide-content">
        <img alt={image.alt} src={image.src} />
      </div>
    {/each}
  </Carousel>
  <AppLabel>{description}</AppLabel>
  <AppItemOption type="group">{capacity}</AppItemOption>
  <AppItemOption type="train">{station}</AppItemOption>
</div>
