<script>
  export let data;
  const product = data.product;
  const images = product.images.edges;
  const variants = product.variants.edges;
</script>

<main>
  <h1 class="h1 font-secondary">{product.title}</h1>

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
                <button class="btn" type="button">{variant.node.title}</button>
              </li>
            {/if}
        {/each}
        </ul>
      </div>
    </div>
  </div>


</main>
