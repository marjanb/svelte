<script>
  import ProductCard from '$lib/components/ProductCard.svelte';
  export let data;
  const products = data.products;
</script>

<main>
  <div class="flex flex-wrap ml-0.5">
    {#each products as product}
      <ProductCard {product} />
    {/each}
  </div>
</main>
