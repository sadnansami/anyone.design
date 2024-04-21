<script lang="ts" setup>
	import { ref,onMounted, onServerPrefetch, type Ref } from "vue"
	import * as cheerio from "cheerio";
	import fs from "node:fs"
	import $ from "jquery"
	import { currentElementAtom } from "@/lib/state"
	
	let fileHandler: Ref<string>;
	onServerPrefetch(async () => {
		fileHandler = ref(
			cheerio.load(
				fs.readFileSync("sites/project1/home.html")
			).html()
		)
	})

	const fileSaveHandler = () => {
		console.log("hello")
	}
	
	onMounted(() => {
		console.log(fileHandler)

		console.log("hello")
		const cssClasses = "inner-border-2 inner-border-blue-500"
		let currentElement: JQuery<HTMLElement>

		const hoverFunction = (e: JQuery.Event) => {
			if(!$(e).is(currentElement)) {
				$(e).toggleClass(cssClasses)
			}
		}

		$("#file").children()
			.on("mouseenter", hoverFunction)
			.on("mouseleave", hoverFunction)
			.on("click", function(e) {
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
	<div id="file" v-html="fileHandler"></div>
</template>../state/state