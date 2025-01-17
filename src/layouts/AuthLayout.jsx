/* eslint-disable react/prop-types */
const AuthLayout = ({ children }) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
                {children}
            </div>
        </div>
    )
}

export default AuthLayout