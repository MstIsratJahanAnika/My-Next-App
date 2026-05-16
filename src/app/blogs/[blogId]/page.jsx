// import React from 'react';


// blogs data 
const blogs = [
    {
        id: 1,
        title: "Getting Started with Next.js",
        author: "John Doe",
        category: "Web Development",
        publishDate: "2026-05-10",
        readTime: "5 min read",
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        description:
            "Learn the basics of Next.js, including routing, layouts, and server-side rendering.",
    },
    {
        id: 2,
        title: "Understanding React Hooks",
        author: "Sarah Ahmed",
        category: "React",
        publishDate: "2026-05-08",
        readTime: "7 min read",
        image:
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        description:
            "A beginner-friendly guide to useState, useEffect, and custom hooks in React.",
    },
    {
        id: 3,
        title: "Tailwind CSS Tips and Tricks",
        author: "Michael Lee",
        category: "CSS",
        publishDate: "2026-05-05",
        readTime: "6 min read",
        image:
            "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
        description:
            "Improve your UI design workflow with these practical Tailwind CSS techniques.",
    },
    {
        id: 4,
        title: "Why Developers Love TypeScript",
        author: "Emily Johnson",
        category: "Programming",
        publishDate: "2026-05-01",
        readTime: "8 min read",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        description:
            "Explore how TypeScript improves code quality, scalability, and developer experience.",
    },
];


const BlogDetailPage = async ({ params }) => {

    const { blogId } = await params;

    const blog = blogs.find(blog => blog.id === parseInt(blogId)); //blogId in string form, convert to int
    console.log('show me params', blogId); //data promise dibe

    return (
        <div>
            <h3 className="text-3xl font-bold">Blog Detail Coming Soon</h3>

            {

                blog && <div>
                    <h2 className="font-bold text-3xl mb-2">{blog.title}</h2>
                    <p>{blog.description}</p>
                </div>
            }
        </div>
    );
};

export default BlogDetailPage;