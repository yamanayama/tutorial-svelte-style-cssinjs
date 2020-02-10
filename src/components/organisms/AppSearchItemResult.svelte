<script>
  import AppItemListPattern from "../../components/molecules/AppItemListPattern.svelte";
  import AppSearchItemResultCards from "./AppSearchItemResultCards.svelte";
  import AppSearchItemResultMap from "./AppSearchItemResultMap.svelte";
  import AppSearchItem from "./AppSearchItem.svelte";

  let items = [
    {
      id: Math.random(),
      name: "自転車",
      rating: "3.5",
      itemStyle: "商品・ゲストおもてなし用",
      images: [
        {
          alt: "sample",
          src: "https://via.placeholder.com/150/92c952"
        },
        {
          alt: "sample",
          src: "https://via.placeholder.com/150/771796"
        },
        {
          alt: "sample",
          src: "https://via.placeholder.com/150/24f355"
        },
        {
          alt: "sample",
          src: "https://via.placeholder.com/150/d32776"
        }
      ],
      description: "世界的に有名なデザイナーTSUDAによる完全プロデュース作品",
      capacity: "1名〜100名",
      station: "おしゃべりステーション",
      isFavorite: false
    },
    {
      id: Math.random(),
      name: "パソコン",
      rating: "4.3",
      itemStyle: "商品・ゲストおもてなし用",
      images: [
        {
          alt: "sample",
          src: "https://via.placeholder.com/150/92c952"
        },
        {
          alt: "sample",
          src: "https://via.placeholder.com/150/771796"
        },
        {
          alt: "sample",
          src: "https://via.placeholder.com/150/24f355"
        },
        {
          alt: "sample",
          src: "https://via.placeholder.com/150/d32776"
        }
      ],
      description: "世界的に有名なデザイナーTSUDAによる完全プロデュース作品",
      capacity: "1名〜100名",
      station: "おしゃべりステーション",
      isFavorite: true
    },
    {
      id: Math.random(),
      name: "シューズ",
      rating: "2.8",
      itemStyle: "商品・ゲストおもてなし用",
      images: [
        {
          alt: "sample",
          src: "https://via.placeholder.com/150/f66b97"
        },
        {
          alt: "sample",
          src: "https://via.placeholder.com/150/56a8c2"
        },
        {
          alt: "sample",
          src: "https://via.placeholder.com/150/b0f7cc"
        },
        {
          alt: "sample",
          src: "https://via.placeholder.com/150/54176f"
        }
      ],
      description: "世界的に有名なデザイナーTSUDAによる完全プロデュース作品",
      capacity: "1名〜100名",
      station: "おしゃべりステーション",
      isFavorite: false
    }
  ];

  let isList = true;
</script>

<AppItemListPattern bind:isList={isList}/>

<svelte:component this={isList ? AppSearchItemResultCards : AppSearchItemResultMap} {items}/>
