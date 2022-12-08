import NavigationBar from "./NavigationBar";
import './text.css'

const getEntries = () => JSON.parse(
    window.localStorage.getItem('recordEntries')
)

// When storing item in local storage need to stringify the value and parse while reading
const setEntries = () => JSON.parse(
    window.localStorage.setItem('recordEntries', JSON.stringify(items))
)

export default function Record() {
    return (
        <div className="bg">
            <NavigationBar/>
            
        </div>
    )
}
