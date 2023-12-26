const getConfig = () => {
    const isExpoBuild = process.env.EXPO_PUBLIC_IS_EXPO_BUILD === 'true'
    if (isExpoBuild) {
        return {
            OPENWEATHER_API_KEY: process.env.EXPO_PUBLIC_OPENWEATHER_API_KEY 
        }
    }
    throw(Error('Unknown build environment. Please check your environment variables.'))
    // TODO: add more environments for building android, ios, running different build tools etc
}

export const Config = getConfig()
