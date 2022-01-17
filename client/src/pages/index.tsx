import type { NextPage } from 'next'
import { Button } from 'react-bootstrap'
import Link from 'next/link'

import styles from '../styles/Home.module.css'
import productStyles from '../pages/products/styles.module.css';
import {RootState, useAppDispatch } from "../redux/store/store";
import {fetchRecipes } from "../redux/actions/textAction";
import {useSelector} from "react-redux";
import {addText, removeText} from '../redux/reducers/mainText/mainText';

const IndexPage: NextPage = () => {
    const dispatch = useAppDispatch();
    const  texts = useSelector((state: RootState) => state.text)
    const  handleClick = () => {
        dispatch(addText(  ['text 3', 'text 4']))
        dispatch(fetchRecipes())
    }
    const handleClickDelete = () => {
        dispatch(removeText('text 3'))
    }

    return (
    <div className={styles.container}>

      <header className={styles.header}>
        <img src="/logo.svg" className={styles.logo} alt="logo" />
           <Button variant="primary" onClick={handleClick}>
              BUTTON BOOTSTRAP
           </Button>
          <ul>
              {texts?.text?.map((txt, idx) => {
                  return (
                    <li key={idx}>
                        {txt}
                    </li>
                  )
              })}
          </ul>
          <Button variant="primary" onClick={handleClickDelete}>
             Удалить элемент
          </Button>
          <Link href={'/products'}>
            <a className={productStyles.link}>Products</a>
          </Link>
      </header>
    </div>
  )
}

export default IndexPage
