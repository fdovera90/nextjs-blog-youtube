import Link from 'next/link'
import Layout from '../../components/Layout'

export default function primerPost({ data }) {
    const { id, title, body } = data;

    return (
        <Layout
            title='Primer post'
            description='Descripcion de mi primer post'
        >
            <h1>{id} - { title }</h1>
            <p>{ body }</p>
        </Layout>
    )
}

export async function getStaticPaths(){
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json()
        const paths = data.map( ({ id }) => ({
            params: {
                id: `${ id }`
            }
        }))
        return {
            paths,
            fallback: false
        }
        
    } catch (error) {
        console.log(error)
    }
}

export async function getStaticProps({ params }) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${ params.id }`);
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