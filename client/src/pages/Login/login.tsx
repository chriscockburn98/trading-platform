export default function Login({ setToken }: Props) {
    return (
        <form>
            <label>
                <p>Username</p>
                <input type="text" />
            </label>
            <label>
                <p>Password</p>
                <input type="password" />
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}
interface Props {
    // any props that come into the component
    setToken: Function
}
