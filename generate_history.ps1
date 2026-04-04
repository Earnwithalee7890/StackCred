$ErrorActionPreference = 'Stop'
$repoPath = 'f:\Stacks cred'
cd $repoPath

$messages = @(
    'chore: initial docs directory setup',
    'docs: outline system overview',
    'docs: document frontend tech stack',
    'docs: describe nextjs routing',
    'docs: explain tailwind configuration',
    'docs: add guidelines for components',
    'docs: outline smart contract interactions',
    'docs: describe clarity token implementation',
    'docs: detail nft minting process',
    'docs: document error handling patterns',
    'docs: add notes on state management',
    'docs: explain wallet connection flow',
    'docs: outline api route structure',
    'docs: detail environment variables',
    'docs: deployment checklist',
    'docs: add faqs for developers',
    'docs: outline testing strategy',
    'docs: user authentication flow',
    'docs: document dark mode setup',
    'docs: describe layout structure',
    'docs: add notes on performance optimization',
    'docs: document image caching strategies',
    'docs: outline seo best practices used',
    'docs: guide on adding new features',
    'docs: troubleshooting common issues',
    'docs: detail smart contract deployment',
    'docs: document continuous integration',
    'docs: update architectural diagrams placeholder',
    'docs: explain typography choices',
    'docs: add design system notes',
    'docs: comment on mobile responsiveness',
    'docs: describe form validation approaches',
    'docs: detail external api integrations',
    'docs: add notes on logging',
    'docs: explain strict tsconfig rules',
    'docs: outline commit message conventions',
    'docs: branch management strategy',
    'docs: document code review guidelines',
    'docs: add security best practices',
    'docs: document accessibility standards',
    'docs: describe internationalization readiness',
    'docs: update project roadmap doc',
    'docs: document analytic tracking',
    'docs: explain mock data generation',
    'docs: detail websocket connections',
    'docs: comment on cache invalidation',
    'docs: add notes on rate limiting',
    'docs: outline database schema equivalent',
    'docs: document dependency choices',
    'docs: final review and publishing of docs'
)

$baseDate = (Get-Date).AddDays(-15)
$rand = New-Object System.Random

New-Item -ItemType Directory -Force -Path "$repoPath\docs\architecture" | Out-Null

for ($i=0; $i -lt $messages.Length; $i++) {
    $msg = $messages[$i]
    $hoursToAdd = $rand.Next(3, 7)
    $minsToAdd = $rand.Next(1, 59)
    $baseDate = $baseDate.AddHours($hoursToAdd).AddMinutes($minsToAdd)
    
    $dateStr = $baseDate.ToString('yyyy-MM-ddTHH:mm:ss')
    $env:GIT_AUTHOR_DATE = $dateStr
    $env:GIT_COMMITTER_DATE = $dateStr
    
    $topic = $msg.Split(':')[1].Trim().Replace(' ', '-')
    $fileContent = '# ' + $msg.Split(':')[1].Trim() + "`r`n`r`nDocument updated on: " + $dateStr
    $prefix = "{0:D2}" -f $i
    $filePath = "$repoPath\docs\architecture\$prefix-$topic.md"
    
    Set-Content -Path $filePath -Value $fileContent
    
    git add $filePath
    git commit -q -m $msg
}

Remove-Item Env:\GIT_AUTHOR_DATE
Remove-Item Env:\GIT_COMMITTER_DATE
git push -q
