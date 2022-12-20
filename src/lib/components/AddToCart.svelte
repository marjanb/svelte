<script lang="ts">
  import { addToCart } from '$src/store';

  export let selectedVariant;

  let loaded = false;
  let errorMessage = null;

  async function onSubmit() {
    loaded = false;

    try {
      await addToCart(selectedVariant);
    } catch (err) {
      errorMessage = err.body.message;
    } finally {
      loaded = true;
    }
  }

</script>

<div class="basis-1/4 p-2 border border-black -mt-px -ml-px">
  {#if errorMessage}
    {errorMessage}
  {:else }
    <form on:submit|preventDefault={onSubmit}>
      <button
        class="btn"
        disabled={loaded}
      >
        Add To Cart
      </button>
    </form>
  {/if}
</div>
