const skillGroups = [
    {
        label: '01 / Frontend',
        title: 'Interfaces that feel clear and alive.',
        skills: [
            { name: 'React.js', icon: 'react/react-original.svg' },
            { name: 'Next.js', icon: 'nextjs/nextjs-original.svg' },
            { name: 'JavaScript', icon: 'javascript/javascript-original.svg' },
            { name: 'HTML5', icon: 'html5/html5-original.svg' },
            { name: 'CSS3', icon: 'css3/css3-original.svg' },
        ],
    },
    {
        label: '02 / Backend & Data',
        title: 'Reliable foundations behind the UI.',
        skills: [
            { name: 'Node.js', icon: 'nodejs/nodejs-original.svg' },
            { name: 'Express.js', icon: 'express/express-original.svg' },
            { name: 'MongoDB', icon: 'mongodb/mongodb-original.svg' },
        ],
    },
    {
        label: '03 / Workflow',
        title: 'Tools that keep ideas moving.',
        skills: [
            { name: 'Git', icon: 'git/git-original.svg' },
            { name: 'GitHub', icon: 'github/github-original.svg' },
            { name: 'Vercel', icon: 'vercel/vercel-original.svg' },
            { name: 'VS Code', icon: 'vscode/vscode-original.svg' },
        ],
    },
]

const iconBaseUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/'

function Skills() {
    return (
        <main className="skills-page">
            <section className="skills-hero" aria-labelledby="skills-title">
                <div>
                    <p className="skills-eyebrow">The toolkit / Full stack developer</p>
                    <h1 id="skills-title">The right tools<br />for <span>good work.</span></h1>
                </div>
                <p className="skills-intro">
                    I work across the stack to shape ideas into responsive interfaces, thoughtful APIs,
                    and products that are ready to ship.
                </p>
            </section>

            <section className="skills-groups" aria-label="Technical skills">
                {skillGroups.map((group) => (
                    <article className="skill-group" key={group.label}>
                        <div className="skill-group-heading">
                            <p>{group.label}</p>
                            <h2>{group.title}</h2>
                        </div>
                        <div className="skill-list">
                            {group.skills.map((skill) => (
                                <div className="skill-item" key={skill.name}>
                                    <div className="skill-icon-wrap">
                                        <img src={`${iconBaseUrl}${skill.icon}`} alt="" />
                                    </div>
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </article>
                ))}
            </section>

            <div className="skills-note">
                <span className="skills-note-mark" aria-hidden="true">+</span>
                <p>Always learning. Currently exploring system design, DSA, and better ways to build.</p>
            </div>
        </main>
    )
}

export default Skills
