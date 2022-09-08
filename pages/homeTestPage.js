import { useEffect, useState } from "react";
import "./styles.css";

const LoadingComponent = () => <div>Loading...</div>;

export default function HomeLoadingTest() {
    const [isLoading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const onLoadEffect = () => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);

        setTimeout(() => {
            setIsError(true);
        }, 10000);
    };

    useEffect(onLoadEffect, []);

    if (isLoading) {
        return <LoadingComponent />;
    }
    return (
        <div className="App">
            {isError ? (
                <div style={{ color: "red" }}>Something went wrong</div>
            ) : (
                <div>Data that I want to display</div>
            )}
        </div>
    );
}