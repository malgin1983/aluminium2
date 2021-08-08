import type { NextPage } from 'next'
import productStyles from "./styles.module.css";
import Link from "next/link";

const ProductPage: NextPage = () => {

    return (
        <div >
            <h3>PRODUCTS</h3>
            <Link href={'/'}>
                <a className={productStyles.link}>Main</a>
            </Link>
        </div>
    )
}

export default ProductPage