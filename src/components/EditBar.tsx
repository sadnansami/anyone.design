import { useEffect } from "react"
import { useStore } from "@nanostores/react"
import { currentElementAtom } from "../state/currentElement"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export const EditBar = () => {
    const $currentElementAtom = useStore(currentElementAtom)

    return (
        <aside className="dark w-96 fixed top-1/2 -translate-y-1/2 right-0">
			<Card className="min-h-[98vh]">
				<CardHeader>
					<CardTitle>Card Title</CardTitle>
					<CardDescription>{$currentElementAtom}</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex gap-1.5">
						<div>
							<Label htmlFor="email">Email</Label>
							<Input type="email" id="email" placeholder="Email" />
						</div>
						<div>
							<Label htmlFor="email">Email</Label>
							<Input type="email" id="email" placeholder="Email" />
						</div>
					</div>
				</CardContent>
				<CardFooter>
					<p>Card Footer</p>
				</CardFooter>
			</Card>
		</aside>
    )
}