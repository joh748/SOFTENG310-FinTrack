export default function LoginForm() {
    const labelStyle = "text-2xl";
    const inputStyle = "border-2 border-blue-600 w-64 h-8 p-2 rounded-lg mb-4 mt-2";

    return (
        <form className="flex flex-col border-2 items-center border-blue-800 w-80 p-4 rounded-xl bg-blue-100">
            <h2 className="text-4xl font-bold text-center mb-4">Log Into Fintrack!</h2>
            <div className="flex flex-col">
                <label className={labelStyle} htmlFor="email">Email</label>
                <input className={inputStyle} type="email" id="email" name="email" />
            </div>
            <div className="flex flex-col">
                <label className={labelStyle} htmlFor="password">Password</label>
                <input className={inputStyle} type="password" id="password" name="password" />
            </div>
            <button className="w-60 bg-blue-600 text-white text-2xl p-2 rounded-lg mt-4">Login!</button>
        </form>
    );
}