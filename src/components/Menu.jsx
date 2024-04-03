import { Box, Button, Flex } from '@radix-ui/themes'

export default () => {
	return (
		<Flex gap="4">
			<Box>
				<Button variant="ghost" color="ruby">File</Button>
			</Box>
			<Box>
				<Button variant="ghost" color="ruby">Edit</Button>
			</Box>
			<Box>
				<Button variant="ghost" color="ruby">Settings</Button>
			</Box>
			<Box>
				<Button variant="ghost" color="ruby">Help</Button>
			</Box>
		</Flex>
	)
}