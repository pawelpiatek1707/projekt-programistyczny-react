import { Navigate } from "react-router-dom";

interface Props {
    children: JSX.Element
}

export const ProtectedRoute: React.FC<Props> = ({
    children,
  }) => {
      const basic = localStorage.getItem('basic')
    if (!basic || basic !== process.env.REACT_APP_BASIC_TOKEN) {
      return <Navigate to='/' replace />;
    }

    return children;
  };