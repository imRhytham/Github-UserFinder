import GithubLogoImg from './../../Assets/github-icon.png';
import { Container } from './style';

export function Header() {
    return (
        <Container>
            <img src={GithubLogoImg} alt="Github Logo" />
            <h1>GitHub Explorer</h1>
        </Container>
    );
}