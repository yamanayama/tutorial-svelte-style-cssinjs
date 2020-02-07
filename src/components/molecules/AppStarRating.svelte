<script>
  import StarRating from "svelte-stars-rating";
  import AppLabel from "../atoms/AppLabel.svelte";

  export let rating = "0";
  let style = {
    styleStarWidth: 20,
    styleEmptyStarColor: "#737373",
    styleFullStarColor: "#ffd219"
  };
</script>

<StarRating {rating} {style} isIndicatorActive={false} />
<AppLabel>{rating}</AppLabel>
