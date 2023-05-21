import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import
{
    ShyreLayout,
    ShyreLayoutHeader,
    ShyreLayoutNavLink,
    ShyreLayoutTitle,
}
from "./SharedLayout.styled";

const SharedLayout = () =>
{
    return (
        <ShyreLayout>
            <ShyreLayoutHeader>
                <nav>
                    <ShyreLayoutNavLink to="/">Home</ShyreLayoutNavLink>
                    <ShyreLayoutNavLink to="/movies">Movies</ShyreLayoutNavLink>
                </nav>
            </ShyreLayoutHeader>
            <hr/>
            <Suspense fallback={<ShyreLayoutTitle>Loading...</ShyreLayoutTitle>}>
                <Outlet /> 
            </Suspense>
        </ShyreLayout>
    );
};
export default SharedLayout;