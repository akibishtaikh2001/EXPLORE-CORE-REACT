export default function Food({ isHungry }) {

    if (isHungry) {
        return <li>I will eat Briyani</li>
    }
    return <li>Go to Sleep</li>
}