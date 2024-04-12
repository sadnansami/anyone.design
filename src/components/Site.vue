<script lang="ts" setup>
	import { ref,onMounted, onServerPrefetch, type Ref } from "vue"
	import * as cheerio from "cheerio";
	import $ from "jquery"
	import { currentElementAtom } from "../state/currentElement"
	
	let fileHandler: Ref<string>;
	onServerPrefetch(async () => {
		fileHandler = ref(
			cheerio.load(
				await Bun
					.file("sites/project1/home.html")
					.text()
			).html()
		)
	})
	
	onMounted(() => {
		console.log(fileHandler)

		console.log("hello")
		const cssClasses = "inner-border-2 inner-border-blue-500"
		let currentElement: JQuery<HTMLElement>

		/*
			function handleHover(e: Event) {
    			$(this).toggleClass(cssClasses);
  			}
  		*/
		$("#file").children()
			.on("mouseenter", function(e) {
				console.log("helio1j2io")
				$(this).addClass(cssClasses)
			}).on("mouseleave", function(e) {
				if(!$(this).is(currentElement)) {
					$(this).removeClass(cssClasses)
				}
			}).on("click", function(e) {

				currentElement = $(this)
				currentElementAtom.set($(this).prop("outerHTML"))
				
				$("#file")
					.children()
					.not($(this))
					.removeClass(cssClasses)

				$(this).addClass(cssClasses)
			})
	})
</script>

<template>
	<div id="file" v-html="fileHandler">

	</div>
</template>