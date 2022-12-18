<script>
  import ProductCard from '$lib/components/ProductCard.svelte';
  export let data;
  const collection = data.collection;
  const products = collection.products.edges;
</script>

<main>
  <h1 class="h1 font-secondary">{collection.title}</h1>
  <div class="flex flex-wrap ml-0.5">
    {#each products as product}
      <ProductCard {product} />
    {/each}
  </div>
</main>
