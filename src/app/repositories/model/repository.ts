export interface Repository {
    name: string;
    owner: { login: string };
    description: string;
    language: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    created_at: Date;
}
