
import resolveConfig from "tailwindcss/resolveConfig"
import tailwindConfig from "tailwind.config.mjs"


export const List = () => {
    return (
        <>
            {resolveConfig(tailwindConfig)}
        </>
    )
}