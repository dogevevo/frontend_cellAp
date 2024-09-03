import { Outlet } from "react-router-dom"


function AuthLayout() {
  return (
    <>
        <main className=" rOGER container mx-auto md:grid md:grid-cols-2 mt-12 gap-10 p-4 items-center justify-center ">
            <Outlet/>
        </main>
    </>
  )
}

export default AuthLayout