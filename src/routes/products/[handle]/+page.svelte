<script>
  import AddToCart from '$lib/components/AddToCart.svelte';

  export let data;
  const product = data.product;
  const images = product.images.edges;
  const variants = product.variants.edges;

  export let selectedVariant = '';
</script>

<main>
  <h1 class="h1 font-secondary">{product.title}</h1>
  <div>value: {selectedVariant}</div>

  <div class="flex">
    <div class="basis-2/3">
      <div>
        {#each images as image}
          <img
            src="{image.node.url}"
            alt="{image.node.alt}"
          >
        {/each}
      </div>
    </div>
    <div class="basis-1/3 pl-2">
      <p>{product.description}</p>
      <div>
        <ul>
          {#each variants as variant}
            {#if variant.node.title !== 'Default Title'}
              <li>
                <button
                  class="btn"
                  type="button"
                  on:click={() => { selectedVariant = variant.node.id; }}
                >
                  {variant.node.title}
                </button>
              </li>
            {/if}
        {/each}
        </ul>
      </div>
      <AddToCart {selectedVariant} />
    </div>
  </div>
</main>
