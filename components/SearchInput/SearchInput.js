import SearchRounded from "@material-ui/icons/SearchRounded";
import styles from "./SearchInput.module.css";



const SearchInput  = ({...rest}) => {
    return( 
    <div className={styles.wrapper}>
        <p><SearchRounded color="inherit" /></p>
        <input className={styles.input}{...rest} />
    </div>
    );
};

export default SearchInput;