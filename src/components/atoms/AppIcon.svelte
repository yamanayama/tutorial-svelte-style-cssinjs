<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function clickIcon() {
    dispatch("clickIcon");
  }

  export let type = "none";
  export let width = 24;
  export let height = 24;


  let attr = {
    none: {
      src: ""
    },
    search: {
      src: "search.svg"
    },
    place: {
      src: "place.svg"
    },
    image: {
      src: "image.svg"
    },
    home: {
      src: "home.svg"
    },
    guest: {
      src: "user.svg"
    },
    budget: {
      src: "money-bag.svg"
    },
    list: {
      src: "shopping-list.svg"
    },
    map: {
      src: "place.svg"
    },
    favorite: {
      src: "favorite.svg"
    },
    unfavorite: {
      src: "unfavorite.svg"
    },
    group: {
      src: "group.svg"
    },
    train: {
      src: "train.svg"
    }
  };

  let isActive = true;


</script>

<img
  class:is-active={isActive}
  src={attr[type].src}
  {width}
  {height}
  alt=""
  on:click={clickIcon} />
