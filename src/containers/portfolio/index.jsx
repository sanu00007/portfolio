import React from "react";
import { CiLink } from "react-icons/ci";
import PageHeaderContent from "../../components/pageHeaderContent";
const Portfolio=()=>{
    return(
        <section id="portfolio" className="portfolio">

            <PageHeaderContent 
             headerText = "My Portfolio" 
             icon={<CiLink size={40}/>}
             />
               
           

        </section>

    )

}

export default Portfolio;