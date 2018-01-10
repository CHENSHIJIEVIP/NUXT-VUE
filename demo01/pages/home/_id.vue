<template>
	<div>
		MINETWO
	</div>
</template>
<script>
	export default {
	  validate ({ params }) {
	    // Must be a number
	    return /^\d+$/.test(params.id)
	  }
	}
</script>