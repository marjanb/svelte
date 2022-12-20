<script lang="ts">
  import type { Product } from "$types/index.d";
  export let product: Product;

  const fromToPrice = (): string => {
    const minPrice = product?.node?.priceRange?.minVariantPrice?.amount;
    const maxPrice = product?.node?.priceRange?.maxVariantPrice?.amount;

    if (minPrice < maxPrice) {
      return String(parseFloat(minPrice).toFixed(2));
    } else {
      return `${parseFloat(minPrice).toFixed(2)} - ${parseFloat(maxPrice).toFixed(2)}`;
    }
  };
</script>

<div class="basis-1/4 p-2 border border-black -mt-px -ml-px">
 <a href="/products/{product?.node?.handle}">
   <div class="aspect-square">
     <img
       src="{ product?.node?.images?.edges[0]?.node?.url }"
       alt="{ product?.node?.images?.edges[0]?.node?.alt }"
     >
   </div>
   <p>{ product?.node?.title }</p>
   <p>{ fromToPrice() }</p>
 </a>
</div>
