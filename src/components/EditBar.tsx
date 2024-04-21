import { useEffect, type SyntheticEvent, type ChangeEvent } from "react"
import { useStore } from "@nanostores/react"
import { currentElementAtom } from "@/lib/state"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { twMerge } from "tailwind-merge"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import $ from "jquery"

class Handler {
	element: JQuery<HTMLElement>

	constructor(element: HTMLElement) {
		this.element = $(element)
	}

	width(e: ChangeEvent<HTMLInputElement>) {
		let value = `w-[${e.currentTarget.value}px]`
		if(e.currentTarget.name) {
			value = `${e.currentTarget.name}-${value}`
		}

		const elementClasses = this.element.attr("class")
		this.element.removeClass(elementClasses)
		this.element.addClass(twMerge(elementClasses, value))
		
		//this.element.addClass(`w-${value}`)
		console.log(value)
		console.log(e.currentTarget.value)
	}

	height(value: string | number) {

	}
}


export const EditBar = () => {
    const $currentElementAtom = useStore(currentElementAtom)

	const handler = new Handler($currentElementAtom!)

	//console.log(loadConfig("@/../tailwind.config.mjs"))

	//const fullConfig = resolveConfig(tailwindConfig)




    return (
        <aside className="dark w-96 fixed top-1/2 -translate-y-1/2 right-0">
			<Card className="min-h-[98vh]">
				<CardHeader>
					<CardTitle>Card Title</CardTitle>
					{$currentElementAtom && <CardDescription>{handler.element.prop("outerHTML")}</CardDescription>}
				</CardHeader>
				<CardContent>
					{/*
						CAUTION: methods within the `handler` object have to be passed in within a callback function to avoid changing the `this` binding within the `handler` object.
					*/}
					{
						$currentElementAtom &&
						<div className="flex gap-1.5">
							<div>
								<Label htmlFor="width">Width</Label>
								<Input
									type="number" 
									id="width" 
									placeholder="Width"
									onChange={e => handler.width(e)}
								/>
							</div>
							<div>
								<Label htmlFor="height">Height</Label>
								<Input
									type="number"
									id="height"
									placeholder="Height"
								/>
							</div>
						</div>
					}
				</CardContent>
				<CardFooter>
					<p>Card Footer</p>
				</CardFooter>
			</Card>
		</aside>
    )
}