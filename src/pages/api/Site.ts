import fs from 'node:fs/promises';

class Site {
	siteName: string;

	constructor(siteName: string) {
		this.siteName = siteName
	}

	create():void {
		const folderName = `sites/${this.siteName}`;
		
		fs.access(folderName)
			.then(async () => {
				await fs.mkdir(folderName)
				console.log("hi")
			}).catch(err => console.log(err))
		console.log("bye")
	}
}

export default Site