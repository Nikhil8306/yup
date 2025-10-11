import painter from "../../../assets/homepainter.png";
import styles from "./Home.module.css";

import Memberbanner from "../../../components/Memberbanner/Memberbanner";
import SearchBar from "../../../components/Searchbar/Searchbar";
import Services from "../../../components/Services/Services";
import Match from "../../../components/Match/Match";
import Book from "../../../components/Book/Book";
import Referralsource from "../../../components/Referralsource/Referralsource";
import Testimonials from "../../../components/Testimonials/Testimonials";

function Home() {
    return <div className={styles.home}>
        <div className={styles.container}>
            
            <div className={styles.content}>

                <div className={styles.sec1}>

                    <div className={styles.head}>Find the <br/> Perfect Painter.</div>
                    <div className={styles.description}>
                        Answer a few quick questions and get matched with up to 3 top-rated pros in your area — no spam, no pressure.
                    </div>

                </div>

                <div className={styles.painter}>
                    <img src={painter} alt="Painter" className={styles.painterimg}/>
                </div>

                <div className={styles.sec2}>
                    <div className={styles.find}>
                        <SearchBar></SearchBar>
                    </div>
                    
                    <div className={styles.end}>
                        The Marketplace to Connect with Pros
                    </div>
                </div>

            </div>

        </div>

        <Memberbanner/>
        <Services heading={"What Do You Want Painted?"}/>
        <Match className={styles.match}/>
        <Book/>
        <Referralsource/>
        <Testimonials/> 
        <div style={{height: "10rem"}}></div>

    </div>
}

export default Home;