import React from 'react'
import {AboutContainer, AboutContent, AboutH1, AboutP} from './AboutSectionElements'

function AboutSectionElements() {
    return (
        <>
            <AboutContainer id="about">
                <AboutContent>
                    <AboutH1>Trochę o mnie</AboutH1>
                    <AboutP>
                        Cześć, mam na imię Krzysiek i jestem studentem Politechniki Gdańskiej. W 2021 roku 
                        uzyskałem stopień inżyniera z dziedziny informatyki w medycynie na wydziale Elektroniki i Technologii.
                        Aktualnie kontynuuję naukę na stopniu magisterskim z Sztucznej Inteligencji. Pomimo wykształcenia
                        bardziej w kierunku związanym z Machine Learning od dłuższego czasu zauważyłem, iż 
                        prawdziwą przyjemność sprawia mi tworzenie aplikacji webowych, w związku z czym swój 
                        wolny czas po studiach oraz pracy przeznaczam na naukę frontendu.
                    </AboutP>
                    {/* <AboutP>
                        Jeżeli chodzi o doświadczenie, aktualnie pracuję jako Junior Frontend Developer i zajmuję się nadzorem oraz
                        tworzeniem aplikacji w różnych frameworkach takich jak React.js, Vue.js również mam styczność z aplikacjami
                        czysto pisanymi w języku Java Script. Podczas swojej pracy nauczyłem się tworzyć dokumentacje projektowe
                        w języku Markdown. Praca w zespole również wpłynęła na moją znajomość posługiwania się Git'em jak i oprogramowaniem
                        Redmine służącym do zarządzanie problemów i śledzenia issues.
                    </AboutP> */}
                </AboutContent> 
            </AboutContainer>
        </>
    )
}

export default AboutSectionElements
