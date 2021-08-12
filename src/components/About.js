import React, {useState, useEffect} from 'react';
import sanityClient from '../client.js';
import b from '../Breakthrough.png';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react'


const About = () => {



    const [author, setAuthor] = useState(null);

    const builder = imageUrlBuilder(sanityClient)
    const urlFor = (source) => builder.image(source)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data) => setAuthor(data[0]))
        .catch(console.error)
    }, [])

    if (!author) return <div>Loading...</div>

    return (
        <main className="relative">
            <img src={b} alt="an" className="w-full absolute"/>
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
                    <img src={urlFor(author.authorImage).url()} className="w-32 h-32 rounded lg:w-64 lg:h-64 mr-8" alt={author.name}/>
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="text-6xl text-green-300 mb-4">
                            Hey there{" "}
                            <span className="text-green-100">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                        <BlockContent blocks={author.bio} projectId="" dataset="production" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default About