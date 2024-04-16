
import { useStore } from "@nanostores/react"
import { currentElementAtom } from "../state/currentElement"
import { useEffect } from "react"
import $ from "jquery"

export default () => {
	const $currentElementAtom = useStore(currentElementAtom)

	const cssClasses = "inner-border-2 inner-border-blue-500"

	useEffect(() => {
		//console.log(($($currentElementAtom)?.attr("class") as unknown as JQuery<HTMLElement>)?.removeClass(cssClasses))
	})
			
	return (
		<>
			{ $currentElementAtom }
		</>
		
	)
}