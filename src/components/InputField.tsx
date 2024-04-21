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
import { useState, type ChangeEvent, useEffect } from "react"

export const InputField = () => {

	const [inputValue, setInputValue] = useState("")

	useEffect(() => {
		console.log(inputValue)
	}, [inputValue])

	return (
		<Command className="w-1/2">
			<CommandInput placeholder="Type a command or search..." onValueChange={setInputValue}/>
			<CommandList>
				<CommandGroup heading="Suggestions">
					<CommandItem>Calendar</CommandItem>
					<CommandItem>Search Emoji</CommandItem>
					<CommandItem>Calculator</CommandItem>
				</CommandGroup>
				<CommandSeparator />
				<CommandGroup heading="Settings">
					<CommandItem>Profile</CommandItem>
					<CommandItem>Billing</CommandItem>
					<CommandItem>Settings</CommandItem>
				</CommandGroup>
			</CommandList>
		</Command>
	)
}
