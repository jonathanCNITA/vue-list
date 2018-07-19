<template>
    <div>
        <div class="projet">
            <img :src="srcImg" alt="">
            <h2>NAME: {{ name }}</h2>
            <p>machine status: {{ status }}</p>
        </div>
    </div>
</template>

<script>
	
	export default {
        props: ['project'],
		data() {
			return {
                name: this.project.name,
                srcImg: this.project.picture,
                status: this.project.isActive
			}
		}
	}
</script>

<style type="text/css">
.projet {
    padding: 20px;
    margin: 20px;
    border: 2px solid teal;
}
</style>