# Our Data — ensimmäinen sivustoversio

Staattinen, suomenkielinen WP4-tulossivu GitHub Pagesia varten. Ei rakennusvaihetta, asennettavia riippuvuuksia tai ulkoisia fontteja. Toimii myös suoraan avaamalla index.html selaimessa. Sisältö näkyy ilman JavaScriptiä.

## Tiedostot
- index.html: kaikki tekstit, palvelut ja linkit.
- styles.css: ulkoasu ja mobiilinäkymä.
- script.js: mobiilivalikko ja aktiivisen osion korostus.
- .nojekyll: GitHub Pagesin staattinen julkaisu.

## Esikatselu
Pura ZIP ensin kokonaan. Avaa index.html selaimessa. CSS:n ja JavaScriptin tulee olla samassa kansiossa HTML-tiedoston kanssa.

## Julkaisu GitHub Pagesissa
1. Luo ourdata-repositorio ja siirrä tämän kansion tiedostot sen juureen.
2. Valitse Settings / Pages / Deploy from a branch, haara main ja kansio / (root).
3. Tarkista syntyvä GitHub Pages -osoite.
4. Liitä ourdata.fi vasta myöhemmin Pagesin Custom domain -asetuksista. Määritä verkkotunnuksen DNS erikseen GitHubin kulloistenkin ohjeiden mukaan. CNAME-tiedostoa ei ole vielä lisätty.

## Ennen julkista käyttöönottoa
- Vahvista MTSR-2026- ja metadata-repojen osoitteet ja julkisuus. Osoitteet on poimittu aiemmasta projektikeskustelusta; niitä ei voitu tarkistaa verkosta tämän version aikana.
- Lisää datatuotetyökalun oma jakolinkki.
- Agrihubin Datakuvaukset-repo on päälinkki. Oma metadata-repo on tausta-aineistoa.
- Pontus-X-demon linkki: https://gptlab.rd.tuni.fi:44447/ (käyttäjän antama). Lisää tilannekuvan osoite. Preemiodemo on mukana premium/-kansiossa.
- Täsmennä premium-laskurien kuvaus sekä prototyyppien kehitystilat.
- Tarkista WP4:n tulosten rajaus ja hankkeen perustiedot; lähde https://www.luke.fi/en/projects/our-data.
- Lisää yhteyshenkilön tiedot ja viralliset organisaatio-/rahoittajalogot niiden käyttöohjeiden mukaisesti.

Puuttuvia URL-osoitteita ei ole korvattu näennäisillä linkeillä. Niissä lukee 'Demolinkki lisätään'. Palveluideoiden lista on alustava sisältöehdotus.

## Päivittäminen
Muokkaa tekstejä ja linkkejä index.html-tiedostossa. Etsi palvelu sen id-tunnisteella (sanastot, gpt, datatuotteet, pontus). Ulkoasun päävärit ovat styles.css-tiedoston :root-osassa. Kaikki polut ovat suhteellisia, joten sivusto toimii myös repositorion alihakemistossa.

Versio: 23.11.2026 / v7. Ei vielä julkaistu GitHubiin tai ourdata.fi-verkkotunnukseen.

## Preemiodemon upotus (v3)
Liitteen preemiomalli-sivusto-v10(1).zip tiedostot ovat premium/-kansiossa sellaisinaan. Avaa Kokeile preemiomallin demoa: iframe ladataan vasta avattaessa. Erillinen linkki avaa demon omaan välilehteen. Demo käyttää paikallisten kuvien lisäksi ulkoisia Unsplash-kuvia; nämä vaativat verkkoyhteyden. Julkaise myös koko premium/-kansio. Muokkaa demon sisältöä sen omissa tiedostoissa.

## Versio 4
- Preemiodemon iframe-upotus poistettu. Demo avataan premium/index.html-linkistä omalle välilehdelle.
- Nykyisessä lähtöversiossa oli vain yksi upotus. Valtakunnallisen tilannekuvan tiedostoja tai URL-osoitetta ei ole mukana; sen kohdalla säilyy demolinkin täydennysmerkintä.
- Perusfontti 18 px (mobiilissa 17 px), tummempi tekstiväri.
- Tutkimusosiossa neljä tunnistettua paperia sekä väitöskirjan esittely ja tavoite kevät 2027. Otsikko on aiheen kuvaus, ei vahvistettu väitöskirjan nimi.
- Viitteiden tiedot: Tampereen yliopiston tutkimusportaali (MIPRO 2024, Data in Brief 2025, FinDrones/Springer 2026). MTSR-paperin tiedot aiemmasta projektikeskustelusta; lopullinen julkaisulinkki puuttuu. Täydennä tarvittaessa muita osajulkaisuja.

## Versio 5
Poistettu Palveluideat jatkokehitykseen -osio.

## Versio 6
Poistettu Tutustu tuloksiin -painike. Datatuotetyökalun kuvaus päivitetty: MTSR-tutkimuksen Custom GPT, käynnissä oleva siirto ChatGPT-pluginiksi sekä nykyisen ja tulevan työkalun linkkien sijainti.

## Versio 7
Virallinen Our Data -logo lisätty yläpalkkiin. Alkuperäinen läpinäkyvä PNG säilytetty assets/ourdatalogo.png-tiedostossa. Näyttöleveys 176 px, pienillä näytöillä 145 px.
