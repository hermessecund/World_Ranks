
import Layout from "./../components/Layout/Layout";
import SearchInput from "./../components/SearchInput/SearchInput";
import CountriesTable from "./../components/CountriesTable/CountriesTable";
import { useState } from "react";
import styles from "../styles/Home.module.css"

export default function Home({ countries }) {
  console.log(countries);

  const [keyword, setKeyword] = useState("");
  const filterdCountries = countries.filter((country) => 
    country.name.toLowerCase().includes(keyword) ||
    country.region.toLowerCase().includes(keyword) ||
    country.subregion.toLowerCase().includes(keyword)
  );
  
  const onInputeChange = (event)=>{
    event.preventDefault();
    setKeyword(event.target.value.toLowerCase());
  };
  
  return ( 
  <Layout>
    
    <div className={styles.inputContainer}>
    <div className={styles.counts}>Found {countries.length} countries</div>
    
    <div className={styles.input}><SearchInput placeholder="Search Country by Name, Region OR SubRegion" onChange = {onInputeChange} /></div>
    </div>

    <CountriesTable countries={filterdCountries} />
  
  </Layout>
  );
};


export const getStaticProps = async() => {
  
  
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();
  return{
    props:{
      countries,
    },
  };
};