// Laskurien saavutettavat, erilliseen tiedostoon kootut selitteet.
const calculatorExplanations = {
  "f-volume": [
    "Viljan kokonaismäärä",
    "Vuodessa tuotetun kauran ja ohran yhteismäärä tonneina. Suurempi määrä kasvattaa sekä vertailupäästöjä että laskennallista preemiota, jos muut asetukset pysyvät ennallaan.",
    "Käyttäjän valitsema esimerkkimäärä, ei tilastosta haettu tai mitattu tilan sato."
  ],
  "f-oat": [
    "Kauran osuus",
    "Määrittää, kuinka suuri osuus viljamäärästä on kauraa ja kuinka suuri ohraa. Kauran tutkimuspohjainen vertailukerroin on 0,60 ja ohran 0,50 kg CO₂e/kg, joten suurempi kauraosuus nostaa laskennallista vertailujalanjälkeä.",
    "Viljajakauma on käyttäjän oletus; vertailukertoimet Luke 2025, rehuviljat."
  ],
  "f-reduction": [
    "Oletettu päästöero tutkimusvertailuun",
    "Kuvaa, kuinka monta prosenttia simuloidun tilan päästöt olisivat tutkimuspohjaista vertailutasoa pienemmät. Esimerkiksi kauran 0,60 kg CO₂e/kg ja 20 % ero tuottaa 0,48 kg CO₂e/kg. Tämä ei ole todennettu päästövähennys.",
    "Prosentti on käyttäjän skenaario-oletus, ei Luken mittaama tilakohtainen tulos."
  ],
  "f-price": [
    "Päästötonnin laskennallinen arvo",
    "Kuvitteellinen rahallinen arvo yhdelle tonnille CO₂-ekvivalenttia. Suurempi €/t kasvattaa preemiosummaa samassa suhteessa, kun päästöero ja jako-osuus pysyvät ennallaan.",
    "Havainnollistava hintaoletus, ei virallinen tukitaso tai päästöyksikön markkinahinta."
  ],
  "f-share": [
    "Preemiona maksettava osuus",
    "Määrittää, kuinka suuri osa päästöeron laskennallisesta rahallisesta arvosta maksettaisiin viljelijälle. Esimerkiksi 70 % tarkoittaa, että 70 € sadan euron skenaarioarvosta olisi preemiota.",
    "Kuvitteellinen jakosääntö, ei olemassa oleva korvausjärjestelmä."
  ],
  "s-volume": [
    "Lopputuotteen määrä vuodessa",
    "Simuloidun ruokaketjun lopputuotteen määrä tonneina vuodessa. Suurempi tuotantomäärä kasvattaa kokonaispäästöjä ja päästöeroa, jos tuotekohtaiset oletukset pysyvät samoina.",
    "Esimerkkimäärä, ei Suomen toteutunut tuotantotilasto."
  ],
  "s-intensity": [
    "Ruokaketjun vertailujalanjälki",
    "Koko tarkasteltavan tuotteen oletettu ilmastovaikutus yhtä tuotekiloa kohden. Esimerkiksi 1,00 kg CO₂e/kg tarkoittaa yhtä päästöekvivalenttikiloa tuotekiloa kohti. Ei sama kuin pelkän viljan tuotannon kerroin.",
    "1,00 kg CO₂e/kg on demon oletus, EI Luken ilmoittama koko ruokaketjun päästökerroin."
  ],
  "s-reduction": [
    "Ruokaketjun päästöero",
    "Prosentuaalinen ero valittuun koko ruokaketjun vertailujalanjälkeen. Esimerkiksi 1,00 kg CO₂e/kg ja 20 % ero antaa simuloiduksi jalanjäljeksi 0,80 kg CO₂e/kg.",
    "Käyttäjän oletus, ei havaittu tai kansalliseen inventaarioon hyväksytty päästövähennys."
  ],
  "s-price": [
    "Päästötonnin laskennallinen arvo",
    "Määrittää, kuinka monta euroa yksi simuloitu päästöerotonni vastaisi. Tätä käytetään vältetyn kustannuksen skenaarioarvon ja preemioiden laskemiseen.",
    "Esimerkkihinta, ei valtion todellinen säästö tai virallinen päästöyksikön hinta."
  ],
  "s-share": [
    "Preemioihin jaettava osuus",
    "Osuus simuloidun päästöeron rahallisesta arvosta, joka jaettaisiin ruokaketjun toimijoille. Loppuosa esitetään laskurissa valtion hypoteettisena nettohyötynä.",
    "Kuvitteellinen jakomalli. Nettohyöty ei ole todellinen julkistaloudellinen säästö."
  ],
  "s-farm": [
    "Maatilat",
    "Osuus koko simuloidusta preemiopotista, joka kohdistettaisiin maatiloille. Muutos säätää muiden toimijoiden osuuksia niin, että summa on 100 %.",
    "Käyttäjän valitsema jakosuhde, ei todellisten vähennysten mittaus."
  ],
  "s-transport": [
    "Kuljetukset",
    "Osuus preemiopotista kuljetuksille. Suurempi osuus kasvattaa kuljetusten kuvitteellista korvausta ja pienentää muiden osuuksia.",
    "Esimerkkijako, ei kuljetusten mitattu päästöosuus."
  ],
  "s-processing": [
    "Jalostus",
    "Osuus preemiopotista jalostukselle. Suurempi osuus kasvattaa jalostuksen kuvitteellista korvausta ja pienentää muiden osuuksia.",
    "Esimerkkijako, ei jalostuksen mitattu päästöosuus."
  ],
  "s-retail": [
    "Kauppa",
    "Osuus preemiopotista kaupalle. Kaikkien toimijoiden osuudet pysyvät yhteensä 100 prosentissa.",
    "Esimerkkijako, ei kaupan mitattu päästöosuus."
  ]
};
for (const [id, [heading, meaning, basis]] of Object.entries(calculatorExplanations)) {
  const input = document.getElementById(id);
  const label = document.querySelector(`label[for="${id}"]`);
  if (!input || !label) continue;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'info-toggle';
  button.textContent = 'ⓘ';
  button.setAttribute('aria-label', `Lisätietoja: ${heading}`);
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-controls', `${id}-help`);
  label.insertBefore(button, label.querySelector('output'));
  const panel = document.createElement('div');
  panel.id = `${id}-help`;
  panel.className = 'info-panel';
  panel.hidden = true;
  const title = document.createElement('strong'); title.textContent = heading;
  const a = document.createElement('p'); a.textContent = meaning;
  const b = document.createElement('p');
  const lead = document.createElement('strong'); lead.textContent = 'Lähtöarvon peruste: ';
  b.append(lead, document.createTextNode(basis));
  panel.append(title, a, b);
  label.insertAdjacentElement('afterend', panel);
  button.addEventListener('click', () => {
    const opening = panel.hidden;
    document.querySelectorAll('.info-panel').forEach(p => {p.hidden = true;});
    document.querySelectorAll('.info-toggle').forEach(b => b.setAttribute('aria-expanded','false'));
    panel.hidden = !opening;
    button.setAttribute('aria-expanded', String(opening));
  });
}
