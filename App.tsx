function MyButton({ title }: { title: string}) {
    return (
        <button>{title}</button>
    )
}

export default function App() {
    return (
        <div>
            <h1>Hi this is my Portfolio</h1>
            <MyButton title="Press Me" />
        </div>
    )
}