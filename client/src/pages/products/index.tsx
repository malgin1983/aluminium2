import productStyles from "./styles.module.css";
import Link from "next/link";
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:5000/api/products')
    const texts = await res.json()

    return {
        props: {
            texts,
        },
    }
}

const ProductPage: ({texts}: InferGetStaticPropsType<() => Promise<{ props: { texts: any } }>>) => JSX.Element = ({ texts }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div >
            <h3>PRODUCTS</h3>
            <ul>
                {texts?.length && (
                    texts?.map( (elem, key) => {
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
    )
}

export default ProductPage


