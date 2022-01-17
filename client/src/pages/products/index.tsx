import *as React from 'react'
import productStyles from "./styles.module.css";
import Link from "next/link";
import Layout from "../../components/layout/layout";

interface  Iimage {
    id: number;
    productID: number;
    url: string
}

interface IProduct {
    id: number;
    title: string;
    description: string;
    images: Array<Iimage>
}

interface IProducts {
    data: Array<IProduct>

}

const ProductPage: React.FC<IProducts> = (props) => {
    const {data} = props

    React.useEffect(()=> {
        console.log('data effect', data);

    }, [data])

    return (
        <Layout >
            <div >
                <h3>PRODUCTS</h3>
                <ul>
                    {data?.length && (
                        data?.map( (elem, key) => {
                            return (
                                <li key={key}>
                                    <h4>{elem?.title}</h4>
                                    <p>{elem?.description}</p>
                                </li>
                            )
                        })
                    )}
                </ul>
                <Link href={'/'}>
                    <a className={productStyles.link}>Main</a>
                </Link>
            </div>
        </Layout>

    )
}
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:5500/api/products`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}
export default ProductPage
