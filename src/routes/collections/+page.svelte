<script>
  export let data;
  const collections = data.collections;
</script>

<main>
  <div class="flex flex-wrap ml-0.5">
    {#each collections as collection}
      <div class="basis-1/4 p-2 border border-black -mt-px -ml-px">
        <a href="/collections/{collection.node.handle}">
          <p>{collection.node.title}</p>
        </a>
      </div>
    {/each}
  </div>
</main>
