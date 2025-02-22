import { createContext, useContext } from "react"
import { ISliderContext } from "../Interface/Components"

export const SliderContext = createContext<ISliderContext | null>(null)

export const useGetSliderContext = () => {
	const object = useContext(SliderContext)
	if (!object) {
		throw new Error('useGetSliderContext must be used within a Provider')
	}
  return object
}
