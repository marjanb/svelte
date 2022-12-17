<script>
  export let data;
</script>

<main>
  <h1 class="h1">{data.product.title}</h1>


  <div class="flex">
    <div class="basis-2/3">
      <div>
        <img
          src="{data.product.images.edges[0].node.url}"
          alt="{data.product.images.edges[0].node.alt}"
        >
      </div>
    </div>
    <div class="basis-1/3">
      <p>{data.product.description}</p>
      <div>
        {#each data.product.variants.edges as variant}
          <div>{variant.node.title}</div>
        {/each}
      </div>
    </div>
  </div>


</main>
