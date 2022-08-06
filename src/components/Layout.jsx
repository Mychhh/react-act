import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (

        <>
            <tr>
                <td>
                    <Link to="/">Main</Link>
                </td>
                <td>
                    <Link to="/Exercise1">Exercise1</Link>
                </td>
                <td>
                    <Link to="/Exercise2">Exercise2</Link>
                </td>
                <td>
                    <Link to="/Exercise3">Exercise3</Link>
                </td>
                <td>
                    <Link to="/Exercise4">Exercise4</Link>
                </td>
                <td>
                    <Link to="/Exercise5">Exercise5</Link>
                </td>
                <td>
                    <Link to="/Exercise6">Exercise6</Link>
                </td>
            </tr>

            <Outlet />
        </>

    );
}

export default Layout;