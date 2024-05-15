export const getConfig = (jsonFile: unknown) => {
	return JSON.parse(JSON.stringify(jsonFile))
}
