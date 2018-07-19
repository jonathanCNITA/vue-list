<template>
    <div>
        <h1>HELLO APP</h1>
        <app-project v-for="project in projects" :project="project"></app-project>
    </div>
</template>

<script>
	
	export default {
		props: [],
		data() {
			return {
                projects: [{
                    "_id": "5b3e3da860e7c6eeb88e3ceb",
                    "isActive": true,
                    "picture": "http://placehold.it/32x32",
                    "name": "ZENTURY",
                    "creation": "Sat May 25 1974 16:52:45 GMT+0100 (Central European Standard Time)"
                },
                 {
                    "_id": "5b3e3da860e7c6eeb88e3c23",
                    "isActive": false,
                    "picture": "http://placehold.it/32x32",
                    "name": "ARAK",
                    "creation": "Sat May 25 1974 16:52:45 GMT+0100 (Central European Standard Time)"
                }]
			}
		}
	}
</script>
