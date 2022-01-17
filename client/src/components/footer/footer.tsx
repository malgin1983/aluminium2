import styles from './footer.module.css';

export const Footer = () => {
    return (
        <div className={styles.footer}>
                <span>{'© Copyrights Okna Premium company. All Rights Reserved'}</span>
                <a >
                    Created with Malgin Studio, template by ESSEX Studio
                </a>
        </div>
    )
}

export default Footer;