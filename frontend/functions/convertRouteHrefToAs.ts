export const convertRouteHrefToAs = (routeName: string, argument: string | number): string => {
    const regex = /^(\/[a-zA-Z-]*)((\/)(\[{1,2}([a-zA-Z0-9.]*)]{1,2}))*$/
    const executedRegex = regex.exec(routeName)

    if (executedRegex) {
        return executedRegex[1] + executedRegex[3] + `${argument}`
    } else {
        // throw new Error('Wrong routeName')
        return routeName
    }
}