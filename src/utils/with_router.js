import { useNavigate, useParams, useLocation, useSearchParams } from "react-router-dom";
export default function withRouter(Component) {
    return function WithRouter(props) {
        const navigate = useNavigate();
        const params = useParams();
        const location = useLocation();
        const [searchParams] = useSearchParams();
        const query = Object.fromEntries(searchParams.entries()) // 转换为对象;
        const router = { navigate, params, location, query }
        return <Component {...props} router={router} />;
    };
}