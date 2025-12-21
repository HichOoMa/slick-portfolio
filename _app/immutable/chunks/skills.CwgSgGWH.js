import{A as e}from"./assets.C69NlHTr.js";const d=(o,...t)=>{const i={...o};return Object.keys(i).forEach(a=>{t.includes(a)&&delete i[a]}),i},p=`# Go

---

[\`Go\`](https://golang.org/) is an open source programming language developed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. Go is statically typed, compiled programming language designed for building simple, fast, and reliable software. Go compiles quickly to machine code yet has the convenience of garbage collection and the power of run-time reflection.

Go was designed with concurrency in mind and provides built-in support for concurrent programming through goroutines and channels. This makes it particularly well-suited for building scalable network services, distributed systems, and cloud infrastructure.

<br/>

Go is :

- **Fast**: Go compiles quickly to machine code and has excellent performance characteristics for server applications.
- **Concurrent**: Built-in support for concurrent programming with goroutines and channels makes it easy to build scalable applications.
- **Simple**: Clean syntax and minimalist design philosophy make Go code easy to read, write, and maintain.
- **Reliable**: Strong static typing, garbage collection, and extensive testing support help build robust applications.

<br/>

## Example

\`\`\`go
package main

import (
    "fmt"
    "time"
)

func worker(id int, jobs <-chan int, results chan<- int) {
    for j := range jobs {
        fmt.Printf("Worker %d processing job %d\\n", id, j)
        time.Sleep(time.Second)
        results <- j * 2
    }
}

func main() {
    jobs := make(chan int, 100)
    results := make(chan int, 100)

    // Start 3 workers
    for w := 1; w <= 3; w++ {
        go worker(w, jobs, results)
    }

    // Send 5 jobs
    for j := 1; j <= 5; j++ {
        jobs <- j
    }
    close(jobs)

    // Collect results
    for a := 1; a <= 5; a++ {
        <-results
    }
}
\`\`\`

### Key Features

- **Goroutines**: Lightweight threads managed by the Go runtime
- **Channels**: Type-safe communication between goroutines
- **Interfaces**: Implicit satisfaction enables flexible design patterns
- **Built-in tooling**: Comprehensive standard library and development tools

> Go's design philosophy emphasizes simplicity, readability, and efficiency, making it an excellent choice for modern software development, especially in cloud-native and distributed systems.`,s=o=>o,u=[s({name:"Programming Languages",slug:"pro-lang"}),s({name:"Frontend",slug:"frontend"}),s({name:"Backend",slug:"backend"}),s({name:"Languages",slug:"lang"}),s({name:"Databases",slug:"db"}),s({name:"DevOps & Cloud",slug:"devops"}),s({name:"Tools & Others",slug:"tools"}),s({name:"Markup & Style",slug:"markup-style"})],n=o=>{const t=d(o,"category");return o.category&&(t.category=u.find(i=>i.slug===o.category)),t},b=(...o)=>c.filter(t=>o.length===0?!0:o.includes(t.slug)),f=o=>{const t=[],i=[];return c.forEach(a=>{if(o.trim()&&!a.name.toLowerCase().includes(o.trim().toLowerCase()))return;if(!a.category){i.push(a);return}let r=t.find(g=>{var l;return g.category.slug===((l=a.category)==null?void 0:l.slug)});r||(r={items:[],category:a.category},t.push(r)),r.items.push(a)}),i.length!==0&&t.push({category:{name:"Others",slug:"others"},items:i}),t},m="Skills",c=[n({slug:"js",color:"yellow",description:"Proficient in modern JavaScript ES6+ features, asynchronous programming, and various JavaScript runtime environments.",logo:e.JavaScript,name:"JavaScript",category:"pro-lang"}),n({slug:"ts",color:"blue",description:"Strong experience with TypeScript for type-safe development in both frontend and backend applications.",logo:e.TypeScript,name:"TypeScript",category:"pro-lang"}),n({slug:"go",color:"cyan",description:p,logo:e.Go,name:"Go",category:"pro-lang"}),n({slug:"sql",color:"orange",description:"Proficient in SQL for database design, optimization, and complex query development across various database systems.",logo:e.PostgreSQL,name:"SQL",category:"pro-lang"}),n({slug:"html",color:"orange",description:"Expert knowledge of semantic HTML5 and modern web standards for building accessible web applications.",logo:e.HTML,name:"HTML",category:"markup-style"}),n({slug:"css",color:"blue",description:"Advanced CSS skills including Flexbox, Grid, animations, and responsive design principles.",logo:e.CSS,name:"CSS",category:"markup-style"}),n({slug:"tailwind",color:"cyan",description:"Experienced with Tailwind CSS for rapid UI development and consistent design systems.",logo:e.Tailwind,name:"Tailwind CSS",category:"markup-style"}),n({slug:"reactjs",color:"cyan",description:"Extensive experience building dynamic, high-performance frontend applications with React.js, including hooks, context, and modern patterns.",logo:e.ReactJs,name:"React.js",category:"frontend"}),n({slug:"nextjs",color:"black",description:"Proficient in Next.js for building full-stack React applications with SSR, SSG, and API routes.",logo:e.NextJs,name:"Next.js",category:"frontend"}),n({slug:"nodejs",color:"green",description:"Experienced in building scalable backend services and APIs using Node.js with various frameworks and libraries.",logo:e.NodeJs,name:"Node.js",category:"backend"}),n({slug:"expressjs",color:"gray",description:"Proficient in Express.js for building REST APIs and web applications with middleware and routing.",logo:e.ExpressJs,name:"Express.js",category:"backend"}),n({slug:"nestjs",color:"red",description:"Experienced with NestJS for building enterprise-grade, modular backend applications with TypeScript.",logo:e.NestJs,name:"NestJS",category:"backend"}),n({slug:"mongodb",color:"green",description:"Extensive experience with MongoDB for document-based data storage, aggregation pipelines, and performance optimization.",logo:e.MongoDB,name:"MongoDB",category:"db"}),n({slug:"postgresql",color:"blue",description:"Proficient in PostgreSQL for relational data modeling, complex queries, and database optimization.",logo:e.PostgreSQL,name:"PostgreSQL",category:"db"}),n({slug:"redis",color:"red",description:"Experienced with Redis for caching, session storage, and real-time pub/sub messaging systems.",logo:e.Redis,name:"Redis",category:"db"}),n({slug:"docker",color:"blue",description:"Proficient in containerization with Docker for development, testing, and production deployments.",logo:e.Docker,name:"Docker",category:"devops"}),n({slug:"aws",color:"orange",description:"Experienced with AWS services including EC2, S3, Lambda, Amplify for cloud infrastructure and deployments.",logo:e.AWS,name:"AWS",category:"devops"}),n({slug:"kafka",color:"black",description:"Experience with Apache Kafka for building real-time data pipelines and event-driven architectures.",logo:e.Kafka,name:"Kafka",category:"devops"}),n({slug:"github-actions",color:"black",description:"Proficient in GitHub Actions for CI/CD pipelines, automated testing, and deployment workflows.",logo:e.GitHub,name:"GitHub Actions",category:"devops"}),n({slug:"git",color:"orange",description:"Expert knowledge of Git version control for collaborative development and code management.",logo:e.Git,name:"Git",category:"tools"}),n({slug:"websocket",color:"green",description:"Experienced in implementing real-time communication using WebSocket for chat applications and live updates.",logo:e.Websocket,name:"WebSocket",category:"tools"}),n({slug:"chrome-extensions",color:"yellow",description:"Experience building Chrome Extensions for web automation and enhanced browsing functionality.",logo:e.ChromeExtension,name:"Chrome Extensions",category:"tools"}),n({slug:"stripe",color:"purple",description:"Experienced with Stripe payment integration for secure online transactions and subscription management.",logo:e.Stripe,name:"Stripe",category:"tools"}),n({slug:"mysql",color:"blue",description:"Proficient in MySQL database design, optimization, and complex query development.",logo:e.MySQL,name:"MySQL",category:"db"}),n({slug:"oauth",color:"green",description:"Experienced with OAuth2 authentication and authorization systems for secure API access.",logo:e.OAuth,name:"OAuth2",category:"tools"})],h={title:m,items:c};export{h as S,b as a,f as g};
