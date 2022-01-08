import Link from "next/link";
import Layout from "../../components/Layout"

export default function index({ data }) {
    return (
        <Layout
            title='Lista de Posts'
            description='Descripcion de lista de posts'
        >
            <h1>Lista de Posts</h1>
            {
                data.map( ({ id, title, body }) => (
                    <div key={ id }>
                        <h3>
                            <Link
                                href={`/blog/${id}`}
                            >
                                <a>{id} - { title }</a>
                            </Link>
                        </h3>
                        <p>{ body }</p>
                    </div>
                ))
            }
        </Layout>
    )
}

export async function getStaticProps() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        return {
            props: {
                data
            }
        }
    } catch (error) {
        console.log(error)
    }
}