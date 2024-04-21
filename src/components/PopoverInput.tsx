
import Fuse from "fuse.js"
import config from "tailwindcss/defaultConfig"
import resolveConfig from "tailwindcss/resolveConfig"
import { useState, type ChangeEvent, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
	Command,
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "@/components/ui/command"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"

export const PopoverInput = () => {

	const [inputValue, setInputValue] = useState("")
	const [searchResult, setSearchResult] = useState<any[]>([])
	const [isOpen, setIsOpen] = useState(false)

	const { theme } = resolveConfig(config)
	const configList = Object.keys(theme.height).map((key) => key)

	const fuse = new Fuse(configList, {
		threshold: 0.1,
	});

	useEffect(() => {
		console.log(inputValue)
		setSearchResult(fuse.search(inputValue))
	}, [inputValue])

	return (
		<Popover open={isOpen}>
			<PopoverTrigger asChild>
				<Input
					className="w-1/4"
					type="text"
					placeholder="Type a command or search..."
					value={inputValue}
					onChange={e => {
						setInputValue(e.currentTarget.value)
						!isOpen ? setIsOpen(true) : false
					}}
					onBlur={e => setIsOpen(false)}
					onKeyDown={e => {
						
						if(e.key === "Enter") {
							setInputValue(searchResult[0].item)
							setIsOpen(false)
						} else if(e.key === "Escape") {
							setIsOpen(false)
						}
					}}
					/>
			</PopoverTrigger>
			<PopoverContent onOpenAutoFocus={e => e.preventDefault()} className="popover-content w-80">        
				{searchResult.map(({item}, id) => {
					return (
						<button
							className="search-result block hover:bg-background"
							type="button"
							key={id}
							value={item}
							onClick={e => setInputValue(e.currentTarget.value)}
							
						>
							{JSON.stringify(searchResult)}
						</button>
					)
				})}
			</PopoverContent>
		</Popover>
	)
}
