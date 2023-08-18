import React from 'react'

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
            // className="w-full h-screen bg-gradient-to-b from-cyan-500 to-blue-500 text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <h3 className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </h3>
                </div>
                <p className="text-xl mt-20">
                    {' '}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum, consequatur adipisci. Voluptatibus obcaecati,
                    corrupti ducimus eum nihil non repellendus deleniti
                    recusandae expedita quaerat animi laborum dolorem eos rem!
                    Debitis quasi in itaque odit explicabo ad error impedit
                    possimus, ullam delectus laudantium, culpa temporibus facere
                    officia, voluptate esse at obcaecati? Quisquam!
                </p>
                <br />
                <p className="text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    culpa aliquam est voluptatem provident nemo quos beatae
                    placeat dolor! Atque culpa iste magnam rerum modi facere
                    voluptatibus laudantium, omnis aliquid reiciendis blanditiis
                    nemo quibusdam, expedita totam distinctio ipsa similique
                    exercitationem iusto voluptates, sunt corrupti voluptate
                    laborum? Quaerat dolores possimus ut.
                </p>
            </div>
        </div>
    )
}

export default About
