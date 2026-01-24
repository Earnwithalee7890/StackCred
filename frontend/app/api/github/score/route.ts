import { NextResponse } from 'next/server';

const GITHUB_API_URL = 'https://api.github.com';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username');

    if (!username) {
        return NextResponse.json({ error: 'Username is required' }, { status: 400 });
    }

    try {
        // Fetch User Data
        const userRes = await fetch(`${GITHUB_API_URL}/users/${username}`);

        if (!userRes.ok) {
            if (userRes.status === 404) {
                return NextResponse.json({ error: 'User not found' }, { status: 404 });
            }
            throw new Error('Failed to fetch user data');
        }

        const userData = await userRes.json();

        // Fetch Recent Events (to estimate activity)
        const eventsRes = await fetch(`${GITHUB_API_URL}/users/${username}/events/public`);
        const eventsData = await eventsRes.ok ? await eventsRes.json() : [];

        // Simple Scoring Logic for MVP
        // 1 point per public event (commit, push, etc) in recent history (max 30 returned by default)
        // +10 points for > 50 public repos
        // +5 points for > 1 year old account

        let score = 0;

        // Activity Score
        score += eventsData.length;

        // Repo Score
        if (userData.public_repos > 50) score += 10;
        else if (userData.public_repos > 10) score += 5;

        // Account Age Score
        const createdYear = new Date(userData.created_at).getFullYear();
        const currentYear = new Date().getFullYear();
        if (currentYear - createdYear > 1) score += 5;

        return NextResponse.json({
            username: userData.login,
            avatar_url: userData.avatar_url,
            public_repos: userData.public_repos,
            account_created: userData.created_at,
            recent_events_count: eventsData.length,
            stack_score: score,
            eligible_for_badge: score >= 10 // Threshold for MVP badge
        });

    } catch (error) {
        console.error('GitHub API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
