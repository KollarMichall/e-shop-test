import { Center, Container, Image, Text } from '@chakra-ui/react';
import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <Container>
                    <Image src={'https://i.imgur.com/Oqnene0.png'} />
                    <Center>
                        <Text fontSize={25}>Sorry this page is in the Garbage</Text>
                    </Center>
                </Container>
            );
        }

        return this.props.children;
    }
}
export default ErrorBoundary