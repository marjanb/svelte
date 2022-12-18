<script lang="ts">
  export let product;
</script>

<div class="basis-1/4 p-2 border border-black -mt-px -ml-px">
 <a href="/products/{product.node.handle}">
   <div class="aspect-square">
     <img
       src="{product.node.images.edges[0].node.url}"
       alt="{product.node.images.edges[0].node.alt}"
     >
   </div>
   <p>{product.node.title}</p>
   <p>
     ${parseFloat(product.node.priceRange.minVariantPrice.amount).toFixed(2)}
     {#if product.node.priceRange.minVariantPrice.amount < product.node.priceRange.maxVariantPrice.amount}
       - ${product.node.priceRange.maxVariantPrice.amount}
     {/if}
   </p>
 </a>
</div>
